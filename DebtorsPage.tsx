import { useMemo, useState } from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Debtor, useInventory } from './InventoryContext';

const COLORS = {
  ink: '#183B35',
  green: '#285B4B',
  greenDark: '#1C433B',
  cream: '#F8F7F1',
  white: '#FFFFFF',
  muted: '#8D9890',
  line: '#E9ECE5',
  orange: '#D87947',
};

const money = (amount: number) => `$${amount.toFixed(2)}`;

function todayDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function isValidDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

function formatDate(value: string) {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function balanceFor(debtor: Debtor) {
  const paid = debtor.payments.reduce((total, payment) => total + payment.amount, 0);
  return Math.max(0, Math.round((debtor.amountOwed - paid) * 100) / 100);
}

export default function DebtorsPage() {
  const { debtors, setDebtors, debtorStorageError } = useInventory();
  const [editorVisible, setEditorVisible] = useState(false);
  const [paymentDebtor, setPaymentDebtor] = useState<Debtor | null>(null);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentDate, setPaymentDate] = useState(todayDate());
  const [formError, setFormError] = useState('');
  const [search, setSearch] = useState('');

  const totalOutstanding = useMemo(
    () => debtors.reduce((total, debtor) => total + balanceFor(debtor), 0),
    [debtors],
  );
  const visibleDebtors = useMemo(() => {
    const query = search.trim().toLowerCase();
    return debtors.filter((debtor) => debtor.name.toLowerCase().includes(query));
  }, [debtors, search]);

  const openNewDebtor = () => {
    setName('');
    setAmount('');
    setFormError('');
    setEditorVisible(true);
  };

  const saveDebtor = () => {
    const parsedAmount = Number(amount);
    if (!name.trim()) {
      setFormError('Enter the debtor’s name.');
      return;
    }
    if (!amount.trim() || !Number.isFinite(parsedAmount) || parsedAmount <= 0) {
      setFormError('Enter an amount greater than zero.');
      return;
    }
    const debtor: Debtor = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      name: name.trim(),
      amountOwed: Math.round(parsedAmount * 100) / 100,
      payments: [],
    };
    setDebtors((current) => [debtor, ...current]);
    setEditorVisible(false);
  };

  const openPayment = (debtor: Debtor) => {
    setPaymentDebtor(debtor);
    setAmount('');
    setPaymentDate(todayDate());
    setFormError('');
  };

  const savePayment = () => {
    if (!paymentDebtor) return;
    const parsedAmount = Number(amount);
    if (!amount.trim() || !Number.isFinite(parsedAmount) || parsedAmount <= 0) {
      setFormError('Enter a payment amount greater than zero.');
      return;
    }
    if (!isValidDate(paymentDate)) {
      setFormError('Enter a valid date in YYYY-MM-DD format.');
      return;
    }
    const paymentAmount = Math.round(parsedAmount * 100) / 100;
    const currentBalance = balanceFor(paymentDebtor);
    if (paymentAmount > currentBalance) {
      setFormError(`Payment cannot be more than the remaining balance of ${money(currentBalance)}.`);
      return;
    }
    const payment = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      amount: paymentAmount,
      date: paymentDate,
    };
    setDebtors((current) =>
      current.map((debtor) =>
        debtor.id === paymentDebtor.id ? { ...debtor, payments: [...debtor.payments, payment] } : debtor,
      ),
    );
    setPaymentDebtor(null);
  };

  return (
    <>
      <View style={styles.heading}>
        <View style={styles.headingCopy}>
          <Text style={styles.eyebrow}>CUSTOMER ACCOUNTS</Text>
          <Text style={styles.title}>Debtors</Text>
          <Text style={styles.subtitle}>Track payments and what each customer still owes.</Text>
        </View>
        <Pressable style={styles.addButton} onPress={openNewDebtor} accessibilityLabel="Add debtor">
          <Text style={styles.addButtonText}>＋ Add debtor</Text>
        </Pressable>
      </View>

      {debtorStorageError ? (
        <View style={styles.errorBanner}><Text style={styles.errorText}>{debtorStorageError}</Text></View>
      ) : null}

      <View style={styles.summaryCard}>
        <View style={styles.summaryIcon}><Text style={styles.summaryIconText}>$</Text></View>
        <View style={styles.summaryCopy}>
          <Text style={styles.summaryLabel}>TOTAL OUTSTANDING</Text>
          <Text style={styles.summaryAmount}>{money(totalOutstanding)}</Text>
          <Text style={styles.summaryNote}>{debtors.length} {debtors.length === 1 ? 'account' : 'accounts'} recorded</Text>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionTitle}>Debtor list</Text>
          <Text style={styles.sectionHint}>Payments and balances by customer</Text>
        </View>
      </View>
      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>⌕</Text>
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search debtors"
          placeholderTextColor={COLORS.muted}
          style={styles.searchInput}
          accessibilityLabel="Search debtors"
          returnKeyType="search"
        />
        {search ? <Pressable onPress={() => setSearch('')}><Text style={styles.clearSearch}>×</Text></Pressable> : null}
      </View>

      <View style={styles.debtorList}>
        {visibleDebtors.length ? visibleDebtors.map((debtor) => (
          <DebtorCard key={debtor.id} debtor={debtor} onRecordPayment={() => openPayment(debtor)} />
        )) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>{search ? '⌕' : '🧾'}</Text>
            <Text style={styles.emptyTitle}>{search ? 'No matching debtors' : 'No debtors yet'}</Text>
            <Text style={styles.emptySubtitle}>
              {search ? 'Try another name.' : 'Add a customer and amount owed to start keeping track.'}
            </Text>
            {!search ? <Pressable onPress={openNewDebtor}><Text style={styles.emptyAction}>Add a debtor  →</Text></Pressable> : null}
          </View>
        )}
      </View>

      <Modal visible={editorVisible} animationType="slide" transparent onRequestClose={() => setEditorVisible(false)}>
        <KeyboardAvoidingView style={styles.modalLayer} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <Pressable style={styles.scrim} onPress={() => setEditorVisible(false)} />
          <View style={styles.modalCard}>
            <View style={styles.modalHandle} />
            <ModalHeading eyebrow="CUSTOMER ACCOUNT" title="Add a debtor" onClose={() => setEditorVisible(false)} />
            <Text style={styles.inputLabel}>DEBTOR NAME</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="e.g. Alex Johnson"
              placeholderTextColor={COLORS.muted}
              style={styles.input}
              accessibilityLabel="Debtor name"
              autoCapitalize="words"
            />
            <Text style={styles.inputLabel}>TOTAL AMOUNT OWED ($)</Text>
            <TextInput
              value={amount}
              onChangeText={setAmount}
              placeholder="0.00"
              placeholderTextColor={COLORS.muted}
              style={styles.input}
              accessibilityLabel="Total amount owed"
              keyboardType="decimal-pad"
            />
            {formError ? <Text style={styles.formError}>{formError}</Text> : null}
            <Pressable style={styles.saveButton} onPress={saveDebtor}>
              <Text style={styles.saveButtonText}>Save debtor</Text><Text style={styles.saveArrow}>→</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      <Modal visible={Boolean(paymentDebtor)} animationType="slide" transparent onRequestClose={() => setPaymentDebtor(null)}>
        <KeyboardAvoidingView style={styles.modalLayer} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <Pressable style={styles.scrim} onPress={() => setPaymentDebtor(null)} />
          <View style={styles.modalCard}>
            <View style={styles.modalHandle} />
            <ModalHeading
              eyebrow={paymentDebtor ? `BALANCE ${money(balanceFor(paymentDebtor))}` : 'PAYMENT'}
              title={paymentDebtor ? `Record payment` : 'Record payment'}
              onClose={() => setPaymentDebtor(null)}
            />
            {paymentDebtor ? <Text style={styles.paymentFor}>Payment from {paymentDebtor.name}</Text> : null}
            <Text style={styles.inputLabel}>PAYMENT AMOUNT ($)</Text>
            <TextInput
              value={amount}
              onChangeText={setAmount}
              placeholder="0.00"
              placeholderTextColor={COLORS.muted}
              style={styles.input}
              accessibilityLabel="Payment amount"
              keyboardType="decimal-pad"
            />
            <Text style={styles.inputLabel}>PAYMENT DATE</Text>
            <TextInput
              value={paymentDate}
              onChangeText={setPaymentDate}
              placeholder="YYYY-MM-DD"
              placeholderTextColor={COLORS.muted}
              style={styles.input}
              accessibilityLabel="Payment date"
              keyboardType="numbers-and-punctuation"
              maxLength={10}
            />
            {formError ? <Text style={styles.formError}>{formError}</Text> : null}
            <Pressable style={styles.saveButton} onPress={savePayment}>
              <Text style={styles.saveButtonText}>Save payment</Text><Text style={styles.saveArrow}>→</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
}

function DebtorCard({ debtor, onRecordPayment }: { debtor: Debtor; onRecordPayment: () => void }) {
  const balance = balanceFor(debtor);
  const totalPaid = Math.round((debtor.amountOwed - balance) * 100) / 100;
  const payments = [...debtor.payments].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <View style={styles.debtorCard}>
      <View style={styles.debtorTop}>
        <View style={styles.avatar}><Text style={styles.avatarText}>{debtor.name.trim().charAt(0).toUpperCase()}</Text></View>
        <View style={styles.debtorIdentity}>
          <Text style={styles.debtorName}>{debtor.name}</Text>
          <Text style={styles.debtorMeta}>Amount owed {money(debtor.amountOwed)}</Text>
        </View>
        <View style={[styles.statusPill, balance === 0 && styles.paidPill]}>
          <Text style={[styles.statusText, balance === 0 && styles.paidText]}>{balance === 0 ? 'PAID' : 'OWES'}</Text>
        </View>
      </View>
      <View style={styles.balanceRow}>
        <View>
          <Text style={styles.balanceLabel}>BALANCE LEFT</Text>
          <Text style={[styles.balanceAmount, balance === 0 && styles.balancePaid]}>{money(balance)}</Text>
        </View>
        <View style={styles.paidTotal}>
          <Text style={styles.balanceLabel}>PAID SO FAR</Text>
          <Text style={styles.paidAmount}>{money(totalPaid)}</Text>
        </View>
      </View>
      {payments.length ? (
        <View style={styles.paymentHistory}>
          <Text style={styles.historyTitle}>PAYMENT HISTORY</Text>
          {payments.map((payment) => (
            <View key={payment.id} style={styles.paymentRow}>
              <Text style={styles.paymentDate}>{formatDate(payment.date)}</Text>
              <Text style={styles.paymentAmount}>+ {money(payment.amount)}</Text>
            </View>
          ))}
        </View>
      ) : null}
      {balance > 0 ? (
        <Pressable style={styles.paymentButton} onPress={onRecordPayment} accessibilityLabel={`Record payment for ${debtor.name}`}>
          <Text style={styles.paymentButtonText}>＋ Record payment</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

function ModalHeading({ eyebrow, title, onClose }: { eyebrow: string; title: string; onClose: () => void }) {
  return (
    <View style={styles.modalHeading}>
      <View>
        <Text style={styles.modalEyebrow}>{eyebrow}</Text>
        <Text style={styles.modalTitle}>{title}</Text>
      </View>
      <Pressable style={styles.closeButton} onPress={onClose} accessibilityLabel="Close">
        <Text style={styles.closeButtonText}>×</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 19 },
  headingCopy: { flex: 1, paddingRight: 8 },
  eyebrow: { color: COLORS.orange, fontSize: 9, letterSpacing: 1.65, fontWeight: '800', marginBottom: 7 },
  title: { color: COLORS.ink, fontSize: 23, letterSpacing: -0.8, fontWeight: '800' },
  subtitle: { color: '#77847B', fontSize: 12, marginTop: 5, lineHeight: 17 },
  addButton: { backgroundColor: COLORS.green, minHeight: 40, borderRadius: 12, paddingHorizontal: 12, alignItems: 'center', justifyContent: 'center' },
  addButtonText: { color: COLORS.white, fontSize: 11, fontWeight: '700' },
  errorBanner: { backgroundColor: '#FCE9E4', borderRadius: 10, padding: 11, marginBottom: 14, borderColor: '#F3C8BA', borderWidth: 1 },
  errorText: { color: '#9B4532', fontSize: 11, fontWeight: '600' },
  summaryCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.greenDark, borderRadius: 18, padding: 17, marginBottom: 23 },
  summaryIcon: { width: 43, height: 43, borderRadius: 14, backgroundColor: '#D9A16C', alignItems: 'center', justifyContent: 'center', marginRight: 13 },
  summaryIconText: { color: COLORS.greenDark, fontSize: 22, fontWeight: '800' },
  summaryCopy: { flex: 1 },
  summaryLabel: { color: '#BDD0BE', fontSize: 8, letterSpacing: 1.4, fontWeight: '800' },
  summaryAmount: { color: '#FFFDF7', fontSize: 23, letterSpacing: -0.5, fontWeight: '800', marginTop: 4 },
  summaryNote: { color: '#CADACB', fontSize: 10, marginTop: 3 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  sectionTitle: { color: COLORS.ink, fontSize: 18, letterSpacing: -0.4, fontWeight: '800' },
  sectionHint: { color: COLORS.muted, fontSize: 10, marginTop: 4 },
  searchBox: { flexDirection: 'row', alignItems: 'center', height: 44, borderRadius: 13, paddingHorizontal: 12, backgroundColor: COLORS.white, borderWidth: 1, borderColor: COLORS.line, marginBottom: 12 },
  searchIcon: { color: '#73847A', fontSize: 25, lineHeight: 28, transform: [{ rotate: '-20deg' }], marginRight: 8 },
  searchInput: { flex: 1, paddingVertical: 0, color: COLORS.ink, fontSize: 12 },
  clearSearch: { color: COLORS.muted, fontSize: 21, paddingHorizontal: 3 },
  debtorList: { gap: 10 },
  debtorCard: { backgroundColor: COLORS.white, borderRadius: 16, padding: 14, borderWidth: 1, borderColor: '#EFF0EA', marginBottom: 10 },
  debtorTop: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 40, height: 40, borderRadius: 14, backgroundColor: '#F0F3EA', alignItems: 'center', justifyContent: 'center', marginRight: 10 },
  avatarText: { color: COLORS.green, fontSize: 16, fontWeight: '800' },
  debtorIdentity: { flex: 1 },
  debtorName: { color: COLORS.ink, fontSize: 13, fontWeight: '800' },
  debtorMeta: { color: COLORS.muted, fontSize: 10, marginTop: 4 },
  statusPill: { backgroundColor: '#FFF0E8', borderRadius: 7, paddingHorizontal: 8, paddingVertical: 5 },
  statusText: { color: COLORS.orange, fontSize: 8, fontWeight: '900', letterSpacing: 0.6 },
  paidPill: { backgroundColor: '#E8F0E7' },
  paidText: { color: COLORS.green },
  balanceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F8F8F3', borderRadius: 11, padding: 11, marginTop: 13 },
  balanceLabel: { color: COLORS.muted, fontSize: 7, letterSpacing: 1, fontWeight: '800' },
  balanceAmount: { color: COLORS.orange, fontSize: 18, fontWeight: '800', marginTop: 4 },
  balancePaid: { color: COLORS.green },
  paidTotal: { alignItems: 'flex-end' },
  paidAmount: { color: COLORS.ink, fontSize: 14, fontWeight: '700', marginTop: 5 },
  paymentHistory: { paddingTop: 12 },
  historyTitle: { color: COLORS.muted, fontSize: 8, letterSpacing: 1, fontWeight: '800', marginBottom: 6 },
  paymentRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6, borderBottomWidth: 1, borderBottomColor: '#F1F1EC' },
  paymentDate: { color: '#77847B', fontSize: 10 },
  paymentAmount: { color: COLORS.green, fontSize: 10, fontWeight: '800' },
  paymentButton: { height: 39, borderRadius: 10, backgroundColor: COLORS.green, alignItems: 'center', justifyContent: 'center', marginTop: 12 },
  paymentButtonText: { color: COLORS.white, fontSize: 11, fontWeight: '700' },
  emptyState: { alignItems: 'center', paddingHorizontal: 20, paddingVertical: 32, backgroundColor: COLORS.white, borderRadius: 18, borderColor: COLORS.line, borderWidth: 1 },
  emptyIcon: { fontSize: 28, marginBottom: 9 },
  emptyTitle: { color: COLORS.ink, fontSize: 14, fontWeight: '800' },
  emptySubtitle: { color: COLORS.muted, fontSize: 10, textAlign: 'center', marginTop: 5, lineHeight: 15 },
  emptyAction: { color: COLORS.green, fontSize: 11, fontWeight: '800', marginTop: 14 },
  modalLayer: { flex: 1, justifyContent: 'flex-end' },
  scrim: { ...StyleSheet.absoluteFill, backgroundColor: 'rgba(20,40,32,0.42)' },
  modalCard: { backgroundColor: COLORS.cream, borderTopLeftRadius: 25, borderTopRightRadius: 25, paddingHorizontal: 21, paddingTop: 10, paddingBottom: Platform.OS === 'ios' ? 28 : 18 },
  modalHandle: { width: 38, height: 4, borderRadius: 2, backgroundColor: '#D8DED5', alignSelf: 'center', marginBottom: 18 },
  modalHeading: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 17 },
  modalEyebrow: { color: COLORS.orange, fontSize: 8, letterSpacing: 1.4, fontWeight: '800', marginBottom: 5 },
  modalTitle: { color: COLORS.ink, fontSize: 21, fontWeight: '800', letterSpacing: -0.5 },
  closeButton: { width: 32, height: 32, borderRadius: 11, backgroundColor: '#EEEFE9', alignItems: 'center', justifyContent: 'center' },
  closeButtonText: { color: '#65736A', fontSize: 22, lineHeight: 25 },
  paymentFor: { color: '#77847B', fontSize: 11, marginTop: -8, marginBottom: 16 },
  inputLabel: { color: '#77847B', fontSize: 8, letterSpacing: 1, fontWeight: '800', marginBottom: 7 },
  input: { height: 43, borderRadius: 11, borderWidth: 1, borderColor: '#E5E9E0', backgroundColor: COLORS.white, paddingHorizontal: 12, color: COLORS.ink, fontSize: 12, marginBottom: 15 },
  formError: { color: '#B64B35', fontSize: 10, fontWeight: '700', marginBottom: 12 },
  saveButton: { height: 47, borderRadius: 13, backgroundColor: COLORS.green, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 9 },
  saveButtonText: { color: COLORS.white, fontSize: 12, fontWeight: '800' },
  saveArrow: { color: '#E4BD94', fontSize: 16 },
});

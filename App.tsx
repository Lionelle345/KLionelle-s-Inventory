import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StatusBar as NativeStatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { InventoryItem, useInventory } from './InventoryContext';
import DebtorsPage from './DebtorsPage';
import { useAuth } from './AuthContext';

type FormValues = {
  name: string;
  category: string;
  quantity: string;
  unit: string;
  price: string;
  threshold: string;
};

export type Screen = 'overview' | 'inventory' | 'alerts' | 'debtors';
const CATEGORIES = ['All items', 'Produce', 'Dairy', 'Pantry', 'Bakery', 'Drinks'];

const CATEGORY_EMOJI: Record<string, string> = {
  Produce: '🥬',
  Dairy: '🥛',
  Pantry: '🫙',
  Bakery: '🥖',
  Drinks: '🧃',
};

const money = (amount: number) => `$${amount.toFixed(2)}`;

function isLowStock(item: InventoryItem) {
  return item.quantity <= item.threshold;
}

export default function InventoryExperience({ screen }: { screen: Screen }) {
  const { items, setItems, storageError } = useInventory();
  const { user, signOutUser } = useAuth();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All items');
  const [editorVisible, setEditorVisible] = useState(false);
  const [editingItem, setEditingItem] = useState<InventoryItem | null>(null);
  const [itemToDelete, setItemToDelete] = useState<InventoryItem | null>(null);
  const [form, setForm] = useState<FormValues>({
    name: '',
    category: 'Produce',
    quantity: '',
    unit: 'pcs',
    price: '',
    threshold: '',
  });
  const [formError, setFormError] = useState('');
  const [accountError, setAccountError] = useState('');

  const lowStockItems = useMemo(() => items.filter(isLowStock), [items]);
  const totalUnits = useMemo(() => items.reduce((total, item) => total + item.quantity, 0), [items]);
  const inventoryValue = useMemo(
    () => items.reduce((total, item) => total + item.quantity * item.price, 0),
    [items],
  );
  const visibleItems = useMemo(() => {
    const query = search.trim().toLowerCase();
    return items.filter((item) => {
      const matchesCategory = category === 'All items' || item.category === category;
      const matchesSearch =
        !query || item.name.toLowerCase().includes(query) || item.category.toLowerCase().includes(query);
      const matchesScreen = screen !== 'alerts' || isLowStock(item);
      return matchesCategory && matchesSearch && matchesScreen;
    });
  }, [category, items, screen, search]);

  const openNewItem = () => {
    setEditingItem(null);
    setForm({ name: '', category: 'Produce', quantity: '', unit: 'pcs', price: '', threshold: '' });
    setFormError('');
    setEditorVisible(true);
  };

  const openEditItem = (item: InventoryItem) => {
    setEditingItem(item);
    setForm({
      name: item.name,
      category: item.category,
      quantity: String(item.quantity),
      unit: item.unit,
      price: String(item.price),
      threshold: String(item.threshold),
    });
    setFormError('');
    setEditorVisible(true);
  };

  const updateQuantity = (id: string, change: number) => {
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item,
      ),
    );
  };

  const saveItem = () => {
    const quantity = Number(form.quantity);
    const price = Number(form.price);
    const threshold = Number(form.threshold);
    if (!form.name.trim() || !form.unit.trim()) {
      setFormError('Add an item name and unit to continue.');
      return;
    }
    if (
      form.quantity.trim() === '' ||
      form.price.trim() === '' ||
      form.threshold.trim() === '' ||
      !Number.isFinite(quantity) ||
      !Number.isFinite(price) ||
      !Number.isFinite(threshold) ||
      quantity < 0 ||
      price < 0 ||
      threshold < 0
    ) {
      setFormError('Enter valid, non-negative numbers for quantity, cost, and low-stock level.');
      return;
    }

    const updatedItem: InventoryItem = {
      id: editingItem?.id ?? String(Date.now()),
      name: form.name.trim(),
      category: form.category,
      quantity,
      unit: form.unit.trim(),
      price,
      threshold,
      emoji: editingItem?.emoji ?? CATEGORY_EMOJI[form.category] ?? '🛍️',
    };
    setItems((current) =>
      editingItem
        ? current.map((item) => (item.id === editingItem.id ? updatedItem : item))
        : [updatedItem, ...current],
    );
    setEditorVisible(false);
  };

  const setActiveScreen = (nextScreen: Screen) => {
    setSearch('');
    setCategory('All items');
    router.navigate(nextScreen === 'overview' ? '/(tabs)' : `/(tabs)/${nextScreen}`);
  };

  const handleAccountAction = async () => {
    setAccountError('');
    if (!user) {
      router.push('/auth');
      return;
    }
    try {
      await signOutUser();
      router.replace('/auth');
    } catch {
      setAccountError('Could not sign out. Please try again.');
    }
  };

  const deleteItem = () => {
    if (!editingItem) return;
    setItemToDelete(editingItem);
  };

  const confirmDeleteItem = () => {
    if (!itemToDelete) return;
    setItems((current) => current.filter((item) => item.id !== itemToDelete.id));
    if (editingItem?.id === itemToDelete.id) setEditorVisible(false);
    setItemToDelete(null);
  };

  const screenTitle =
    screen === 'overview'
      ? 'Good morning, K’Lionelle’s'
      : screen === 'alerts'
        ? 'Needs a restock'
        : screen === 'debtors'
          ? 'Debtors'
          : 'Your inventory';

  return (
    <View style={styles.app}>
      <StatusBar style="dark" />
      <View style={styles.topBar}>
        <View style={styles.brandMark}><Text style={styles.brandMarkText}>K</Text></View>
        <View style={styles.brandCopy}>
          <Text style={styles.brandName}>K’LIONELLE’S</Text>
          <Text style={styles.brandCaption}>GROCERY · INVENTORY</Text>
        </View>
        <Pressable
          style={styles.accountButton}
          onPress={handleAccountAction}
          accessibilityLabel={user ? 'Sign out' : 'Log in'}
        >
          <Text style={styles.accountButtonText}>{user ? 'Sign out' : 'Log in'}</Text>
        </Pressable>
        <Pressable style={styles.avatar} onPress={() => setActiveScreen('overview')} accessibilityLabel="Go to overview">
          <Text style={styles.avatarText}>K</Text>
        </Pressable>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {screen !== 'debtors' ? (
          <View style={styles.titleRow}>
            <View style={styles.titleCopy}>
              <Text style={styles.eyebrow}>{screen === 'alerts' ? 'STOCK CHECK' : 'DAILY STORE OVERVIEW'}</Text>
              <Text style={styles.pageTitle}>{screenTitle}</Text>
              <Text style={styles.subtitle}>
                {screen === 'alerts'
                  ? 'A few favorites are running low.'
                  : screen === 'inventory'
                    ? 'Everything on your shelves, at a glance.'
                    : 'Fresh shelves, happy customers.'}
              </Text>
            </View>
            <Pressable style={styles.addButton} onPress={openNewItem} accessibilityLabel="Add inventory item">
              <Text style={styles.addButtonPlus}>＋</Text>
              <Text style={styles.addButtonText}>Add item</Text>
            </Pressable>
          </View>
        ) : null}

        {screen !== 'debtors' && storageError ? (
          <View style={styles.errorBanner}>
            <Text style={styles.errorText}>{storageError}</Text>
          </View>
        ) : null}
        {accountError ? (
          <View style={styles.errorBanner}>
            <Text style={styles.errorText}>{accountError}</Text>
          </View>
        ) : null}

        {screen === 'debtors' ? <DebtorsPage /> : <>
        {screen === 'overview' ? (
          <>
            <View style={styles.heroCard}>
              <View style={styles.heroTopLine}>
                <View style={styles.liveDot} />
                <Text style={styles.heroKicker}>TODAY AT YOUR STORE</Text>
                <Text style={styles.heroSparkle}>✦</Text>
              </View>
              <Text style={styles.heroTitle}>A little more{'\n'}organized. A lot fresher.</Text>
              <View style={styles.heroBottom}>
                <Text style={styles.heroCaption}>Your shelves are looking good today.</Text>
                <View style={styles.heroIllustration}><Text style={styles.heroFruit}>🥑</Text><Text style={styles.heroFruit}>🍊</Text></View>
              </View>
              <View style={styles.heroDecorOne} />
              <View style={styles.heroDecorTwo} />
            </View>

            <View style={styles.statsRow}>
              <StatCard label="ITEMS TRACKED" value={String(items.length).padStart(2, '0')} note="unique products" icon="▦" />
              <StatCard label="ON HAND" value={String(totalUnits)} note="total units" icon="↗" />
              <StatCard label="STOCK VALUE" value={money(inventoryValue)} note="at cost" icon="$" />
            </View>

            <Pressable style={styles.alertCard} onPress={() => setActiveScreen('alerts')}>
              <View style={styles.alertIcon}><Text style={styles.alertIconText}>!</Text></View>
              <View style={styles.alertCopy}>
                <Text style={styles.alertTitle}>
                  {lowStockItems.length ? `${lowStockItems.length} items need a little love` : 'All shelves are looking good'}
                </Text>
                <Text style={styles.alertSubtitle}>
                  {lowStockItems.length ? 'Review your low-stock list before the next rush.' : 'No items are below their restock level.'}
                </Text>
              </View>
              <Text style={styles.cardArrow}>›</Text>
            </Pressable>
          </>
        ) : null}

        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>{screen === 'alerts' ? 'Restock list' : screen === 'overview' ? 'A fresh look' : 'All items'}</Text>
            <Text style={styles.sectionHint}>
              {screen === 'alerts' ? 'Below your minimum stock level' : screen === 'overview' ? 'Your most recent stock check' : `${visibleItems.length} products in your store`}
            </Text>
          </View>
          {screen === 'overview' ? (
            <Pressable onPress={() => setActiveScreen('inventory')}><Text style={styles.seeAll}>See all  ↗</Text></Pressable>
          ) : null}
        </View>

        {screen !== 'overview' ? (
          <>
            <View style={styles.searchBox}>
              <Text style={styles.searchIcon}>⌕</Text>
              <TextInput
                value={search}
                onChangeText={setSearch}
                placeholder="Search products or categories"
                placeholderTextColor={COLORS.muted}
                style={styles.searchInput}
                accessibilityLabel="Search inventory"
                returnKeyType="search"
              />
              {search ? <Pressable onPress={() => setSearch('')}><Text style={styles.clearSearch}>×</Text></Pressable> : null}
            </View>
            {screen === 'inventory' ? (
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryRow}>
                {CATEGORIES.map((itemCategory) => {
                  const selected = category === itemCategory;
                  return (
                    <Pressable
                      key={itemCategory}
                      onPress={() => setCategory(itemCategory)}
                      style={[styles.categoryChip, selected && styles.categoryChipSelected]}
                    >
                      <Text style={[styles.categoryChipText, selected && styles.categoryChipTextSelected]}>{itemCategory}</Text>
                    </Pressable>
                  );
                })}
              </ScrollView>
            ) : null}
          </>
        ) : null}

        <View style={styles.itemList}>
          {visibleItems.length ? visibleItems.map((item) => (
            <InventoryRow
              key={item.id}
              item={item}
              onChangeQuantity={updateQuantity}
              onEdit={openEditItem}
              onDelete={() => setItemToDelete(item)}
            />
          )) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyEmoji}>{screen === 'alerts' ? '✨' : '🧺'}</Text>
              <Text style={styles.emptyTitle}>{screen === 'alerts' ? 'Nothing to restock' : 'No items found'}</Text>
              <Text style={styles.emptySubtitle}>
                {screen === 'alerts' ? 'Everything is above its minimum level.' : 'Try a different search or add a new product.'}
              </Text>
              {screen !== 'alerts' ? <Pressable onPress={openNewItem}><Text style={styles.emptyAction}>Add your first item  →</Text></Pressable> : null}
            </View>
          )}
        </View>

        <View style={styles.footerNote}>
          <Text style={styles.footerStar}>✦</Text>
          <Text style={styles.footerText}>A little care goes a long way.</Text>
        </View>
        </>}
      </ScrollView>

      <View style={styles.bottomBar}>
        <NavButton label="Today" icon="⌂" active={screen === 'overview'} onPress={() => setActiveScreen('overview')} />
        <NavButton label="Inventory" icon="▦" active={screen === 'inventory'} onPress={() => setActiveScreen('inventory')} />
        <NavButton label="Restock" icon="♧" active={screen === 'alerts'} badge={lowStockItems.length} onPress={() => setActiveScreen('alerts')} />
        <NavButton label="Debtors" icon="$" active={screen === 'debtors'} onPress={() => setActiveScreen('debtors')} />
      </View>

      <ItemEditor
        visible={editorVisible}
        editing={Boolean(editingItem)}
        form={form}
        setForm={setForm}
        error={formError}
        onClose={() => setEditorVisible(false)}
        onSave={saveItem}
        onDelete={deleteItem}
      />
      <DeleteItemConfirmation
        item={itemToDelete}
        onCancel={() => setItemToDelete(null)}
        onConfirm={confirmDeleteItem}
      />
    </View>
  );
}

function StatCard({ label, value, note, icon }: { label: string; value: string; note: string; icon: string }) {
  return (
    <View style={styles.statCard}>
      <View style={styles.statTop}><Text style={styles.statLabel}>{label}</Text><Text style={styles.statIcon}>{icon}</Text></View>
      <Text style={styles.statValue} numberOfLines={1} adjustsFontSizeToFit>{value}</Text>
      <Text style={styles.statNote}>{note}</Text>
    </View>
  );
}

function InventoryRow({
  item,
  onChangeQuantity,
  onEdit,
  onDelete,
}: {
  item: InventoryItem;
  onChangeQuantity: (id: string, change: number) => void;
  onEdit: (item: InventoryItem) => void;
  onDelete: () => void;
}) {
  const lowStock = isLowStock(item);
  return (
    <View style={styles.itemCard}>
      <Pressable
        style={styles.itemMain}
        onPress={() => onEdit(item)}
        accessibilityLabel={`Edit name and details for ${item.name}`}
      >
        <View style={[styles.itemEmojiBox, lowStock && styles.itemEmojiBoxLow]}><Text style={styles.itemEmoji}>{item.emoji}</Text></View>
        <View style={styles.itemDetails}>
          <View style={styles.itemNameLine}>
            <Text style={styles.itemName} numberOfLines={1}>{item.name}</Text>
            {lowStock ? <View style={styles.lowPill}><Text style={styles.lowPillText}>LOW</Text></View> : null}
          </View>
          <Text style={styles.itemMeta}>{item.category}  ·  {money(item.price)} / {item.unit.replace(/s$/, '')}</Text>
          <Text style={styles.itemValue}>Stock value  <Text style={styles.itemValueStrong}>{money(item.quantity * item.price)}</Text></Text>
        </View>
        <Text style={styles.editArrow}>›</Text>
      </Pressable>
      <View style={styles.itemDivider} />
      <View style={styles.itemStockLine}>
        <Text style={styles.stockLabel}>ON HAND <Text style={styles.stockLevel}>· Restock at {item.threshold}</Text></Text>
        <View style={styles.stepper}>
          <Pressable
            style={[styles.stepButton, item.quantity === 0 && styles.stepButtonDisabled]}
            onPress={() => onChangeQuantity(item.id, -1)}
            disabled={item.quantity === 0}
            accessibilityLabel={`Remove one ${item.name}`}
          >
            <Text style={styles.stepButtonText}>−</Text>
          </Pressable>
          <Text style={[styles.quantityText, lowStock && styles.quantityTextLow]}>{item.quantity} <Text style={styles.quantityUnit}>{item.unit}</Text></Text>
          <Pressable style={styles.stepButtonAdd} onPress={() => onChangeQuantity(item.id, 1)} accessibilityLabel={`Add one ${item.name}`}>
            <Text style={styles.stepButtonAddText}>＋</Text>
          </Pressable>
        </View>
      </View>
      {item.quantity === 0 ? (
        <Pressable
          style={styles.outOfStockDelete}
          onPress={onDelete}
          accessibilityLabel={`Delete out-of-stock item ${item.name}`}
        >
          <Text style={styles.outOfStockDeleteText}>Remove out-of-stock item</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

function DeleteItemConfirmation({
  item,
  onCancel,
  onConfirm,
}: {
  item: InventoryItem | null;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <Modal visible={item !== null} transparent animationType="fade" onRequestClose={onCancel}>
      <View style={styles.confirmationLayer}>
        <Pressable style={styles.confirmationScrim} onPress={onCancel} accessibilityLabel="Cancel delete" />
        <View style={styles.confirmationCard} accessibilityRole="alert">
          <Text style={styles.confirmationEyebrow}>REMOVE FROM INVENTORY</Text>
          <Text style={styles.confirmationTitle}>Delete this item?</Text>
          <Text style={styles.confirmationMessage}>
            {item ? `${item.name} will be permanently removed from your inventory.` : ''}
          </Text>
          <View style={styles.confirmationActions}>
            <Pressable style={styles.cancelDeleteButton} onPress={onCancel}>
              <Text style={styles.cancelDeleteText}>Keep item</Text>
            </Pressable>
            <Pressable style={styles.confirmDeleteButton} onPress={onConfirm} accessibilityLabel="Confirm delete item">
              <Text style={styles.confirmDeleteText}>Delete item</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

function NavButton({
  label,
  icon,
  active,
  badge,
  onPress,
}: {
  label: string;
  icon: string;
  active: boolean;
  badge?: number;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.navButton} onPress={onPress}>
      <View style={styles.navIconWrap}>
        <Text style={[styles.navIcon, active && styles.navIconActive]}>{icon}</Text>
        {badge ? <View style={styles.navBadge}><Text style={styles.navBadgeText}>{badge}</Text></View> : null}
      </View>
      <Text style={[styles.navLabel, active && styles.navLabelActive]}>{label}</Text>
    </Pressable>
  );
}

function ItemEditor({
  visible,
  editing,
  form,
  setForm,
  error,
  onClose,
  onSave,
  onDelete,
}: {
  visible: boolean;
  editing: boolean;
  form: FormValues;
  setForm: (next: FormValues) => void;
  error: string;
  onClose: () => void;
  onSave: () => void;
  onDelete: () => void;
}) {
  const patchForm = (patch: Partial<FormValues>) => setForm({ ...form, ...patch });

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <KeyboardAvoidingView style={styles.modalLayer} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Pressable style={styles.modalScrim} onPress={onClose} />
        <View style={styles.modalCard}>
          <View style={styles.modalHandle} />
          <View style={styles.modalHeading}>
            <View>
              <Text style={styles.modalEyebrow}>{editing ? 'UPDATE YOUR SHELVES' : 'GROW YOUR INVENTORY'}</Text>
              <Text style={styles.modalTitle}>{editing ? 'Edit item' : 'Add something fresh'}</Text>
            </View>
            <Pressable style={styles.closeButton} onPress={onClose}><Text style={styles.closeButtonText}>×</Text></Pressable>
          </View>
          <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
            <Text style={styles.inputLabel}>ITEM NAME</Text>
            <TextInput
              value={form.name}
              onChangeText={(name) => patchForm({ name })}
              placeholder="e.g. Honeycrisp apples"
              placeholderTextColor={COLORS.muted}
              style={styles.formInput}
              accessibilityLabel="Item name"
            />
            <Text style={styles.inputLabel}>CATEGORY</Text>
            <View style={styles.formCategories}>
              {CATEGORIES.slice(1).map((itemCategory) => (
                <Pressable
                  key={itemCategory}
                  onPress={() => patchForm({ category: itemCategory })}
                  style={[styles.formCategory, form.category === itemCategory && styles.formCategorySelected]}
                >
                  <Text style={[styles.formCategoryText, form.category === itemCategory && styles.formCategoryTextSelected]}>
                    {CATEGORY_EMOJI[itemCategory]}  {itemCategory}
                  </Text>
                </Pressable>
              ))}
            </View>
            <View style={styles.formPair}>
              <FormField label="QUANTITY" value={form.quantity} onChange={(quantity) => patchForm({ quantity })} placeholder="0" numeric />
              <FormField label="UNIT" value={form.unit} onChange={(unit) => patchForm({ unit })} placeholder="pcs" />
            </View>
            <View style={styles.formPair}>
              <FormField label="COST PER UNIT ($)" value={form.price} onChange={(price) => patchForm({ price })} placeholder="0.00" numeric />
              <FormField label="RESTOCK AT" value={form.threshold} onChange={(threshold) => patchForm({ threshold })} placeholder="0" numeric />
            </View>
            {error ? <Text style={styles.formError}>{error}</Text> : null}
            <Pressable style={styles.saveButton} onPress={onSave}>
              <Text style={styles.saveButtonText}>{editing ? 'Save changes' : 'Add to inventory'}</Text>
              <Text style={styles.saveButtonArrow}>→</Text>
            </Pressable>
            {editing ? <Pressable style={styles.deleteButton} onPress={onDelete}><Text style={styles.deleteButtonText}>Remove from inventory</Text></Pressable> : null}
            <View style={styles.modalBottomSpace} />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

function FormField({
  label,
  value,
  onChange,
  placeholder,
  numeric = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  numeric?: boolean;
}) {
  return (
    <View style={styles.formField}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={COLORS.muted}
        style={styles.formInput}
        keyboardType={numeric ? 'decimal-pad' : 'default'}
        accessibilityLabel={label}
      />
    </View>
  );
}

const COLORS = {
  ink: '#183B35',
  green: '#285B4B',
  greenDark: '#1C433B',
  greenSoft: '#E8F0E7',
  cream: '#F8F7F1',
  white: '#FFFFFF',
  muted: '#8D9890',
  line: '#E9ECE5',
  orange: '#D87947',
  orangeLight: '#FFF0E8',
};

const styles = StyleSheet.create({
  app: { flex: 1, backgroundColor: COLORS.cream, paddingTop: Platform.OS === 'android' ? NativeStatusBar.currentHeight : 0 },
  topBar: { height: 74, paddingHorizontal: 22, flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.greenDark },
  brandMark: { width: 42, height: 42, borderRadius: 15, backgroundColor: '#D9A16C', alignItems: 'center', justifyContent: 'center', transform: [{ rotate: '-5deg' }] },
  brandMarkText: { color: COLORS.greenDark, fontSize: 24, fontWeight: '900', fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif' },
  brandCopy: { marginLeft: 12, flex: 1 },
  brandName: { color: '#FFFDF7', fontSize: 13, fontWeight: '800', letterSpacing: 2.2 },
  brandCaption: { color: '#BDD0BE', fontSize: 9, fontWeight: '700', letterSpacing: 1.7, marginTop: 4 },
  avatar: { width: 36, height: 36, borderRadius: 18, borderWidth: 1, borderColor: '#68816F', alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: '#F4EADB', fontWeight: '700', fontSize: 15 },
  accountButton: { height: 34, borderRadius: 10, borderWidth: 1, borderColor: '#68816F', paddingHorizontal: 10, alignItems: 'center', justifyContent: 'center', marginRight: 9 },
  accountButtonText: { color: '#F4EADB', fontWeight: '700', fontSize: 10 },
  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: 21, paddingTop: 25, paddingBottom: 94 },
  titleRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 },
  titleCopy: { flex: 1, paddingRight: 10 },
  eyebrow: { color: COLORS.orange, fontSize: 9, letterSpacing: 1.65, fontWeight: '800', marginBottom: 7 },
  pageTitle: { color: COLORS.ink, fontSize: 23, letterSpacing: -0.8, fontWeight: '800' },
  subtitle: { color: '#77847B', fontSize: 12, marginTop: 5 },
  addButton: { backgroundColor: COLORS.green, height: 40, borderRadius: 12, paddingHorizontal: 13, flexDirection: 'row', alignItems: 'center', gap: 5 },
  addButtonPlus: { color: '#F3D0A7', fontSize: 17, fontWeight: '500', marginTop: -1 },
  addButtonText: { color: '#FFFFFF', fontSize: 11, fontWeight: '700' },
  errorBanner: { backgroundColor: '#FCE9E4', borderRadius: 10, padding: 11, marginBottom: 14, borderColor: '#F3C8BA', borderWidth: 1 },
  errorText: { color: '#9B4532', fontSize: 11, fontWeight: '600' },
  heroCard: { backgroundColor: '#315D4A', borderRadius: 22, padding: 20, minHeight: 180, overflow: 'hidden', marginBottom: 13 },
  heroTopLine: { flexDirection: 'row', alignItems: 'center' },
  liveDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#E7B57E', marginRight: 7 },
  heroKicker: { color: '#D7E3D4', fontSize: 9, letterSpacing: 1.6, fontWeight: '800' },
  heroSparkle: { color: '#E7B57E', fontSize: 15, marginLeft: 'auto' },
  heroTitle: { color: '#FFFDF7', fontSize: 24, lineHeight: 30, letterSpacing: -0.7, fontWeight: '800', marginTop: 14 },
  heroBottom: { marginTop: 13, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  heroCaption: { color: '#CADACB', fontSize: 11 },
  heroIllustration: { flexDirection: 'row', marginRight: 9, gap: 1 },
  heroFruit: { fontSize: 29 },
  heroDecorOne: { position: 'absolute', width: 125, height: 125, borderRadius: 63, borderWidth: 1, borderColor: 'rgba(255,255,255,0.07)', right: -35, top: -50 },
  heroDecorTwo: { position: 'absolute', width: 88, height: 88, borderRadius: 44, borderWidth: 1, borderColor: 'rgba(255,255,255,0.07)', right: -13, top: -28 },
  statsRow: { flexDirection: 'row', gap: 9, marginBottom: 13 },
  statCard: { flex: 1, backgroundColor: COLORS.white, borderRadius: 16, paddingHorizontal: 11, paddingTop: 12, paddingBottom: 11, borderWidth: 1, borderColor: '#F0F0E9', minHeight: 91 },
  statTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  statLabel: { color: COLORS.muted, fontSize: 7, letterSpacing: 1, fontWeight: '800' },
  statIcon: { color: '#8BA88F', fontSize: 12, fontWeight: '800' },
  statValue: { color: COLORS.ink, fontSize: 20, fontWeight: '800', letterSpacing: -0.6, marginTop: 8 },
  statNote: { color: '#96A098', fontSize: 9, marginTop: 3 },
  alertCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF6EF', borderColor: '#F4E3D4', borderWidth: 1, borderRadius: 15, paddingHorizontal: 13, paddingVertical: 12, marginBottom: 25 },
  alertIcon: { width: 29, height: 29, borderRadius: 10, backgroundColor: '#F6DFCC', alignItems: 'center', justifyContent: 'center', marginRight: 10 },
  alertIconText: { color: '#AA643A', fontSize: 15, fontWeight: '800' },
  alertCopy: { flex: 1 },
  alertTitle: { color: '#704B36', fontSize: 11, fontWeight: '800' },
  alertSubtitle: { color: '#A8876E', fontSize: 9, marginTop: 4 },
  cardArrow: { color: '#B58668', fontSize: 24, marginLeft: 7, marginTop: -2 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 13 },
  sectionTitle: { color: COLORS.ink, fontSize: 18, letterSpacing: -0.4, fontWeight: '800' },
  sectionHint: { color: COLORS.muted, fontSize: 10, marginTop: 4 },
  seeAll: { color: COLORS.green, fontWeight: '800', fontSize: 10 },
  searchBox: { flexDirection: 'row', alignItems: 'center', height: 44, borderRadius: 13, paddingHorizontal: 12, backgroundColor: COLORS.white, borderWidth: 1, borderColor: COLORS.line, marginBottom: 12 },
  searchIcon: { color: '#73847A', fontSize: 25, lineHeight: 28, transform: [{ rotate: '-20deg' }], marginRight: 8 },
  searchInput: { flex: 1, paddingVertical: 0, color: COLORS.ink, fontSize: 12 },
  clearSearch: { color: COLORS.muted, fontSize: 21, paddingHorizontal: 3 },
  categoryRow: { paddingBottom: 15, gap: 7 },
  categoryChip: { paddingHorizontal: 13, height: 31, borderRadius: 11, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F0F0E9', borderWidth: 1, borderColor: '#ECEEE7' },
  categoryChipSelected: { backgroundColor: COLORS.green, borderColor: COLORS.green },
  categoryChipText: { color: '#77847B', fontSize: 10, fontWeight: '700' },
  categoryChipTextSelected: { color: '#FFFFFF' },
  itemList: { gap: 10 },
  itemCard: { backgroundColor: COLORS.white, borderRadius: 16, paddingHorizontal: 12, paddingTop: 12, paddingBottom: 10, borderWidth: 1, borderColor: '#EFF0EA' },
  itemMain: { flexDirection: 'row', alignItems: 'center' },
  itemEmojiBox: { width: 44, height: 44, borderRadius: 14, backgroundColor: '#F0F3EA', alignItems: 'center', justifyContent: 'center', marginRight: 11 },
  itemEmojiBoxLow: { backgroundColor: '#FFF0E8' },
  itemEmoji: { fontSize: 23 },
  itemDetails: { flex: 1 },
  itemNameLine: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  itemName: { color: COLORS.ink, fontSize: 12, fontWeight: '800', maxWidth: '75%' },
  lowPill: { backgroundColor: COLORS.orangeLight, borderRadius: 5, paddingHorizontal: 5, paddingVertical: 3 },
  lowPillText: { color: COLORS.orange, fontSize: 7, letterSpacing: 0.6, fontWeight: '900' },
  itemMeta: { color: COLORS.muted, fontSize: 9, marginTop: 4 },
  itemValue: { color: '#9BA39C', fontSize: 8, marginTop: 4 },
  itemValueStrong: { color: COLORS.green, fontWeight: '800' },
  editArrow: { color: '#A8B1A9', fontSize: 21, paddingLeft: 7 },
  itemDivider: { height: 1, backgroundColor: '#F1F1EC', marginTop: 10, marginBottom: 8 },
  itemStockLine: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  stockLabel: { color: '#78857C', fontSize: 8, letterSpacing: 0.9, fontWeight: '800' },
  stockLevel: { color: '#A6ADA6', fontWeight: '500', letterSpacing: 0 },
  stepper: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  stepButton: { width: 25, height: 25, borderRadius: 8, backgroundColor: '#F3F4EF', alignItems: 'center', justifyContent: 'center' },
  stepButtonDisabled: { opacity: 0.45 },
  stepButtonText: { color: COLORS.green, fontSize: 18, lineHeight: 22, fontWeight: '500' },
  quantityText: { color: COLORS.ink, fontSize: 12, fontWeight: '800', minWidth: 46, textAlign: 'center' },
  quantityTextLow: { color: COLORS.orange },
  quantityUnit: { color: '#929B92', fontSize: 9, fontWeight: '600' },
  stepButtonAdd: { width: 25, height: 25, borderRadius: 8, backgroundColor: COLORS.green, alignItems: 'center', justifyContent: 'center' },
  stepButtonAddText: { color: COLORS.white, fontSize: 13, fontWeight: '600' },
  emptyState: { alignItems: 'center', paddingHorizontal: 20, paddingVertical: 32, backgroundColor: COLORS.white, borderRadius: 18, borderColor: COLORS.line, borderWidth: 1 },
  emptyEmoji: { fontSize: 30, marginBottom: 9 },
  emptyTitle: { color: COLORS.ink, fontSize: 14, fontWeight: '800' },
  emptySubtitle: { color: COLORS.muted, fontSize: 10, textAlign: 'center', marginTop: 5, lineHeight: 15 },
  emptyAction: { color: COLORS.green, fontSize: 11, fontWeight: '800', marginTop: 14 },
  footerNote: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 22, gap: 7 },
  footerStar: { color: '#C79664', fontSize: 11 },
  footerText: { color: '#A1AAA0', fontSize: 10, fontStyle: 'italic' },
  bottomBar: { height: 66, backgroundColor: '#FFFEFB', borderTopWidth: 1, borderTopColor: '#E9ECE5', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: Platform.OS === 'ios' ? 8 : 2 },
  navButton: { width: '25%', alignItems: 'center', justifyContent: 'center', gap: 3 },
  navIconWrap: { position: 'relative' },
  navIcon: { color: '#A2ACA2', fontSize: 19, lineHeight: 21 },
  navIconActive: { color: COLORS.green },
  navBadge: { position: 'absolute', backgroundColor: COLORS.orange, top: -3, right: -9, minWidth: 14, height: 14, borderRadius: 7, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 3 },
  navBadgeText: { color: '#FFFFFF', fontSize: 8, fontWeight: '800' },
  navLabel: { color: '#A2ACA2', fontSize: 9, fontWeight: '600' },
  navLabelActive: { color: COLORS.green, fontWeight: '800' },
  modalLayer: { flex: 1, justifyContent: 'flex-end' },
  modalScrim: { ...StyleSheet.absoluteFill, backgroundColor: 'rgba(20,40,32,0.42)' },
  modalCard: { maxHeight: '91%', backgroundColor: COLORS.cream, borderTopLeftRadius: 25, borderTopRightRadius: 25, paddingHorizontal: 21, paddingTop: 10 },
  modalHandle: { width: 38, height: 4, borderRadius: 2, backgroundColor: '#D8DED5', alignSelf: 'center', marginBottom: 18 },
  modalHeading: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 19 },
  modalEyebrow: { color: COLORS.orange, fontSize: 8, letterSpacing: 1.4, fontWeight: '800', marginBottom: 5 },
  modalTitle: { color: COLORS.ink, fontSize: 21, fontWeight: '800', letterSpacing: -0.5 },
  closeButton: { width: 32, height: 32, borderRadius: 11, backgroundColor: '#EEEFE9', alignItems: 'center', justifyContent: 'center' },
  closeButtonText: { color: '#65736A', fontSize: 22, lineHeight: 25 },
  inputLabel: { color: '#77847B', fontSize: 8, letterSpacing: 1, fontWeight: '800', marginBottom: 7 },
  formInput: { height: 43, borderRadius: 11, borderWidth: 1, borderColor: '#E5E9E0', backgroundColor: COLORS.white, paddingHorizontal: 12, color: COLORS.ink, fontSize: 12, marginBottom: 15 },
  formCategories: { flexDirection: 'row', flexWrap: 'wrap', gap: 7, marginBottom: 15 },
  formCategory: { paddingHorizontal: 10, height: 30, borderRadius: 9, backgroundColor: '#F0F1EA', alignItems: 'center', justifyContent: 'center' },
  formCategorySelected: { backgroundColor: COLORS.green },
  formCategoryText: { color: '#708076', fontSize: 9, fontWeight: '700' },
  formCategoryTextSelected: { color: '#FFFFFF' },
  formPair: { flexDirection: 'row', gap: 11 },
  formField: { flex: 1 },
  formError: { color: '#A74733', fontSize: 10, lineHeight: 15, marginTop: -2, marginBottom: 10 },
  saveButton: { height: 47, borderRadius: 13, backgroundColor: COLORS.green, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 3 },
  saveButtonText: { color: '#FFFFFF', fontSize: 12, fontWeight: '800' },
  saveButtonArrow: { color: '#E8BE8F', fontSize: 17, marginLeft: 8 },
  deleteButton: { alignItems: 'center', paddingVertical: 13 },
  deleteButtonText: { color: '#A74733', fontSize: 10, fontWeight: '700' },
  outOfStockDelete: { alignSelf: 'flex-start', marginTop: 10, paddingVertical: 5, paddingHorizontal: 2 },
  outOfStockDeleteText: { color: '#A74733', fontSize: 10, fontWeight: '700' },
  confirmationLayer: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 24 },
  confirmationScrim: { ...StyleSheet.absoluteFill, backgroundColor: 'rgba(20,40,32,0.5)' },
  confirmationCard: { width: '100%', maxWidth: 380, borderRadius: 20, backgroundColor: COLORS.cream, padding: 21 },
  confirmationEyebrow: { color: COLORS.orange, fontSize: 8, letterSpacing: 1.4, fontWeight: '800', marginBottom: 8 },
  confirmationTitle: { color: COLORS.ink, fontSize: 20, fontWeight: '800' },
  confirmationMessage: { color: '#77847B', fontSize: 12, lineHeight: 18, marginTop: 8 },
  confirmationActions: { flexDirection: 'row', gap: 10, marginTop: 20 },
  cancelDeleteButton: { flex: 1, height: 43, borderRadius: 11, backgroundColor: '#ECEFE8', alignItems: 'center', justifyContent: 'center' },
  cancelDeleteText: { color: COLORS.green, fontSize: 11, fontWeight: '700' },
  confirmDeleteButton: { flex: 1, height: 43, borderRadius: 11, backgroundColor: '#A74733', alignItems: 'center', justifyContent: 'center' },
  confirmDeleteText: { color: '#FFFFFF', fontSize: 11, fontWeight: '800' },
  modalBottomSpace: { height: 22 },
});

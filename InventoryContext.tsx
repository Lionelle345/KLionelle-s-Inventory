import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';

export type InventoryItem = {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  price: number;
  threshold: number;
  emoji: string;
};

export type DebtorPayment = {
  id: string;
  amount: number;
  date: string;
};

export type Debtor = {
  id: string;
  name: string;
  amountOwed: number;
  payments: DebtorPayment[];
};

const STORAGE_KEY = '@klionelles/inventory-v1';
const DEBTORS_STORAGE_KEY = '@klionelles/debtors-v1';

const STARTER_ITEMS: InventoryItem[] = [
  { id: '1', name: 'Avocados', category: 'Produce', quantity: 18, unit: 'pcs', price: 1.25, threshold: 8, emoji: '🥑' },
  { id: '2', name: 'Whole milk', category: 'Dairy', quantity: 5, unit: 'gal', price: 4.5, threshold: 8, emoji: '🥛' },
  { id: '3', name: 'Sourdough loaf', category: 'Bakery', quantity: 12, unit: 'loaves', price: 5.25, threshold: 4, emoji: '🍞' },
  { id: '4', name: 'Roma tomatoes', category: 'Produce', quantity: 6, unit: 'lb', price: 2.8, threshold: 10, emoji: '🍅' },
  { id: '5', name: 'Free-range eggs', category: 'Dairy', quantity: 24, unit: 'dozen', price: 6.75, threshold: 6, emoji: '🥚' },
  { id: '6', name: 'Jasmine rice', category: 'Pantry', quantity: 9, unit: 'bags', price: 8.99, threshold: 5, emoji: '🍚' },
  { id: '7', name: 'Orange juice', category: 'Drinks', quantity: 3, unit: 'bottles', price: 5.5, threshold: 6, emoji: '🍊' },
  { id: '8', name: 'Baby spinach', category: 'Produce', quantity: 14, unit: 'bags', price: 3.25, threshold: 5, emoji: '🥬' },
];

type InventoryContextValue = {
  items: InventoryItem[];
  setItems: React.Dispatch<React.SetStateAction<InventoryItem[]>>;
  storageError: string;
  debtors: Debtor[];
  setDebtors: React.Dispatch<React.SetStateAction<Debtor[]>>;
  debtorStorageError: string;
};

const InventoryContext = createContext<InventoryContextValue | null>(null);

export function InventoryProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<InventoryItem[]>(STARTER_ITEMS);
  const [storageError, setStorageError] = useState('');
  const [debtors, setDebtors] = useState<Debtor[]>([]);
  const [debtorStorageError, setDebtorStorageError] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [debtorsLoaded, setDebtorsLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    AsyncStorage.getItem(STORAGE_KEY)
      .then((savedItems) => {
        if (!active) return;
        if (savedItems) {
          const parsed = JSON.parse(savedItems) as InventoryItem[];
          if (Array.isArray(parsed)) setItems(parsed);
        }
        setLoaded(true);
      })
      .catch(() => {
        if (active) setStorageError('Could not load saved inventory. Changes may not persist.');
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;
    AsyncStorage.getItem(DEBTORS_STORAGE_KEY)
      .then((savedDebtors) => {
        if (!active) return;
        if (savedDebtors) {
          const parsed = JSON.parse(savedDebtors) as Debtor[];
          if (Array.isArray(parsed)) setDebtors(parsed);
        }
        setDebtorsLoaded(true);
      })
      .catch(() => {
        if (active) setDebtorStorageError('Could not load saved debtor records. Changes may not persist.');
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!loaded) return;
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items)).then(
      () => setStorageError(''),
      () => setStorageError('Could not save your latest changes. Please check device storage.'),
    );
  }, [items, loaded]);

  useEffect(() => {
    if (!debtorsLoaded) return;
    AsyncStorage.setItem(DEBTORS_STORAGE_KEY, JSON.stringify(debtors)).then(
      () => setDebtorStorageError(''),
      () => setDebtorStorageError('Could not save your latest debtor records. Please check device storage.'),
    );
  }, [debtors, debtorsLoaded]);

  const value = useMemo(
    () => ({ items, setItems, storageError, debtors, setDebtors, debtorStorageError }),
    [items, storageError, debtors, debtorStorageError],
  );
  return <InventoryContext.Provider value={value}>{children}</InventoryContext.Provider>;
}

export function useInventory() {
  const context = useContext(InventoryContext);
  if (!context) throw new Error('useInventory must be used within InventoryProvider');
  return context;
}

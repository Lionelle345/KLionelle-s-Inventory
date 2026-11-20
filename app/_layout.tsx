import { Stack } from 'expo-router';
import { InventoryProvider } from '../InventoryContext';
import { AuthProvider } from '../AuthContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <InventoryProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </InventoryProvider>
    </AuthProvider>
  );
}

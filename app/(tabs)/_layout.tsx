import { Redirect, Tabs } from 'expo-router';
import { useAuth } from '../../AuthContext';

export default function TabLayout() {
  const { configured, loading, user } = useAuth();
  if (configured && !loading && !user) return <Redirect href="/auth" />;

  return (
    <Tabs screenOptions={{ headerShown: false, tabBarStyle: { display: 'none' } }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="inventory" />
      <Tabs.Screen name="alerts" />
      <Tabs.Screen name="debtors" />
    </Tabs>
  );
}

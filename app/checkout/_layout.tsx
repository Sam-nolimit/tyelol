import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import CheckoutContextProvider from '../../src/contexts/CheckoutContext';

export default function CheckoutStack() {
  return (
    <CheckoutContextProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          contentStyle: { padding: 15, backgroundColor: '#ebf8ec', flex: 1 },
          headerStyle: { backgroundColor: '#06560a' },
          headerTitleStyle: { color: 'white' },
          headerTintColor: '#ebf8ec',
        }}
      >
        <Stack.Screen name="personal" options={{ title: 'Personal info' }} />
        <Stack.Screen name="delivery" options={{ title: 'Delivery info' }} />
        <Stack.Screen name="payment" options={{ title: 'Payment info' }} />
      </Stack>
    </CheckoutContextProvider>
  );
}

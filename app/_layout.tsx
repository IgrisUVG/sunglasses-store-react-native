import '@/global.css';

import ProductsContext, { defaultProducts } from "@/app/types/product";
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return <GluestackUIProvider>
    <ProductsContext.Provider value={defaultProducts}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false, title: "Back", }} />
        <Stack.Screen name="filters/index" options={{ title: "Filters", }} />
        <Stack.Screen name="product/[productId]" options={{ title: "Product", }} />
        <Stack.Screen name="checkout/index" options={{ title: "Checkout", }} />
      </Stack>
    </ProductsContext.Provider>
  </GluestackUIProvider>;
}

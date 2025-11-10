import ProductsContext, { defaultProducts } from "@/app/types/product";
import { Stack } from 'expo-router';

export default function RootLayout() {
  return <ProductsContext.Provider value={defaultProducts}>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  </ProductsContext.Provider>;
}

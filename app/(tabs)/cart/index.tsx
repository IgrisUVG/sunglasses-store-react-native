import ProductsContext from '@/app/types/product';
import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Screen() {
  const products = useContext(ProductsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{products.reduce((acc, p) => acc + p.price.value, 0).toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});

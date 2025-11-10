import ProductsContext from '@/app/types/product';
import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Screen() {
  const products = useContext(ProductsContext);

  return (
    <View style={styles.container}>
      {Object.entries(products.reduce((acc, i) => {
        if (i.info.brand in acc) {
          return acc;
        }

        return {
          ...acc,
          [i.info.brand]: "",
        }
      }, {})).map(([k,]) => <Text
        style={styles.text}
        key={`brand-${k.replaceAll(" ", "-").toLowerCase()}`}
      >{k}</Text>)}
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

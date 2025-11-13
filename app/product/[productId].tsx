import { Button, ButtonGroup, ButtonText } from "@/components/ui/button";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [isAddedToCart, setAddedToCart] = useState(false);
  const { productId } = useLocalSearchParams();

  return <View style={styles.container}>
    <Text style={styles.text}>This is a page of product {productId}</Text>
    {isAddedToCart
      ? <View style={styles.buttonsContainer}>
        <ButtonGroup>
          <Button variant="outline" action="negative" onPress={() => setAddedToCart(false)}>
            <ButtonText>Remove from cart</ButtonText>
          </Button>
          <Button onPress={() => router.navigate("/(tabs)/cart")}>
            <ButtonText variant="solid" action="primary">Go to cart</ButtonText>
          </Button>
        </ButtonGroup>
      </View>
      : <Button variant="solid" action="primary" onPress={() => setAddedToCart(true)}>
        <ButtonText>Add to the cart</ButtonText>
      </Button>
    }
  </View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: "#fff",
    flex: 1,
    gap: 12,
    justifyContent: 'center',
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 8,
  },
});

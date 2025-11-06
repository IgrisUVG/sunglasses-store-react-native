import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

const PlaceholderImage = require('@/assets/images/image.png');

export default function Index() {
  return <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={PlaceholderImage} style={styles.image} />
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  </View>;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    gap: 12,
  },
  image: {
    width: 383,
    height: 187,
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});

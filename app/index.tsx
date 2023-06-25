import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import {LinearGradient} from 'expo-linear-gradient';

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {/* <Text style={styles.title}>Tyelol</Text> */}

        <LinearGradient colors={['#cc3027', '#02287b', '#0f86b1']} style={styles.linearGradient}>
  <Text style={styles.buttonText}>
  Tyelol
  </Text>
</LinearGradient>
        <Link href={"/checkout"} style={styles.subtitle}>
          Checkout
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  linearGradient: {
    // flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    // fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

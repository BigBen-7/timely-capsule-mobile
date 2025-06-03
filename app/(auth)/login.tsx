import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function login() {
  return (
    <View style={styles.container}>
      <Text>login</Text>
      <Text>
        new here?{" "}
        <Link href={"/(auth)/register"} style={styles.text}>
          Sign up instead
        </Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    color: "#539de6",
    textDecorationLine: "underline",
  },
});

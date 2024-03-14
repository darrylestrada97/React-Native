import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text2}>Hello World! :D </Text>

      <Text style={styles.text}>Hello World! :D </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontFamily: "Arial",
    fontWeight: "bold",
  },
  text2: {
    color: "red",
    fontSize: 20,
    fontFamily: "Arial",
    fontWeight: "bold",
  },
});

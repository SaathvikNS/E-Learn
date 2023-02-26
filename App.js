import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/Authentication/Navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation/>
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAFDFC",
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/Authentication/Navigation";
import Quotes from "./src/components/utils/qoutes";
import BottomNavigation from "./src/Mainscreens/Navigation/navigation";

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

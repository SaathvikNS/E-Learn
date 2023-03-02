import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Navigation from "./src/Authentication/Navigation";

export default function App() {
  return (
    <View style={{flex: 1,}}>
      <Navigation/>
      <StatusBar hidden />
    </View>
  );
}

import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MyContext } from "./Global/context";
import Navigation from "./src/Authentication/Navigation";

export default function App() {
  return (
    <View style={{flex: 1,}}>
      <Navigation/>
      <StatusBar hidden />
    </View>
  );
}

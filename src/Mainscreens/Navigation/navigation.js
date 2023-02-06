import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFonts } from "expo-font";
import MyLearning from "../Mylearning/mylearning";
import WishlistScreen from "../WishlistSceen/wishlistscreen";
import ProfileNavigation from "../ProfileScreen";
import HomeNavigation from "../HomeScreen";

const BottomNavigation = ( ) => {
  const [selectedTab, setSelectedTab] = useState(0);
  
  let [fontsLoaded] = useFonts({
    "Inder-Regular": require("../../../assets/fonts/Inder-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      { selectedTab == 0 ? ( <HomeNavigation/> )
      : selectedTab == 1 ? ( <MyLearning /> )
      : selectedTab == 2 ? ( <WishlistScreen /> )
      : ( <ProfileNavigation/> ) }

      <View style={styles.container}>
        {/* Home */}
        <TouchableOpacity onPress={() => { setSelectedTab(0); }}>
          <View style={styles.touchablewrapper}>
            <Ionicons name={selectedTab == 0 ? "home" : "home-outline"} size={25} color={"#82aae3"} />
            <Text style={styles.text}>Home</Text>
          </View>
        </TouchableOpacity>
        {/* MyLearning */}
        <TouchableOpacity onPress={() => { setSelectedTab(1); }}>
          <View style={styles.touchablewrapper}>
            <Ionicons name={selectedTab == 1 ? "play-circle" : "play-circle-outline"} size={25} color={"#82aae3"} />
            <Text style={styles.text}>My Learning</Text>
          </View>
        </TouchableOpacity>
        {/* Wishlist */}
        <TouchableOpacity onPress={() => { setSelectedTab(2); }}>
          <View style={styles.touchablewrapper}>
            <Ionicons name={selectedTab == 2 ? "heart" : "heart-outline"} size={25} color={"#82aae3"} />
            <Text style={styles.text}>Wishlist</Text>
          </View>
        </TouchableOpacity>
        {/* Profile */}
        <TouchableOpacity onPress={() => { setSelectedTab(3); }}>
          <View style={styles.touchablewrapper}>
            <Ionicons name={selectedTab == 3 ? "person-circle" : "person-circle-outline"} size={25} color={"#82aae3"} />
            <Text style={styles.text}>Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    height: 60,
    width: "100%",
    justifyContent: "space-evenly",
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  touchablewrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  text: {
    color: "#82aae3",
    fontFamily: "Inder-Regular",
    fontSize: 10,
  },
});

export default BottomNavigation;
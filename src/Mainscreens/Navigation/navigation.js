import React, { useContext, useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFonts } from "expo-font";
import ProfileNavigation from "../ProfileScreen";
import HomeNavigation from "../HomeScreen";
import WishlistNavigator from "../WishlistSceen";
import { MyContext } from "../../../Global/context";

const BottomNavigation = ( ) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const {darkscheme} = useContext(MyContext);

  const windowWidth = Dimensions.get("window").width;
  
  let [fontsLoaded] = useFonts({
    "Inder-Regular": require("../../../assets/fonts/Inder-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      { selectedTab == 0 ? ( <HomeNavigation/> )
      : selectedTab == 1 ? ( <WishlistNavigator /> )
      : ( <ProfileNavigation/> ) }

      <View style={[styles.container, {backgroundColor: darkscheme ? "#181a20" : "#fbfbfb",}]}>
        {/* Home */}
        <TouchableOpacity onPress={() => { setSelectedTab(0); }}>
          <View style={styles.touchablewrapper}>
            <Ionicons name={selectedTab == 0 ? "home" : "home-outline"} size={windowWidth < 400 ? 25 : 30} color={darkscheme ? "#4360c9" : "#82aae3"} />
            <Text style={{ color: darkscheme ? "#4360c9" : "#82aae3", fontFamily: "Inder-Regular", fontSize: windowWidth < 400 ? 10 : 13}}>Home</Text>
          </View>
        </TouchableOpacity>
        {/* Wishlist */}
        <TouchableOpacity onPress={() => { setSelectedTab(1); }}>
          <View style={styles.touchablewrapper}>
            <Ionicons name={selectedTab == 1 ? "heart" : "heart-outline"} size={windowWidth < 400 ? 25 : 30} color={darkscheme ? "#4360c9" : "#82aae3"} />
            <Text style={{ color: darkscheme ? "#4360c9" : "#82aae3", fontFamily: "Inder-Regular", fontSize: windowWidth < 400 ? 10 : 13}}>Wishlist</Text>
          </View>
        </TouchableOpacity>
        {/* Profile */}
        <TouchableOpacity onPress={() => { setSelectedTab(2); }}>
          <View style={styles.touchablewrapper}>
            <Ionicons name={selectedTab == 2 ? "person-circle" : "person-circle-outline"} size={windowWidth < 400 ? 25 : 30} color={darkscheme ? "#4360c9" : "#82aae3"} />
            <Text style={{ color: darkscheme ? "#4360c9" : "#82aae3", fontFamily: "Inder-Regular", fontSize: windowWidth < 400 ? 10 : 13}}>Profile</Text>
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
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  touchablewrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});

export default BottomNavigation;
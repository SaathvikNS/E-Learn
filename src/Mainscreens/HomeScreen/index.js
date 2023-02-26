import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AllCourseScreen from "./AllCourseScreen/allcoursescreen";
import AllFeaturedScreen from "./AllFeaturedScreen/allfeaturedscreen";
import HomeScreen from "./MainScreen/homescreen";
import VideoScreen from "./VideoScreen/videoscreen";

const HomeNavigation = () => {
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator screenOptions={{headerShown: false, animation: "fade_from_bottom", contentStyle:{backgroundColor: 'transparent',}}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="AllFeaturedScreen" component={AllFeaturedScreen} />
            <Stack.Screen name="AllCourseScreen" component={AllCourseScreen} />
            <Stack.Screen name="VideoScreen" component={VideoScreen} />
        </Stack.Navigator>
    )
}

export default HomeNavigation;
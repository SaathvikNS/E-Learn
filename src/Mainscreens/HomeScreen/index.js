import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./MainScreen/homescreen";

const HomeNavigation = () => {
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator screenOptions={{headerShown: false, animation: "fade_from_bottom", contentStyle:{backgroundColor: 'transparent',}}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default HomeNavigation;
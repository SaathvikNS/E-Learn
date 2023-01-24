import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/loginscreen";
import SignUpScreen from "../screens/SignUp screen/signupscreen";
import AppNavigation from "../../Mainscreens/Navigation/navigation";
import HomeScreen from "../../Mainscreens/HomeScreen/homescreen";
import ConfirmEmailScreen from "../screens/confirmemailscreen/confirmemailscreen";
import ForgotPasswordScreen from "../screens/forgotpasswordscreen/forgotpasswordscreen";
import ResetPasswordConfirmationScreen from "../screens/resetpasswordconfirmationscreen/resetpasswordconfirmationscreen";

const Navigation = () => {
    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false, animation: 'fade_from_bottom', statusBarStyle: "dark", statusBarTranslucent: true, contentStyle:{backgroundColor: 'transparent',}}}>
                <Stack.Screen name="LogIn" component={LoginScreen}/>
                <Stack.Screen name="SignUp" component={SignUpScreen}/>
                <Stack.Screen name="AppNavigation" component={AppNavigation}/>
                <Stack.Screen name="ConfirmEmailScreen" component={ConfirmEmailScreen}/>
                <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>
                <Stack.Screen name="ResetPasswordConfirmationScreen" component={ResetPasswordConfirmationScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AboutPage from "./AboutPage/aboutpage";
import ProfileScreen from "./MainScreen/profilescreen";
import PrivacyPolicyPage from "./PrivacyPolicyPage/privacypolicypage";
import TermsAndConditionsPage from "./TermsAndConditionsPage/termsandconditionspage";

const ProfileNavigation = () => {
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator screenOptions={{headerShown: false, animation: "fade_from_bottom", contentStyle:{backgroundColor: '#fff',}}}>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen}  />
            <Stack.Screen name="About" component={AboutPage} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyPage} />
            <Stack.Screen name="TermsAndConditions" component={TermsAndConditionsPage} />
        </Stack.Navigator>
   )
}

export default ProfileNavigation;
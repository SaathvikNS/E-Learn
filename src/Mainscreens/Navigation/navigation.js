import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../HomeScreen/homescreen";
import WishlistScreen from "../WishlistSceen/wishlistscreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AccountsScreen from "../AccountsScreen/accountsscreen";
import { TouchableNativeFeedback } from "react-native";

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
    return(
            <Tab.Navigator screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;
                    if(rn === "Home") {
                        iconName = focused ? 'home' : 'home-outline';
                    }else if(rn === "Wishlist") {
                        iconName = focused ? 'heart' : 'heart-outline';
                    }else if(rn === 'Accounts') {
                        iconName = focused ?  'people' : 'people-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                headerShown: false,
                tabBarActiveTintColor: '#82AAE3',
                tabBarLabelStyle:{paddingBottom: 10, fontSize: 10},
                tabBarStyle:{padding: 10, height: 60},
            })}>
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Wishlist" component={WishlistScreen}/>
                <Tab.Screen name="Accounts" component={AccountsScreen}/>
            </Tab.Navigator>
    )
}

export default AppNavigation;
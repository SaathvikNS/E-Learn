import { createNativeStackNavigator } from "@react-navigation/native-stack"
import VideoScreen from "../HomeScreen/VideoScreen/videoscreen";
import WishlistScreen from "./MainScreen/wishlistscreen";

const WishlistNavigator = () => {
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator screenOptions={{headerShown: false, animation: "fade_from_bottom", contentStyle:{backgroundColor: 'transparent',}}}>
            <Stack.Screen name="WishlistScreen" component={WishlistScreen} />
            <Stack.Screen name="VideoScreen" component={VideoScreen} />
        </Stack.Navigator>
    )
}

export default WishlistNavigator;
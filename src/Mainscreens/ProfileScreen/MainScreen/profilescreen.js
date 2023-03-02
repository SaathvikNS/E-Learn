import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import {  useFonts } from 'expo-font';
import PlainButtons from "../../../components/PlainButtons/plainbuttons"
import { useNavigation } from "@react-navigation/native";
import { MyContext } from "../../../../Global/context";

const ProfileScreen = () => {
    const {username, email, darkscheme, setdarkscheme} = useContext(MyContext);
    const navigation = useNavigation();

    let[fontsLoaded] = useFonts({
        'Inder-Regular': require('../../../../assets/fonts/Inder-Regular.ttf'),
        'FredokaOne-Regular': require('../../../../assets/fonts/FredokaOne-Regular.ttf')
    })

    if(!fontsLoaded){
        return null;
    }

    const aboutpressed = () => {
        navigation.navigate("About")
    }
    
    const privacypolicypressed = () => {
        navigation.navigate("PrivacyPolicy")
    }

    const logoutpressed = () => {
        navigation.goBack()
    }

    const termsandconditionspressed = () => {
        navigation.navigate("TermsAndConditions")
    }

    return(
        <View style={[styles.container, {backgroundColor: darkscheme ? "#181a20" : "#fbfbfb",}]}>
            <View style={styles.titlecontainer}>
                <Text style={[styles.title, {color: darkscheme ? "#4360c9" : "#82aae3"}]}>Profile</Text>
            </View>
            <View style={styles.userinfowrapper}>
                <View style={[styles.image, {backgroundColor: darkscheme ? "#4360c9" : "#82aae3"}]}>
                    <Ionicon name="person" size={75} color={darkscheme ? "#181a20" : "#fbfbfb"}/>
                </View>
                <View style={styles.userinfo}>
                    <Text style={[styles.username, {color: darkscheme ? "#ffffffcc" : "#5e5e5e",}]}>{username}</Text>
                    <Text style={[styles.email, {color: darkscheme ? "#4360c9" : "#82aae3"}]}>{email}</Text>
                </View>
            </View>
            <View style={styles.pressables}>
                <PlainButtons text={"About"} icon={"information-circle"} onPress={aboutpressed} />
                <PlainButtons text={"Privacy Policy"} icon={"document-attach"} onPress={privacypolicypressed}/>
                <PlainButtons text={"Terms and Conditions"} icon={"shield-checkmark"} onPress={termsandconditionspressed}/>
                {
                    darkscheme ? (
                        <PlainButtons text={"Light Mode"} icon={"sunny"} onPress={() => { setdarkscheme(false); }} />
                    ) : (
                        <PlainButtons text={"Dark Mode"} icon={"moon"} onPress={() => { setdarkscheme(true); }} />
                    )
                }
                <PlainButtons text={"Sign out"} icon={"log-out"} onPress={logoutpressed}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 15,
    },
    titlecontainer:{
        paddingHorizontal: 10,
        paddingBottom: 5,
        marginTop: 30,
        width: "100%",
    },
    title:{
        fontFamily: 'FredokaOne-Regular',
        fontSize: 30,
    },
    userinfo:{
        justifyContent: "space-around",
        alignItems: "center",
        height: 50,
    },
    userinfowrapper:{
        height: 225,
        width: "100%",
        justifyContent: "space-evenly",
        alignItems:"center",
        borderBottomWidth: 1,
        borderBottomColor: '#82aae388',
    },
    username:{
        fontSize: 25,
        fontFamily: "Inder-Regular",
    },
    email:{
        color: "#82aae3",
        fontFamily: 'Inder-Regular',
        fontSize: 15,
    },
    image:{
        width: 100,
        height: 100,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    pressables:{
        width: "100%",
        marginTop: 10,
    },
})

export default ProfileScreen;
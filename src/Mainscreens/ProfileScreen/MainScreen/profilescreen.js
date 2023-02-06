import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import {  useFonts } from 'expo-font';
import PlainButtons from "../../../components/PlainButtons/plainbuttons"
import { useNavigation } from "@react-navigation/native";
import { MyContext } from "../../../../Global/context";

const ProfileScreen = () => {
    const {username, email} = useContext(MyContext);
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
        <View style={styles.container}>
            <View style={styles.titlecontainer}>
                <Text style={styles.title}>Profile</Text>
            </View>
            <View style={styles.userinfowrapper}>
                <View style={styles.image}>
                    <Ionicon name="person" size={75} color={"#eafdfc"}/>
                </View>
                <View style={styles.userinfo}>
                    <Text style={styles.username}>{username}</Text>
                    <Text style={styles.email}>{email}</Text>
                </View>
            </View>
            <View style={styles.pressables}>
                <PlainButtons text={"About"} icon={"information-circle"} onPress={aboutpressed} />
                <PlainButtons text={"Privacy Policy"} icon={"document-attach"} onPress={privacypolicypressed}/>
                <PlainButtons text={"Terms and Conditions"} icon={"shield-checkmark"} onPress={termsandconditionspressed}/>
                <PlainButtons text={"Dark Mode"} icon={"contrast"} />
                <PlainButtons text={"Sign out"} icon={"log-out"} onPress={logoutpressed}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        marginHorizontal: 15,
    },
    titlecontainer:{
        paddingHorizontal: 10,
        paddingBottom: 5,
        marginTop: 30,
        width: "100%",
    },
    title:{
        fontFamily: 'FredokaOne-Regular',
        color: '#82AAE3',
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
        color: "#5e5e5e",
        fontSize: 25,
        fontFamily: "Inder-Regular",
    },
    email:{
        color: "#82aae3",
        fontFamily: 'Inder-Regular',
        fontSize: 15,
    },
    image:{
        backgroundColor: "#82aae3",
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
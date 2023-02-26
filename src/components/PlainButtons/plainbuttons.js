import React, { useContext } from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import { MyContext } from "../../../Global/context";

const PlainButtons = ({text, icon, onPress = null}) => {
    const {darkscheme} = useContext(MyContext);

    return(
        <TouchableNativeFeedback onPress={onPress}>
            <View style={styles.wrapper}>
                <Ionicon name={icon} size={25} color={"#82aae3"}/>
                <Text style={[styles.text, {color: darkscheme ? "#ffffffcc" : "#5e5e5e",}]}>{text}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        width: "100%",
        height: 40,
        margin: 5,
        alignItems: "center",
        paddingHorizontal: 5,
        flexDirection: "row",
    },
    text:{
        paddingHorizontal: 15,
        fontFamily: 'Inder-Regular',
        fontSize: 18,
    },
})

export default PlainButtons;
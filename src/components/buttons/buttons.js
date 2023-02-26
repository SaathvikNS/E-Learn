import React from "react";
import { StyleSheet, TouchableNativeFeedback, View, Text, } from "react-native";

const Buttons = ({value, onPress = null}) => {
    return(
        <TouchableNativeFeedback onPress={onPress}>
            <View style={styles.butwrapper}>
                <Text style={styles.value}>{value}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    butwrapper:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#82AAE3',
        height: 40,
        width: '80%',
        borderRadius: 50,
    },
    value:{
        color: '#eafdfc',
        fontSize: 20,
        fontFamily: 'Inder-Regular',
    },
})

export default Buttons
import React, { useContext } from "react";
import { StyleSheet, TouchableNativeFeedback, View, Text, } from "react-native";
import { MyContext } from "../../../Global/context";

const Buttons = ({value, onPress = null}) => {
    const {darkscheme} = useContext(MyContext);

    return(
        <TouchableNativeFeedback onPress={onPress}>
            <View style={[styles.butwrapper, {backgroundColor: darkscheme ? "#4360c9" : "#82aae3"}]}>
                <Text style={styles.value}>{value}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    butwrapper:{
        justifyContent: 'center',
        alignItems: 'center',
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
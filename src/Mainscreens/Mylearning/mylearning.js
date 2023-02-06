import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MyLearning = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>My Learning</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#eafdfc",
    },
    text:{
        fontFamily: 'Inder-Regular',
    },
})

export default MyLearning;
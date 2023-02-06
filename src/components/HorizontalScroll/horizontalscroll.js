import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const HorizontalScroll = () => {
    return(
        <TouchableOpacity style={styles.container}>
            <Image source={require("../../../assets/logos/download.png")} style={{height: "50%", width: "95%",}} />
            <Text>Hello</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        height: "100%",
        width: 230,
        backgroundColor: '#fff',
        alignItems: "center",
        paddingTop: 5,
        marginHorizontal: 5,
        borderRadius: 10,
    },
})

export default HorizontalScroll;
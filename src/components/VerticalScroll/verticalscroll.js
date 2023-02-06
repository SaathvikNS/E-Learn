import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const VerticalScroll = () => {
    return(
        <TouchableOpacity style={styles.container}>
            <Image source={require("../../../assets/logos/download.png")} style={styles.image}/>
            <Text>Scroll me</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        marginVertical: 5,
        flexDirection: "row",
    },
    image:{
        height: 100,
        width: 200,
    },
})

export default VerticalScroll;
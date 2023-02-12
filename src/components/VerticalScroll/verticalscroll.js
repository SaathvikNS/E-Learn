import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";

const windowWidth = Dimensions.get("window").width;
const VerticalScroll = () => {
    return(
        <TouchableOpacity style={styles.container}>
            <Image source={require("../../../assets/logos/download.png")} style={{height: 100, width: windowWidth/3}}/>
            <View style={styles.courseInfo}>
                <Text style={styles.courseInfoTitle}>Python Course for Beginners</Text>
                <Text style={styles.courseInfoTutor}>Saathvik N Sharma</Text>
                <View style={styles.lastline}>
                    <Ionicon name="star-half-sharp" size={18} color={"#fc9b11"}/>
                    <Text style={styles.likes}>4.2</Text>
                    <Text style={styles.divider}>|</Text>
                    <Ionicon name="eye-outline" size={18} color={"#fc9b11"} style={styles.eye}/>
                    <Text style={styles.watches}>984</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        marginVertical: 5,
        flexDirection: "row",
    },
    courseInfo:{
        width: windowWidth/1.8,
        height: "100%",
        paddingHorizontal: 10,
    },
    courseInfoTitle:{
        fontWeight: "600",
        fontFamily: "breeserif",
        fontSize: 18,
        color: "#212121dd",
        paddingTop: 5,
    },
    courseInfoTutor:{
        fontFamily: "breeserif",
        fontSize: 15,
        color: "#212121bb",
        paddingVertical: 5,
    },
    
    lastline:{
        alignItems: "center",
        flexDirection: "row",
    },
    likes:{
        color: "#656565cc",
        fontSize: 15,
        paddingHorizontal: 5,
    },
    divider:{
        color: "#656565cc",
        fontSize: 15,
        paddingHorizontal: 5,
    },
    eye:{
        paddingHorizontal: 5,
    },
    watches:{
        color: "#656565cc",
        fontSize: 15,
        paddingHorizontal: 5,
    },
})

export default VerticalScroll;
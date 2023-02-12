import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";

const HorizontalScroll = ({title, tutor, likes, views}) => {
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.courseInfo}>
                <Text style={styles.courseInfoTitle}>{title}</Text>
                <Text style={styles.courseInfoTutor}>{tutor}</Text>
                <View style={styles.lastline}>
                    <Ionicon name="star-half-sharp" size={18} color={"#fc9b11"}/>
                    <Text style={styles.likes}>{likes}</Text>
                    <Text style={styles.divider}>|</Text>
                    <Ionicon name="eye-outline" size={18} color={"#fc9b11"} style={styles.eye}/>
                    <Text style={styles.watches}>{views}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        height: "100%",
        width: 250,
        backgroundColor: '#fff',
        alignItems: "center",
        paddingTop: 5,
        marginHorizontal: 5,
        borderRadius: 10,
    },
    courseInfo:{
        width: "100%",
        height: "100%",
        paddingTop: 5,
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
        paddingVertical: 10,
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

export default HorizontalScroll;
import React, { useContext } from "react";
import { StyleSheet, Text, View, } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import { MyContext } from "../../../Global/context";

const HorizontalScroll = ({title, tutor, likes, views}) => {
    const {darkscheme} = useContext(MyContext);

    return(
        <View style={[styles.container, {backgroundColor: darkscheme ? "#1f222a" : "#fbfbfb",}]}>
            <View style={styles.courseInfo}>
                <Text style={[styles.courseInfoTitle, {color: darkscheme ? "#ffffffbb" : "#212121dd",}]}>{title}</Text>
                <Text style={[styles.courseInfoTutor, {color: darkscheme ? "#ffffff88" : "#212121dd",}]}>{tutor}</Text>
                <View style={styles.lastline}>
                    <Ionicon name="star-half-sharp" size={18} color={"#fc9b11"}/>
                    <Text style={[styles.likes, {color: darkscheme ? "#878787" : "#656565cc",}]}>{likes}</Text>
                    <Text style={[styles.divider, {color: darkscheme ? "#878787" : "#656565cc",}]}>|</Text>
                    <Ionicon name="eye-outline" size={18} color={"#fc9b11"} style={styles.eye}/>
                    <Text style={[styles.watches, {color: darkscheme ? "#878787" : "#656565cc",}]}>{views}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: "50%",
        width: 250,
        alignItems: "center",
        paddingTop: 5,
        marginHorizontal: 5,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
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
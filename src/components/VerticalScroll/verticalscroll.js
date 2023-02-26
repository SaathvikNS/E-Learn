import React, { useContext } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import { MyContext } from "../../../Global/context";

const windowWidth = Dimensions.get("window").width;
const VerticalScroll = ({title, tutor, likes, views}) => {
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
        height: "100%",
        paddingVertical: 5,
        flexDirection: "row",
        borderTopEndRadius: 20,
        borderBottomEndRadius: 20,
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
        paddingTop: 5,
    },
    courseInfoTutor:{
        fontFamily: "breeserif",
        fontSize: 15,
        paddingVertical: 5,
    },
    
    lastline:{
        alignItems: "center",
        flexDirection: "row",
    },
    likes:{
        fontSize: 15,
        paddingHorizontal: 5,
    },
    divider:{
        fontSize: 15,
        paddingHorizontal: 5,
    },
    eye:{
        paddingHorizontal: 5,
    },
    watches:{
        fontSize: 15,
        paddingHorizontal: 5,
    },
})

export default VerticalScroll;
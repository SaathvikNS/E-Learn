import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import { MyContext } from "../../../../Global/context";
import HeadTab from "./HeadTab/headtab";
import YoutubePlayer from "react-native-youtube-iframe";
import Buttons from "../../../components/buttons/buttons";
import axios from "axios";

const VideoScreen =() => {
    const { id, video, title, tutor, views, likes, wishlist, setwishlist, userid, duration, darkscheme} = useContext(MyContext);
    const navigation = useNavigation();
    
    console.log(wishlist);
    axios.post("http://192.168.135.79:8000/api/user/update-wishlist", {userid, wishlist});

    const windowWidth = Dimensions.get("window").width;
    
    const backpressed = () => {
        navigation.goBack();
    }

    const addToWishlist = async () => {
            setwishlist([id, ...wishlist]);
    };
    
    const removeFromWishlist = async () => {
            setwishlist(wishlist.filter((x) => x !== id))
    }

    return(
        <View style={[styles.container, {backgroundColor: darkscheme ? "#181a20" : "#fbfbfb",}]}>
            {/* title */}
            <View style={styles.titlecontainer}>
                <TouchableOpacity onPress={backpressed}>
                    <Ionicon name="arrow-back" size={windowWidth < 400 ? 25 : 30} color={"#82aae3"}/>
                </TouchableOpacity>
                <Text style={[styles.title, {fontSize: windowWidth < 400 ? 20 : 25 , textAlign: "center", width: "95%",}]}>{title}</Text>
            </View>
            {/* video */}
            {
                windowWidth >= 400 ? (
                    <View style={{backgroundColor: "black", width: "100%", height: "32%", marginTop: 10}}>
                        <YoutubePlayer 
                            height={"100%"}
                            play={false}
                            videoId={video}
                        />
                    </View>
                 ) : (
                    <View style={{backgroundColor: "black", width: "100%", height: "27%", marginTop: 10}}>
                        <YoutubePlayer 
                            height={"100%"}
                            play={false}
                            videoId={video}
                        />
                    </View>
                 )
            }
            {/* tutor */}
            <View style={styles.tutorContainer}>
                <Text style={[styles.tutor, {color: darkscheme ? "#ffffffcc" : "#212121dd",}]}>- by {tutor}</Text>
            </View>
            {/* button */}
            <View style={styles.buttonContainer}>
            {
                wishlist.includes(id) ? (
                    <Buttons value={"Remove From Wishlist"} onPress={removeFromWishlist} />
                ) : (
                    <Buttons value={"Add To Wishlist"} onPress={addToWishlist} />
                )
            }
            </View>
            {/* information */}
            <View style={styles.info}>
                <View style={styles.likeinfo}>
                    <Ionicon name="star-half-outline" size={25} color={"#fc9b11"} />
                    <Text style={[styles.liketext, {color: darkscheme ? "#ffffffcc" : "#212121dd",}]}>{likes}</Text>
                </View>
                <View style={styles.timeinfo}>
                    <Ionicon name="time-outline" size={25} color={"#fc9b11"} />
                    <Text style={[styles.timetext, {color: darkscheme ? "#ffffffcc" : "#212121dd",}]}>{duration}</Text>
                </View>
                <View style={styles.viewinfo}>
                    <Ionicon name="eye-outline" size={25} color={"#fc9b11"} />
                    <Text style={[styles.viewtext, {color: darkscheme ? "#ffffffcc" : "#212121dd",}]}>{views}</Text>
                </View>
            </View>
            <HeadTab />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 15,
        paddingBottom: 70,
    },
    titlecontainer:{
        paddingHorizontal: 10,
        paddingBottom: 5,
        marginTop: 30,
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "#82aae388",
        flexDirection: "row",
        alignItems: "center",
    },
    title:{
        fontFamily: 'FredokaOne-Regular',
        color: '#82AAE3',
    },
    tutorContainer:{
        width: "100%",
        marginTop: 10,
        alignItems: "flex-end",
    },
    tutor:{
        fontFamily: 'breeserif',
        fontSize: 15,
    },
    buttonContainer:{
        width: "100%",
        alignItems: "center",
        marginTop: 20,
    },
    info:{
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 30,
    },
    likeinfo:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: 100,
        borderRadius: 50,
    },
    timeinfo:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: 100,
        borderRadius: 50,
    },
    viewinfo:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: 100,
        borderRadius: 50,
    },
    liketext:{
        fontSize: 15,
    },
    timetext:{
        fontSize: 15,
    },
    viewtext:{
        fontSize: 15,
    },
})

export default VideoScreen;
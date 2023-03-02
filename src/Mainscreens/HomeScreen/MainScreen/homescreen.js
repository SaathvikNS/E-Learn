import React, { useContext, useEffect } from "react";
import { FlatList, ScrollView, StyleSheet, Text, Image, View, TouchableOpacity, Dimensions } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import {  useFonts } from 'expo-font';
import { useNavigation } from "@react-navigation/native";
import { MyContext } from "../../../../Global/context";
import HorizontalScroll from "../../../components/HorizontalScroll/horizontalscroll";
import VerticalScroll from "../../../components/VerticalScroll/verticalscroll";
import Quotes from "../../../components/utils/qoutes";
import { allFeaturedVideos, allVideos } from "../../../components/video links/vidlinks";
import axios from "axios";

const HomeScreen = () => {
    const {userid, username, setid, setvideo, settitle, settutor, setlikes, setduration, setviews, wishlist, setwishlist, darkscheme} = useContext(MyContext);
    const windowWidth = Dimensions.get("window").width;

    const navigation = useNavigation();
    
    const getwishlist = async () => {
        const {data} = await axios.post("http://192.168.135.79:8000/api/user/get-wishlist", {userid})
        setwishlist(data.wishlist)
        console.log("fetched data", wishlist);
    }
    useEffect(() => {
        getwishlist();
    }, []);

    let[fontsLoaded] = useFonts({
        'inder': require('../../../../assets/fonts/Inder-Regular.ttf'),
        'fredoka': require('../../../../assets/fonts/FredokaOne-Regular.ttf'),
        'itim': require("../../../../assets/fonts/Itim-Regular.ttf"),
        'breeserif': require("../../../../assets/fonts/BreeSerif-Regular.ttf")
    })

    if(!fontsLoaded){
        return null;
    }

    const allFeaturedPressed = () => {
        navigation.navigate('AllFeaturedScreen')
    }
    const allCoursePressed = () => {
        navigation.navigate('AllCourseScreen')
    }

    return(
        <View style={[styles.container, {backgroundColor: darkscheme ? "#181a20" : "#fbfbfb",}]}>
            <View style={styles.header}>
                <Ionicon name="person-circle" size={50} color={darkscheme ? "#4360c9" : "#82aae3"}/>
                <View style={styles.headertext}>
                    <Text style={[styles.greet, {color: darkscheme ? "#ffffff99" : "#00000088"}]}>Hello!! 👋</Text>
                    <Text style={[styles.username, {color: darkscheme ? "#ffffffcc" : "#000000bb"}]}>{username}</Text>
                </View>
            </View>
            <ScrollView style={{width: "95%",}} contentContainerStyle={{alignItems: "center",}} showsVerticalScrollIndicator={false}>
                {/* <View style={styles.search}>
                    <Ionicon name="search" size={20} color={"#bbbbbb"} />
                    <Text style={styles.searchtext} >Search</Text>
                </View> */}
                <View style={styles.quoteContainer}>
                    <Quotes />
                </View>
                <View style={styles.featuredTextContainer}>
                    <Text style={[styles.featuredText, {color: darkscheme ? "#ffffffcc" : "#000000bb"}]}>Featured</Text>
                    <Text style={styles.featuredShowAll} onPress={allFeaturedPressed}>Show all</Text>
                </View>
                <View style={styles.featured}>
                    <FlatList data={allFeaturedVideos.slice(0,4)} horizontal showsHorizontalScrollIndicator={false} renderItem={({item, index}) => {
                        return(
                            <TouchableOpacity style={{alignItems: "center",}} onPress={() => {
                                setid(item.id);
                                setvideo(item.video);
                                settitle(item.title);
                                settutor(item.tutor);
                                setlikes(item.likes);
                                setviews(item.views);
                                setduration(item.duration);
                                navigation.navigate('VideoScreen');
                            }}>
                                <Image source={{uri: item.banner}} style={{height: "50%", width: 250,}} />
                                <HorizontalScroll title={item.title} tutor={item.tutor} likes={item.likes} views={item.views}/>
                            </TouchableOpacity>
                        )
                    }}/>
                </View>
                <View style={styles.allCourseTextContainer}>
                    <Text style={[styles.allCourseText, {color: darkscheme ? "#ffffffcc" : "#000000bb"}]}>All Courses</Text>
                    <Text style={styles.allCourseShowAll} onPress={allCoursePressed}>Show all</Text>
                </View>
                <View style={styles.allCourse}>
                    {
                        allVideos.filter((item, index) => index < 7).map((items) => {
                            return(
                                <TouchableOpacity key={items.id} style={{flexDirection: "row", marginVertical: 5, height: 125, justifyContent: "center", alignItems: "center",}} onPress={() => {
                                    setid(items.id);
                                    setvideo(items.video);
                                    settitle(items.title);
                                    settutor(items.tutor);
                                    setlikes(items.likes);
                                    setviews(items.views);
                                    setduration(items.duration);
                                    navigation.navigate('VideoScreen');
                                }}>
                                    <Image source={{uri: items.banner}}  style={{height: "100%", width: windowWidth/3,}}/>
                                    <VerticalScroll title={items.title} tutor={items.tutor} likes={items.likes} views={items.views} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        paddingBottom: 60,
    },
    header:{
        marginTop: 30,
        marginBottom: 10,
        width: "100%",
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        height: 50,
    },
    headertext:{
        justifyContent: "space-around",
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: "100%",
    },
    greet:{
        fontFamily: "itim",
        fontSize: 15,
    },
    username:{
        fontFamily: "fredoka",
        fontSize: 20,
    },
    search:{
        backgroundColor: '#f5f5f5',
        marginTop: 10,
        height: 40,
        width: "90%",
        borderRadius: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    searchtext:{
        fontFamily: 'itim',
        fontSize: 20,
        color: "#bbbbbb",
        paddingHorizontal: 10,
    },
    featured:{
        height: 250,
        width: "95%",
        marginTop: 20
    },
    featuredTextContainer:{
        width: "95%",
        marginTop: 20,
        paddingHorizontal: 10,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    featuredText:{
        fontFamily: "breeserif",
        fontSize: 20,
    },
    featuredShowAll:{
        fontSize: 15,
        fontFamily: 'inder',
        color: "#5579f8",
    },
    allCourse:{
        height: "100%",
        width: "95%",
        marginTop: 20,
        paddingBottom: 20,
    },
    allCourseTextContainer:{
        width: "95%",
        marginTop: 20,
        paddingHorizontal: 10,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    allCourseText:{
        fontFamily: "breeserif",
        fontSize: 25,
    },
    allCourseShowAll:{
        fontFamily: 'inder',
        color: "#5579f8",
    },
    quoteContainer: {
        marginTop: 20,
        width: "100%",
        height: 265,
    },
})

export default HomeScreen;
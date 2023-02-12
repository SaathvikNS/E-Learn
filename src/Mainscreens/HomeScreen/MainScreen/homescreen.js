import React, { useContext, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, Image, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import {  useFonts } from 'expo-font';
import { useNavigation } from "@react-navigation/native";
import { MyContext } from "../../../../Global/context";
import HorizontalScroll from "../../../components/HorizontalScroll/horizontalscroll";
import VerticalScroll from "../../../components/VerticalScroll/verticalscroll";
import Quotes from "../../../components/utils/qoutes";
import { featuredVideos } from "../../../components/video links/vidlinks";

const HomeScreen = () => {
    const {username} = useContext(MyContext);

    let[fontsLoaded] = useFonts({
        'inder': require('../../../../assets/fonts/Inder-Regular.ttf'),
        'fredoka': require('../../../../assets/fonts/FredokaOne-Regular.ttf'),
        'itim': require("../../../../assets/fonts/Itim-Regular.ttf"),
        'breeserif': require("../../../../assets/fonts/BreeSerif-Regular.ttf")
    })

    if(!fontsLoaded){
        return null;
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicon name="person-circle" size={50} color={"#82aae3"}/>
                <View style={styles.headertext}>
                    <Text style={styles.greet}>Hello!! 👋</Text>
                    <Text style={styles.username}>{username}</Text>
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
                    <Text style={styles.featuredText}>Featured</Text>
                    <Text style={styles.featuredShowAll}>Show all</Text>
                </View>
                <View style={styles.featured}>
                    <FlatList data={featuredVideos} horizontal showsHorizontalScrollIndicator={false} renderItem={({item, index}) => {
                        return(
                            <View>
                                <Image source={{uri: item.banner}} style={{height: "50%", width: "95%",}} />
                                <HorizontalScroll title={item.title} tutor={item.tutor} likes={item.likes} views={item.views}/>
                            </View>
                        )
                    }}/>
                </View>
                <View style={styles.allCourseTextContainer}>
                    <Text style={styles.allCourseText}>All Courses</Text>
                    <Text style={styles.allCourseShowAll}>Show all</Text>
                </View>
                <View style={styles.allCourse}>
                    <VerticalScroll />
                    <VerticalScroll />
                    <VerticalScroll />
                    <VerticalScroll />
                    <VerticalScroll />
                    <VerticalScroll />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: `#fbfbfb`,
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
        color: "#00000088",
    },
    username:{
        fontFamily: "fredoka",
        fontSize: 20,
        color: "#000000bb"
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
        color: "#000000bb",
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
        color: "#000000bb",
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
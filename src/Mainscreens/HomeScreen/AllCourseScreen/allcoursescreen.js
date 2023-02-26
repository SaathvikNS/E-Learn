import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import { MyContext } from "../../../../Global/context";
import VerticalScroll from "../../../components/VerticalScroll/verticalscroll";
import { allVideos } from "../../../components/video links/vidlinks";

const AllCourseScreen =() => {
    const {setid, setvideo, settitle, settutor, setlikes, setviews, setduration, darkscheme} = useContext(MyContext);
    const navigation = useNavigation();
    const windowWidth = Dimensions.get("window").width;

    const backpressed = () => {
        navigation.goBack();
    }

    return(
        <View style={[styles.container, {backgroundColor: darkscheme ? "#181a20" : "#fbfbfb",}]}>
            <View style={styles.titlecontainer}>
                <TouchableOpacity onPress={backpressed}>
                    <Ionicon name="arrow-back" size={25} color={"#82aae3"}/>
                </TouchableOpacity>
                <Text style={[styles.title, {textAlign: "center", width: "95%",}]}>All Courses</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.contentwrapper}>
                    {
                        allVideos.map((items) => {
                            return(
                                <TouchableOpacity key={items.id} style={{flexDirection: "row", marginVertical: 5, height: 125,}} onPress={() => {
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
        flex:1,
        backgroundColor: "#fbfbfb",
        paddingHorizontal: 15,
        paddingBottom: 70,
        alignItems: "center",
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
        fontSize: 30,
    },
    contentwrapper:{
        height: "100%",
        width: "95%",
        marginTop: 20,
        paddingBottom: 20,
    },
})

export default AllCourseScreen;
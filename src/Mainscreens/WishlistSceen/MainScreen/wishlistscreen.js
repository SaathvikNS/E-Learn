import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useContext } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import { MyContext } from "../../../../Global/context";
import VerticalScroll from "../../../components/VerticalScroll/verticalscroll";
import { allVideos } from "../../../components/video links/vidlinks";

const WishlistScreen =() => {
    const {setid, setvideo, settitle, settutor, setlikes, setviews, setduration, userid, wishlist, darkscheme} = useContext(MyContext);
    const navigation = useNavigation();
    const windowWidth = Dimensions.get("window").width;

    console.log(wishlist);
    axios.post("http://192.168.135.79:8000/api/user/update-wishlist", {userid, wishlist});

    return(
        <View style={[styles.container, {backgroundColor: darkscheme ? "#181a20" : "#fbfbfb",}]}>
            <View style={[styles.titlecontainer, {borderBottomColor: darkscheme ? "#4360c988" : "#82aae388"}]}>
                <Text style={[styles.title, {color: darkscheme ? "#4360c9" : "#82aae3", textAlign: "center", width: "100%",}]}>Wishlist</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.contentwrapper}>
                    {
                        allVideos.filter((item) => {
                            for (const i in wishlist) {
                                if(wishlist[i] == item.id) {
                                    return true;
                                }
                            }
                        }).map((items) => {
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
                                    <VerticalScroll id={items.id} title={items.title} tutor={items.tutor} likes={items.likes} views={items.views} />
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
        flexDirection: "row",
        alignItems: "center",
    },
    title:{
        fontFamily: 'FredokaOne-Regular',
        fontSize: 30,
    },
    contentwrapper:{
        height: "100%",
        width: "95%",
        marginTop: 20,
        paddingBottom: 20,
    },
})

export default WishlistScreen;
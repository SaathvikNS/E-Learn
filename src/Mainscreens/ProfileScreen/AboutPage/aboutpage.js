import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import { MyContext } from "../../../../Global/context";

const AboutPage =() => {
    const navigation = useNavigation();
    const {darkscheme} = useContext(MyContext);

    const backpressed = () => {
        navigation.navigate("ProfileScreen")
    }

    return(
        <View style={[styles.container, {backgroundColor: darkscheme ? "#181a20" : "#fbfbfb",}]}>
            <View style={[styles.titlecontainer, {borderBottomColor: darkscheme ? "#4360c988" : "#82aae388"}]}>
                <TouchableOpacity onPress={backpressed}>
                    <Ionicon name="arrow-back" size={25} color={darkscheme ? "#4360c9" : "#82aae3"}/>
                </TouchableOpacity>
                <Text style={[styles.title, {color: darkscheme ? "#4360c9" : "#82aae3", textAlign: "center", width: "95%",}]}>About</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.contentwrapper}>
                    <Text style={[styles.content, {color: darkscheme ? "#ffffffcc" : "#5e5e5e",}]}>
                        E-Learn is an online learning platform that offers a vast selection of courses in various topics such as business, technology, design, personal development, and more. E-Learn's courses are YouTube videos taught by experts, professionals, and thought leaders in their respective fields, who create video lectures, presentations, and interactive content to help students learn. The platform offers a flexible, self-paced learning experience, allowing students to set their own schedule and move through the material at their own pace.
                    </Text>
                    <Text style={[styles.content, {color: darkscheme ? "#ffffffcc" : "#5e5e5e",}]}>
                        One of the key benefits of E-Learn is its affordability. E-Leran provides all the courses free of cost and and also offers e-certification for the courses completed.
                    </Text>
                    <Text style={[styles.content, {color: darkscheme ? "#ffffffcc" : "#5e5e5e",}]}>
                        E-Learn is highly accessible. The platform can be accessed from anywhere with an internet connection, making it an excellent option for busy professionals or students who need to learn on the go. The platform is also designed to be user-friendly, with a clean, modern interface that makes it easy to find and enroll in courses.
                    </Text>
                    <Text style={[styles.content, {color: darkscheme ? "#ffffffcc" : "#5e5e5e",}]}>
                        One of the downsides of E-Learn is that it is a massive platform, and not all of the courses on the site are of high quality. Some courses are created by individuals with little to no experience in their field, which can lead to subpar content. However, E-Learn has a review system in place, so students can see what other learners have said about a particular course before enrolling.
                    </Text>
                    <Text style={[styles.content, {color: darkscheme ? "#ffffffcc" : "#5e5e5e",}]}>
                        Another potential drawback of E-Learn is that it is not accredited. This means that students who complete E-Learn courses will not receive a traditional diploma or certificate, and the courses may not be recognized by employers or other institutions. However, E-Learn does provide students with certificates of completion, which can be added to a resume or LinkedIn profile.
                    </Text>
                    <Text style={[styles.content, {color: darkscheme ? "#ffffffcc" : "#5e5e5e",}]}>
                        In conclusion, E-Learn is a versatile and affordable online learning platform that offers a vast selection of courses on a wide range of topics. With its user-friendly interface and flexible learning options, it is an excellent option for anyone looking to continue their education or develop new skills. However, it is important to keep in mind that not all courses on the site are of high quality, and the platform is not accredited.
                    </Text>
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
        marginTop: 5,
        paddingHorizontal: 5,
    },
    content:{
        marginTop: 15,
        fontSize: 15,
        textAlign: "justify",
        fontFamily: "Inder-Regular",
    },
})

export default AboutPage;
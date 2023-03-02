import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ScrollView, StatusBar, Dimensions, TouchableOpacity, } from "react-native";
import InputBox from "../../../components/inputbox";
import { useFonts } from 'expo-font'
import Buttons from "../../../components/buttons";
import Ionicon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginValidationSchema from "../../../utils/loginvalidationschema";
import axios from "axios";
import { updateNotification } from "../../../utils/updatenotification";
import AppNotification from "../../../components/AppNotification/appnotification";
import { MyContext } from "../../../../Global/context";

const windowHeight = Dimensions.get("window").height;
const LoginScreen = () => {
    const {setuserid, setusername, setemail, darkscheme, setdarkscheme} = useContext(MyContext);

    const navigation = useNavigation();
    const [message, setmessage] = useState({
        text: '',
        type: '',
    })

    const {control, handleSubmit, errors} = useForm({
        resolver: yupResolver(loginValidationSchema)
    });

    console.log(errors)

    let[fontsLoaded] = useFonts({
        'Inder-Regular': require('../../../../assets/fonts/Inder-Regular.ttf'),
        'FredokaOne-Regular': require('../../../../assets/fonts/FredokaOne-Regular.ttf'),
    });

    if(!fontsLoaded){
        return null;
    };

    const forgotpasswordpressed = () => {
        navigation.navigate('ForgotPasswordScreen');
    };

    const loginpressed = async (values) =>{
        try {
            const {data} = await axios.post("http://192.168.135.79:8000/api/user/login", {...values})
            console.log(data)
            setuserid(data.user.id)
            setusername(data.user.name)
            setemail(data.user.email)
            navigation.navigate('BottomNavigation')
        } catch (error) {
            updateNotification(setmessage, error.response.data.error);
            console.log(error);
        }
    };

    const createaccountpressed = () => {
        navigation.navigate('SignUp');
    };

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[styles.container, {backgroundColor: darkscheme ? "#181a20" : "#fafafa"}]}>
                {message.text ? <AppNotification text={message.text} type={message.type} /> : null}
                <Text style={[styles.login, {color: darkscheme ? "#4360c9" : "#82aae3"}]}>LogIn</Text>

                <InputBox control={control} name={'email'} placeholder={'E-mail'} rules={{required: "E-mail required!"}} />
                <InputBox control={control} name={'password'} placeholder={'Password'} hide rules={{required: "Password required!"}} />
                <View style={styles.forgotpasswordwrapper}>
                    <Text style={[styles.forgotpassword, {color: darkscheme ? "#ffffff88" : "#979797"}]} onPress={forgotpasswordpressed}>Forgot Password?</Text>
                </View>

                {/* <View style={styles.socialmediawrapper}>
                    <SocialMedia value={'Login'} />
                </View> */}

                <View style={styles.button}>
                    <Buttons value={'Login'} onPress={handleSubmit(loginpressed)} />
                </View>

                <View style={styles.createaccountwrapper}>
                    <Text style={[styles.createaccountquestion, {color: darkscheme ? "#ffffff88" : "#979797"}]}>Don't have an account? <Text style={styles.createaccountanswer} onPress={createaccountpressed}>Create Account</Text></Text>
                </View>
                <TouchableOpacity onPress={() => {setdarkscheme(!darkscheme)}} style={{position: "absolute", bottom: 30, right: 30, width: 50, height: 50}}>
                    {darkscheme ? (
                        <View style={{backgroundColor: "#4360c9", height: "100%", width: "100%", borderRadius: 100, alignItems: "center", justifyContent: "center",}}>
                            <Ionicon name="sunny" size={25} color={"#181a20"} />
                        </View>
                    ) : (
                        <View style={{backgroundColor: "#82aae3", height: "100%", width: "100%", borderRadius: 100, alignItems: "center", justifyContent: "center",}}>
                            <Ionicon name="moon" size={25} color={"#fafafa"} />
                        </View>
                    )}
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        height: windowHeight,
        alignItems: 'center',
    },
    login:{
        marginTop: 50,
        marginBottom: 20,
        fontFamily: 'FredokaOne-Regular',
        fontSize: 56,
    },
    forgotpasswordwrapper:{
        width: '80%',
        alignItems: 'flex-end',
        paddingTop: 14,
    },
    forgotpassword:{
        fontFamily: 'Inder-Regular',
        fontSize: 14,
    },
    socialmediawrapper:{
        marginTop: 35,
    },
    button:{
        width: '100%',
        alignItems: 'center',
        marginTop: 45,
    },
    createaccountwrapper:{
        marginTop: 20,
    },
    createaccountquestion:{
        fontFamily: 'Inder-Regular',
        fontSize: 14,
    },
    createaccountanswer:{
        color: '#82AAE3',
    },
})
export default LoginScreen
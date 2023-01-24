import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, } from "react-native";
import InputBox from "../../../components/inputbox";
import { useFonts } from 'expo-font'
import Buttons from "../../../components/buttons";
import SocialMedia from "../../social media linking/socialmedia";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginValidationSchema from "../../../utils/loginvalidationschema";
import axios from "axios";
import { updateNotification } from "../../../utils/updatenotification";
import AppNotification from "../../../components/AppNotification/appnotification";

const LoginScreen = () => {
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
            const {data} = await axios.post("http://192.168.4.79:8000/api/user/login", {...values})
            console.log(data)
            navigation.navigate('AppNavigation')
        } catch (error) {
            updateNotification(setmessage, error.response.data.error);
            console.log(error?.response?.data);
        }
    };

    const createaccountpressed = () => {
        navigation.navigate('SignUp');
    };

    return(
        <ScrollView>
            <View style={styles.container}>
                {message.text ? <AppNotification text={message.text} type={message.type} /> : null}
                <Text style={styles.login}>LogIn</Text>

                <InputBox control={control} name={'email'} placeholder={'E-mail'} rules={{required: "E-mail required!"}} />
                <InputBox control={control} name={'password'} placeholder={'Password'} hide rules={{required: "Password required!"}} />
                <View style={styles.forgotpasswordwrapper}>
                    <Text style={styles.forgotpassword} onPress={forgotpasswordpressed}>Forgot Password?</Text>
                </View>

                <View style={styles.socialmediawrapper}>
                    <SocialMedia value={'Login'} />
                </View>

                <View style={styles.button}>
                    <Buttons value={'Login'} onPress={handleSubmit(loginpressed)} />
                </View>

                <View style={styles.createaccountwrapper}>
                    <Text style={styles.createaccountquestion}>Don't have an account? <Text style={styles.createaccountanswer} onPress={createaccountpressed}>Create Account</Text></Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#eafdfc',
    },
    login:{
        marginTop: 47,
        marginBottom: 20,
        fontFamily: 'FredokaOne-Regular',
        fontSize: 56,
        color: '#82AAE3',
    },
    forgotpasswordwrapper:{
        width: '80%',
        alignItems: 'flex-end',
        paddingTop: 14,
    },
    forgotpassword:{
        fontFamily: 'Inder-Regular',
        fontSize: 14,
        color: '#979797',
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
        color: '#979797',
    },
    createaccountanswer:{
        color: '#82AAE3',
    },
})
export default LoginScreen
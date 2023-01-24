import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useFonts } from 'expo-font';
import InputBox from "../../../components/inputbox";
import { useForm } from "react-hook-form";
import Buttons from "../../../components/buttons";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import forgotPasswordValidationSchema from "../../../utils/forgotpasswordvalidationschema";
import axios from "axios";
import { updateNotification } from "../../../utils/updatenotification";
import AppNotification from "../../../components/AppNotification/appnotification";

const ForgotPasswordScreen = () => {
    const [message, setmessage] = useState({
        type: '',
        text: '',
    })

    const {control, handleSubmit, errors} = useForm({
        resolver: yupResolver(forgotPasswordValidationSchema)
    });
    const navigation = useNavigation();

    let[fontsLoaded] = useFonts({
        'Inder-Regular': require('../../../../assets/fonts/Inder-Regular.ttf'),
        'FredokaOne-Regular': require('../../../../assets/fonts/FredokaOne-Regular.ttf'),
    })

    if(!fontsLoaded){
        return null;
    };

    const submitpressed = async (email) => {
        try {
            const {data} = await axios.post("http://192.168.4.79:8000/api/user/forgot-password", email)
            updateNotification(setmessage, data.message, data.success)
            console.log(data)
        } catch (error) {
            updateNotification(setmessage, error.response.data.error)
            console.log(error?.response?.data)
        }
    };

    const backtologinpressed = () => {
        navigation.navigate('LogIn');
    }

    return(
        <View style={styles.container}>
            {message.text ? <AppNotification text={message.text} type={message.type} /> : null}
            <Text style={styles.title}>Reset Password</Text>

            <View style={styles.inputcontainer}>
                <InputBox control={control} name={'email'} placeholder={'E-Mail'} />
            </View>

            <View style={styles.buttoncontainer}>
                <Buttons value={'Submit'} onPress={handleSubmit(submitpressed)}/>
            </View>

            <Text style={styles.backtologin} onPress={backtologinpressed}>Back to login</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#eafdfc',
    },
    title:{
        marginTop: 60,
        fontFamily: 'FredokaOne-Regular',
        fontSize: 28,
        color: '#82AAE3',
    },
    inputcontainer:{
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttoncontainer:{
        width: '100%',
        alignItems: 'center',
        marginTop: 30,
    },
    backtologin:{
        color: '#82AAE3',
        fontFamily: 'Inder-Regular',
        marginTop: 30,
    },
})

export default ForgotPasswordScreen
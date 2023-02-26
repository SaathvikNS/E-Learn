import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from 'expo-font';
import InputBox from "../../../components/inputbox";
import { useForm } from "react-hook-form";
import Buttons from "../../../components/buttons";
import { StackActions, useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import confirmEmailValidationSchema from "../../../utils/confirmeamilvalidations";
import { updateNotification } from "../../../utils/updatenotification";
import axios from "axios";
import AppNotification from "../../../components/AppNotification/appnotification";

const ConfirmEmailScreen = ({route}) => {
    const userid = route.params.profile.id;
    const [message, setmessage] = useState({
        test: '',
        type: '',
    })

    const {control, handleSubmit, errors} = useForm({
        resolver: yupResolver(confirmEmailValidationSchema)
    });

    const navigation = useNavigation();

    let[fontsLoaded] = useFonts({
        'Inder-Regular': require ('../../../../assets/fonts/Inder-Regular.ttf'),
        'FredokaOne-Regular': require('../../../../assets/fonts/FredokaOne-Regular.ttf'),
    })

    if(!fontsLoaded){
        return null;
    };

    const confirmpressed = async (getotp) => {
        try {
            const otp = getotp.otp.toString();
            const {data} = await axios.post("http://192.168.135.79:8000/api/user/verify-email", {userid, otp})
            updateNotification(setmessage, data.justification, data.success)            
            console.log(data);
            navigation.navigate("LogIn");
        } catch (error) {
            updateNotification(setmessage, error.response.data.error)
            console.log(error?.response?.data);
        }
    };

    const resendcodepressed = () => {
        console.warn('Resend Code')
    };

    const backtologinpressed = () => {
        navigation.navigate('LogIn');
    };

    return(
        <View style={styles.container}>
            {message.text ? <AppNotification text={message.text} type={message.type} /> : null}
            <Text style={styles.titletext}>Confirm Email</Text>

            <Text style={styles.infocontainer}>Confirmation code has been sent to your registered mail id.</Text>

            <InputBox control={control} name={'otp'} placeholder={'Confirmation Code'}/>

            <View style={styles.buttoncontainer}>
                <Buttons value={'Confirm'} onPress={handleSubmit(confirmpressed)}/>
            </View>

            <View style={styles.bottomwrapper}>
                <Text style={styles.resendcode} onPress={resendcodepressed}>Resend code?</Text>
                <Text style={styles.backtologin} onPress={backtologinpressed}>Back to login</Text>
            </View>
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
    titletext:{
        marginTop: 60,
        fontFamily: 'FredokaOne-Regular',
        fontSize: 28,
        color: '#82AAE3', 
    },
    infocontainer:{
        fontFamily: 'Inder-Regular',
        fontSize: 11,
        color: '#979797',
        marginTop: 20,
    },
    buttoncontainer:{
        marginTop: 25,
        width: '100%',
        alignItems: 'center',
    },
    bottomwrapper:{
        marginTop: 45,
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
    },
    resendcode:{
        fontFamily: 'Inder-Regular',
        color: '#82AAE3',
        fontSize: 13,
    },
    backtologin:{
        fontFamily: 'Inder-Regular',
        color: '#82AAE3',
        fontSize: 13,
    },
})

export default ConfirmEmailScreen
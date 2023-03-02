import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from 'expo-font';
import { useForm } from "react-hook-form";
import InputBox from "../../../components/inputbox";
import Buttons from "../../../components/buttons";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import resetPasswordConfirmationValidationSchema from "../../../utils/resetpasswordconfirmationvalidationschema";
import { MyContext } from "../../../../Global/context";
import axios from "axios";
import { updateNotification } from "../../../utils/updatenotification";
import AppNotification from "../../../components/AppNotification/appnotification";

const ResetPasswordConfirmationScreen = () => {
    const {userid, darkscheme} = useContext(MyContext);

    const [message, setmessage] = useState({
        test: '',
        type: '',
    })

    const {control, handleSubmit, error} = useForm({
        resolver: yupResolver(resetPasswordConfirmationValidationSchema)
    });
    const navigation = useNavigation();

    let[fontsLoaded] = useFonts({
        'Inder-Regular': require('../../../../assets/fonts/Inder-Regular.ttf'),
        'FredokaOne-Regular': require('../../../../assets/fonts/FredokaOne-Regular.ttf'),
    })

    if(!fontsLoaded){
        return null;
    }

    const confirmpressed = async (res) => {
        try {
            const otp = res.otp.toString();
            const password = res.newpassword;
            console.log(otp)
            const {data} = await axios.post("http://192.168.135.79:8000/api/user/reset-password", {userid, otp, password})
            console.log(data);
            navigation.navigate("LogIn");
        } catch (error) {
            updateNotification(setmessage, error.response.data.error)
            console.log(error?.response?.data)
        }
    }

    const backtologinpressed = () => {
        navigation.navigate('LogIn');
    }

    return(
        <View style={[styles.container, {backgroundColor: darkscheme ? "#181a20" : "#fbfbfb"}]}>
            {message.text ? <AppNotification text={message.text} type={message.type} /> : null}
            <Text style={[styles.title, {color: darkscheme ? "#4360c9" : "#82aae3"}]}>Reset Password</Text>

            <Text style={styles.infocontainer}>Confirmation code has been sent to your registered email id.</Text>

            <View style={styles.inputcontainer}>
                <InputBox control={control} name={'otp'} placeholder={'OTP'} />
                <InputBox control={control} name={'newpassword'} placeholder={'New Password'} visible />
                <InputBox control={control} name={'confirmpassword'} placeholder={'Confirm Password'} visible />
            </View>

            <View style={styles.buttoncontainer}>
                <Buttons value={'Confirm'} onPress={handleSubmit(confirmpressed)}/>
            </View>

            <View style={styles.bottomwrapper}>
                <Text style={styles.bottom} onPress={backtologinpressed}>Back to login</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',
        backgroundColor: '#eafdfc',
        alignItems: 'center',
    },
    title:{
        fontFamily: 'FredokaOne-Regular',
        fontSize: 28,
        color: '#82AAE3',
        marginTop: 75,
    },
    infocontainer:{
        marginTop: 20,
        fontFamily: 'Inder-Regular',
        color: '#979797',
        fontSize: 11,
    },
    inputcontainer:{
        width: '100%',
        alignItems: 'center',
    },
    buttoncontainer:{
        width: '100%',
        alignItems: 'center',
        marginTop: 60,
    },
    bottomwrapper:{
        marginTop: 45,
        flexDirection: 'row',
        width: '80%',
        justifyContent: "flex-end",
    },
    bottom:{
        fontFamily: 'Inder-Regular',
        color: '#82AAE3',
        fontSize: 13,
    },
})

export default ResetPasswordConfirmationScreen
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from 'expo-font';
import { useForm } from "react-hook-form";
import InputBox from "../../../components/inputbox";
import Buttons from "../../../components/buttons";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import resetPasswordConfirmationValidationSchema from "../../../utils/resetpasswordconfirmationvalidationschema";

const ResetPasswordConfirmationScreen = () => {
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

    const confirmpresssed = () => {
        navigation.navigate('LogIn');
    }

    const resendcodepressed = () => {
        console.warn('Resend Code');
    }

    const backtologinpressed = () => {
        navigation.navigate('LogIn');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Reset Password</Text>

            <Text style={styles.infocontainer}>Confirmation code has been sent to your registered email id.</Text>

            <View style={styles.inputcontainer}>
                <InputBox control={control} name={'confirmationcode'} placeholder={'Confirmation Code'} />
                <InputBox control={control} name={'newpassword'} placeholder={'New Password'} visible />
                <InputBox control={control} name={'confirmpassword'} placeholder={'Confirm Password'} visible />
            </View>

            <View style={styles.buttoncontainer}>
                <Buttons value={'Confirm'} onPress={handleSubmit(confirmpresssed)}/>
            </View>

            <View style={styles.bottomwrapper}>
                <Text style={styles.bottom} onPress={handleSubmit(resendcodepressed)}>Resend code?</Text>
                <Text style={styles.bottom} onPress={backtologinpressed}>Back to login</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 25,
        height: '100%',
        width: '100%',
        backgroundColor: '#eafdfc',
        alignItems: 'center',
    },
    title:{
        fontFamily: 'FredokaOne-Regular',
        fontSize: 28,
        color: '#82AAE3',
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
        justifyContent: 'space-between',
    },
    bottom:{
        fontFamily: 'Inder-Regular',
        color: '#82AAE3',
        fontSize: 13,
    },
})

export default ResetPasswordConfirmationScreen
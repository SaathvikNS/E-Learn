import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, ScrollView, Dimensions, } from "react-native";
import { useFonts } from 'expo-font';
import InputBox from "../../../components/inputbox/inputbox";
import SocialMedia from "../../social media linking/socialmedia";
import Buttons from "../../../components/buttons/buttons";
import { StackActions, useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import signupValidationSchema from "../../../utils/signupvalidations";
import axios from "axios";
import AppNotification from "../../../components/AppNotification/appnotification";
import { updateNotification } from "../../../utils/updatenotification";
import { MyContext } from "../../../../Global/context";

const windowHeight = Dimensions.get("window").height;

const SignUpScreen = () => {
    const {darkscheme} = useContext(MyContext);

    const navigation = useNavigation();
    const [message, setmessage] = useState({
        type: '',
        text: '',
    })

    const {control, handleSubmit, errors} = useForm({
        resolver: yupResolver(signupValidationSchema),
    });

    let[fontsLoaded] = useFonts({
        'Inder-Regular': require('../../../../assets/fonts/Inder-Regular.ttf'),
        'FredokaOne-Regular': require('../../../../assets/fonts/FredokaOne-Regular.ttf'),
    });

    if(!fontsLoaded){
        return null;
    };

    const termspressed = () => {
        console.warn('Terms of Use');
    };

    const privacypressed = () => {
        console.warn('Privacy Policy');
    };

    const signuppressed = async (values) => {
        try {
            const {data} =  await axios.post("http://192.168.135.79:8000/api/user/create", {...values})
            console.log(data);
            navigation.dispatch(StackActions.replace('ConfirmEmailScreen', {profile: data.user}));
        } catch (error) {
            updateNotification(setmessage, error.response.data.error)
            console.log(error)
        }
    };

    const loginpressed = () => {
        navigation.navigate('LogIn');
    };

    return(
        <ScrollView>
            <View style={[styles.container, {backgroundColor: darkscheme ? "#181a20" : "#fbfbfb",}]}>
                {message.text ? <AppNotification type={message.type} text={message.text} /> : null}
                <Text style={[styles.signup, {color: darkscheme ? "#4360c9" : "#82aae3"}]}>SignUp</Text>

                <InputBox control={control} name={'name'} placeholder={'Full Name'} />
                <InputBox control={control} name={'email'} placeholder={'E-Mail'} />
                <InputBox control={control} name={'password'} placeholder={'Password'} hide />
                <InputBox control={control} name={'confirmpassword'} placeholder={'Confirm Password'} hide />

                <Text style={[styles.agreement, {color: darkscheme ? "#ffffff88" : "#979797"}]}>By registering, you agree to our <Text style={styles.terms} onPress={termspressed}>Terms of Use</Text> and <Text style={styles.privacy} onPress={privacypressed}>Privacy Policy</Text></Text>

                <View style={styles.button}>
                    <Buttons value={'SignUp'} onPress={handleSubmit(signuppressed)}/>
                </View>

                <Text style={styles.loginquestion}>Have an account? <Text style={styles.loginanswer} onPress={loginpressed}>Login</Text></Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        height: windowHeight,
        alignItems: 'center',
    },
    signup:{
        marginTop: 50,
        marginBottom: 20,
        fontFamily: 'FredokaOne-Regular',
        fontSize: 56,
    },
    orcontainer:{
        marginTop: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        height: 20,
    },
    or:{
        fontFamily: 'Inder-Regular',
        color: '#82AAE3',
    },
    line:{
        width: '45%',
        height: 1,
        backgroundColor: '#82AAE3',
    },
    socialmediawrapper:{
        marginTop: 25,
    },
    agreement:{
        marginTop: 30,
        textAlign: 'center',
        fontSize: 10,
        fontFamily: 'Inder-Regular',
        width: '60%',
        color: '#979797',
    },
    terms:{
        color: '#82AAE3',
    },
    privacy:{
        color: '#82AAE3',
    },
    button:{
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    loginquestion:{
        marginTop: 20,
        fontFamily: 'Inder-Regular',
        fontSize: 14,
        color: '#979797',
    },
    loginanswer:{
        color: '#82AAE3',
    },
})

export default SignUpScreen
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, } from "react-native";

const SocialMedia = ({ value }) => {
    const googlepressed = () => {
        console.warn('google pressed')
    }
    const facebookpressed = () => {
        console.warn('facebook pressed')
    }
    const applepressed = () => {
        console.warn('apple pressed')
    }

    return(
        <View style={styles.socialmediawrapper}>
            <Text style={styles.socialmediatext}>{value} with Social Media</Text>
            <View style={styles.formswrapper}>
                <TouchableOpacity onPress={googlepressed}>
                        <Image style={styles.googleimg} source={require('../../../assets/logos/google.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={facebookpressed}>
                        <Image style={styles.facebookimg} source={require('../../../assets/logos/facebook.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={applepressed}>
                    <Image style={styles.appleimg} source={require('../../../assets/logos/apple.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    socialmediawrapper:{
        width: '80%',
    },
    socialmediatext:{
        fontFamily: 'Inder-Regular',
        color: '#82AAE3',
        textAlign: 'center',
    },
    formswrapper:{
        flexDirection: 'row',
        width: '130%',
        justifyContent: 'space-evenly',
        marginTop: 25,
    },
    googlewrapper:{
        backgroundColor: '#fff',
        borderRadius: 25,
    },
    googleimg:{
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    facebookimg:{
        backgroundColor: '#fff',
        borderRadius: 25,
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    appleimg:{
        backgroundColor: '#fff',
        borderRadius: 25,
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
})

export default SocialMedia
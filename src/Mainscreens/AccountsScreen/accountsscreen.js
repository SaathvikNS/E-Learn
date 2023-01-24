import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {  useFonts } from 'expo-font';

const AccountsScreen = () => {
    let[fontsLoaded] = useFonts({
        'Inder-Regular': require('../../../assets/fonts/Inder-Regular.ttf'),
        'FredokaOne-Regular': require('../../../assets/fonts/FredokaOne-Regular.ttf')
    })

    if(!fontsLoaded){
        return null;
    }

    return(
        <View style={styles.container}>
            <Text style={styles.accounts}>Accounts Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    accounts:{
        fontFamily: 'Inder-Regular',
    }
})

export default AccountsScreen;
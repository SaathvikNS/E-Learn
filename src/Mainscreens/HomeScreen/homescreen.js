import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from 'expo-font';

const HomeScreen = () => {
    let[fontsLoaded]=useFonts({
        'Inder-Regular': require('../../../assets/fonts/Inder-Regular.ttf'),
        'FredokaOne-Regular': require('../../../assets/fonts/FredokaOne-Regular.ttf'),
    })

    if(!fontsLoaded){
        return null;
    };

    return(
        <View style={styles.container}>
            <Text style={styles.home}>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EAFDFC'
    },
    home:{
        fontFamily: 'Inder-Regular',
    },
})

export default HomeScreen;
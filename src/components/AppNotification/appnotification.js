import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text } from "react-native";

const AppNotification = ({type, text}) => {
    const height = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(height,{
            toValue: 35,
            duration: 500,
            useNativeDriver: false,
        }).start()
    }, [])

    const backgroundColor = type === false ? 'rgba(255, 0, 0, 0.7)' : 'rgba(0, 255, 0, 0.7)'

    return(
        <Animated.View style={[styles.container, {height, backgroundColor}]}>
            <Text style={{fontFamily: 'Inder-Regular', color: '#fff', fontSize: 16,}}>{text}</Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 15,
    },
})

export default AppNotification;
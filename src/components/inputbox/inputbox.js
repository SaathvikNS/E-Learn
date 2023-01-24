import React from "react";
import { TextInput, StyleSheet, Text, View, } from "react-native";
import { Controller } from "react-hook-form";

const InputBox = ({control, name, placeholder, hide}) => {
    return(
        <>
            <Controller     
                control={control} 
                name={name}
                render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                    <View style={styles.container}>
                        {error &&(
                            <Text style={styles.errorMessage}>{error?.message}</Text> 
                        )}
                        <TextInput 
                        style={[styles.inputbox, {borderColor: error ? '#FF8888' : 'black',borderWidth: error ? 1 : 0}]}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder={placeholder} 
                        secureTextEntry={hide}
                        />
                    </View>
                )}
            />  
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        marginTop: 20,
    },
    errorMessage:{
        color: "#ff8888",
        paddingHorizontal: 20,
    },
    inputbox:{
        marginTop: 2,
        fontSize: 16,
        fontFamily: 'Inder-Regular',
        paddingHorizontal: 20,
        height: 45,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 50,
    },
})

export default InputBox
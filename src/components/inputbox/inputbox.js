import React, { useContext } from "react";
import { TextInput, StyleSheet, Text, View, } from "react-native";
import { Controller } from "react-hook-form";
import { MyContext } from "../../../Global/context";

const InputBox = ({control, name, placeholder, hide}) => {
    const {darkscheme} = useContext(MyContext);

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
                        style={[styles.inputbox, {borderColor: error ? '#FF8888' : 'black',borderWidth: error ? 1 : 0, backgroundColor: darkscheme ? "#1f222a" : "#ffffff", color: darkscheme ? "#cdcdcd" : "#00000099"}]}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder={placeholder} 
                        placeholderTextColor={darkscheme ? "#9e9e9e" : "#00000066"}
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
        borderRadius: 50,
    },
})

export default InputBox
import React, {useState} from "react";
import {StyleSheet, Text, TextInput, View} from 'react-native';
import COLORS from "../assets/colors";

const FieldInput = ({label, error, height, onFocus=() => {}, ...props}) => {
    const [isFocused, setFocus] = useState(false)
    return (
        <View style={{marginBottom: 20}}>
            <Text style={styles.label}> {label} </Text>
            <TextInput {...props}
                       style={[styles.input,
                           {
                               borderColor: error ? COLORS.red : isFocused ? COLORS.blue : COLORS.darkGray,
                               alignItems: 'center', height: height || 50, color: COLORS.darkBlue
                           }]}
                       autoCapitalize='words'
                       autoCorrect={true}
                       onFocus={() => {
                           onFocus()
                           setFocus(true)
                       }}
                       onBlur={() => {
                           setFocus(false)
                       }}
            />

            {error && (
                <Text style={{color: COLORS.red, fontSize: 14, marginTop: 10}}>
                    {error}
                </Text>
            )}


        </View>
    )
}


const styles = StyleSheet.create({
    label: {
        marginVertical: 5,
        fontSize: 18,
        color: COLORS.darkGray
    },
    input: {
        backgroundColor: COLORS.light,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 1,

    },
})

export default FieldInput
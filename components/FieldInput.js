import React, {useState} from "react";
import {StyleSheet, Text, TextInput, View} from 'react-native';
import COLORS from "../assets/colors";

const FieldInput = ({label, error, height, onFocus=() => {}, ...props}) => { // receive props that can be configured when called
    const [isFocused, setFocus] = useState(false) //set focused state
    return (
        <View style={{marginBottom: 20}}>
            <Text style={styles.label}> {label} </Text>
            <TextInput {...props}
                // set style for when there is an error the border color changes, else change border color on focus
                       style={[styles.input,
                           {
                               borderColor: error ? COLORS.red : isFocused ? COLORS.blue : COLORS.darkGray,
                               alignItems: 'center', height: height || 50, color: COLORS.darkBlue
                           }]}
                       autoCorrect={true} //turns on phone's autocorrect feature (useful for names and spelling)
                       onFocus={() => { //on focus means when user clicks into a field
                           onFocus()
                           setFocus(true)
                       }}
                       onBlur={() => { //on blur means user clicks out of a field
                           setFocus(false)
                       }}
            />

            {
                error && (
                    <Text style={styles.errorInfo}>
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
        paddingVertical: 5,
        borderWidth: 1,
    },
    errorInfo: {
        color: COLORS.red,
        fontSize: 14,
        marginTop: 10
    }
})

export default FieldInput
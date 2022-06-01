import React, {useState} from "react";
import {StyleSheet, Text, TextInput, View} from 'react-native';
import COLORS from "../assets/colors";

const FieldInput = ({label, error, height, onFocus=() => {}, ...props}) => {
    const [isFocused, setFocus] = useState(false)
 return(
     <View style={{marginBottom: 20}}>
         <Text style={styles.label}> {label} </Text>
         <TextInput {...props}
                    style={[styles.input,
                        {borderColor: error ? COLORS.red :
                                isFocused ? COLORS.blue : COLORS.darkGray, alignItems: 'center',
                            height: 50 || {height}, color: COLORS.darkBlue}]}
             // key={index}
             // value={getValue(userInput, index)}
             autoCapitalize='words'
             autoCorrect={true}
             // multiline={field.height && true}
             // keeps track of user input
             // onChangeText={newText => {
             //     updateInput(newText, index)
             // }}
             //onblur == when user clicks out of the field
             // onBlur={() => {
             //     if (!validateLength(field.required, userInput.inputArr[index])) {
             //         alert("This is a Required Field")
             //     }
             //     setUserInput({...userInput, fieldBeingEdited: null})
             // }}
             // //on focus == user clicks into the field
                    onFocus = {() => {
                        onFocus()
                        setFocus(true)
                    }}
                    onBlur = { ()=> {
                        setFocus(false)
                    }}
         />

         { error && (
             <Text style={{color: COLORS.red, fontSize: 14, marginTop: 7}}>
                 {error}
             </Text>
         )}


     </View>
 )
}


const styles = StyleSheet.create({
    label: {
        marginVertical: 5,
        fontSize: 14,
        color: COLORS.darkGray
    },
    input: {
        backgroundColor: COLORS.light,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.5,

    },
})

export default FieldInput
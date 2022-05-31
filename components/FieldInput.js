import React, {useState} from "react";
import {Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import COLORS from "../assets/colors";

const FieldInput = ({label, error, onFocus=() => {}, ...props}) => {
    const [isFocused, setFocus] = useState(false)
 return(
     <View style={{marginBottom: 20}}>
         <Text style={styles.label}> {label} </Text>
         <View style={[styles.input,
             {borderColor: error ? COLORS.red :
                     isFocused ? COLORS.darkBlue : COLORS.maroon, alignItems: 'center'}] }>
             <TextInput {...props}
                 // key={index}
                 // value={getValue(userInput, index)}
                 // conditional styling changes border color depending on user input
                        style={{color: COLORS.darkBlue}}
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
         </View>
         { error &&
            <Text style={{color: COLORS.red, fontSize: 14, martinTop: 7}}>
                {error}
            </Text>
         }


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
        height: 55,
        backgroundColor: COLORS.light,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.5,

    },
})

export default FieldInput
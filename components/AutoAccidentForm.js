import {StyleSheet, Text, TextInput, View} from "react-native";
import * as React from "react";
import {useState} from "react";

const AutoAccidentPage = () => {
    const [text, setText] = useState('')
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 48}}> Auto Accident Form</Text>

            <label > hello</label>
            <TextInput value={text}
                       style={styles.nameInput}
                       placeholder={"Enter Full Name" }>

            </TextInput>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    nameInput: {
        fontSize: 20
    }
});
export default AutoAccidentPage
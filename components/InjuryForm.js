import {StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";
import * as React from "react";


const NameInput = ({label}) => {
    const [text, setText] = useState('')
    return (
        <View style={styles.nameInput}>
            <label>{label}</label>
            <TextInput value={text}
                       placeholder = "Enter text here"
                       onChangeText={newText => setText(newText)}
                       defaultValue={text}>
            </TextInput>
        </View>
    );
}
const InjuryPage = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 48}}> Injury Form</Text>
            <NameInput label={"Name of Employee Involved"} />
            <NameInput label={"Incident Location"} />
            <NameInput label={"STS Vehicle Involved"} />
            <NameInput label={"Crew Leader Name"} />
            <NameInput label={"Direct Supervisor"} />
            <NameInput label={"Stanley Tree Division"} />

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd',
        alignItems: 'center',

    },
    nameInput: {
        fontSize: 20,
        justifyContent: 'top'
    }
});
export default InjuryPage
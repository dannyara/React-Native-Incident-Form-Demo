import {Button, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";
import * as React from "react";


const NameInput = ({label}) => {
    const [text, setText] = useState('')
    return (
        <View style={styles.nameInput}>
            <label>{label}</label>
            <TextInput value={text}
                       placeholder = " Enter text here"
                       style={styles.textInput}
                       onChangeText={newText => setText(newText)}
                       defaultValue={text}>
            </TextInput>
        </View>
    );
}
const InjuryPage = ({navigation}) => {
    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={{fontSize: 36}}> Injury Form</Text>
                <NameInput label={"Name of Employee Injured"} />
                <NameInput label={"Incident Location"} />
                <NameInput label={"STS Vehicle Involved"} />
                <NameInput label={"Crew Leader Name"} />
                <NameInput label={"Direct Supervisor"} />
                <NameInput label={"Stanley Tree Division"} />
                <View>
                    <Button
                        title="Submit"
                        onPress={() => {
                            navigation.pop()
                        }}
                    />
                </View>
            </View>
        </ScrollView>


    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd',
        alignItems: 'center',
        padding: 20

    },
    scrollContainer: {
        flex: 1,
    },
    nameInput: {
        fontSize: 20,
        justifyContent: 'top',
        width: '80%',
        margin: 20,
        padding: 10,

    },
    textInput: {
        backgroundColor: 'white',
        height: 40, border: '1px maroon solid'
    }
});
export default InjuryPage
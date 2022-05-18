import {Button, StyleSheet, ScrollView, Text, TextInput, View, SafeAreaView} from "react-native";
import * as React from "react";
import {useState} from "react";
import {NativeStackView} from "@react-navigation/native-stack";

const NameInput = ({label}) => {
    const [text, setText] = useState('')
    return (
        <View style={styles.fieldList}>
            <Text>{label}</Text>
            <TextInput value={text}
                       placeholder = " Enter text here"
                       style={styles.textInput}
                       onChangeText={newText => setText(newText)}
                        autoCapitalize='words'>
            </TextInput>
        </View>
    );
}

const fieldsObject = [
    {
        'label': 'Name of Employee Involved',
        'placeholder': 'Enter Full Name',
        'required': true,
        'type': 'text-field',
    },
    {
        'label': 'Incident Location',
        'placeholder': 'Enter Address',
        'required': true,
        'type': 'time-date',
    },
    {
        'label': 'STS Vehicle Involved',
        'placeholder': 'Enter STS Equipment Number',
        'required': true,
        'type': 'text-field',
    },
    {
        'label': 'Crew Leader Name',
        'placeholder': 'Enter Full Name',
        'required': true,
        'type': 'text-field',
    },
    {
        'label': 'Direct Supervisor',
        'placeholder': 'Enter Full Name',
        'required': true,
        'type': 'text-field',
    },
    {
        'label': 'Stanley Tree Division',
        'placeholder': 'Enter Division Name',
        'required': true,
        'type': 'dropdown',
    },
    {
        'label': 'Police Report Number',
        'placeholder': 'Enter police report details',
        'required': true,
        'type': 'text-field',
    },

]

const DisplayFields = () => {
    const [text, setText] = useState('')
    return(
        <View style={{width: '100%', alignItems: 'center'}}>
            {fieldsObject.map((data, index) =>
                <View style={styles.fieldList}>
                    <Text> {data.label} </Text>
                    <TextInput
                        key={index}
                        value={data.text}
                        placeholder={data.placeholder}
                        style={[styles.textInput, {height: data.height || 50}]}
                        onChangeText={newText => setText(newText)}
                    />
                </View>
            )}
        </View>

    )
}

const AutoAccidentPage = ({navigation}) => {

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={{fontSize: 36}}> Auto Accident Form</Text>
                <DisplayFields />
                <View>
                    <Button
                        title="Submit"
                        onPress={() => {
                            alert("Successful submit of Auto accident form")
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
        padding: 20,

    },
    scrollContainer: {
        flex: 1,
    },
    fieldList: {
        fontSize: 20,
        justifyContent: 'center',
        width: '80%',
        margin: 20,


    },
    textInput: {
        backgroundColor: 'white',
        height: 50,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'maroon',
        borderStyle: 'solid'
    }
});
export default AutoAccidentPage
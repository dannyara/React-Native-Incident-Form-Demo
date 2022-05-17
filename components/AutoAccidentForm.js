import {Button, StyleSheet, ScrollView, Text, TextInput, View} from "react-native";
import * as React from "react";
import {useState} from "react";

const NameInput = ({label}) => {
    const [text, setText] = useState('')
    return (
        <View style={styles.nameInput}>
            <Text>{label}</Text>
            <TextInput value={text}
                       placeholder = " Enter text here"
                       style={styles.textInput}
                       onChangeText={newText => setText(newText)}
                       defaultValue={text}>
            </TextInput>
        </View>
    );
}

const testArr = [{
    color: "blue",
    text: "text1"
}, {
    color: "red",
    text: "text2"
}];

const DynamicInput = () => {
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
        }
        ]
    return(
        <View>
            {testArr.map((data) =>
                <Text> {data.text} </Text>
            )}

        </View>
    )
};

const AutoAccidentPage = ({navigation}) => {

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={{fontSize: 36}}> Auto Accident Form</Text>
                <NameInput label={"Name of Employee Involved"} />
                <NameInput label={"Incident Location"} />
                <NameInput label={"STS Vehicle Involved"} />
                <NameInput label={"Crew Leader Name"} />
                <NameInput label={"Direct Supervisor"} />
                <NameInput label={"Stanley Tree Division"} />
                {/*<FieldInput fields={fieldsObject} />*/}
                <DynamicInput />
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
        justifyContent: 'flex-start',
        width: '80%',
        margin: 20,
        padding: 10,

    },
    textInput: {
        backgroundColor: 'white',
        height: 40,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'maroon',
        borderStyle: 'solid'
    }
});
export default AutoAccidentPage
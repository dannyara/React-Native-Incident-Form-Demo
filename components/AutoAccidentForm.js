import {Button, StyleSheet, ScrollView, Text, TextInput, View, SafeAreaView} from "react-native";
import * as React from "react";
import {useState} from "react";
import RadioButtonRN from "radio-buttons-react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const checkRequired = (text) => {
    console.log(text)
    return text.length > 0
}

const fields = [
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
        'height': 60,
        'type': 'time-date',
    },
    {
        'label': 'STS Vehicle Involved',
        'placeholder': 'Enter STS Equipment Number',
        'required': true,
        'type': 'text-field',
    },
    {
        'label': 'Please Describe the Details of the Incident',
        'placeholder': 'Enter Incident Details',
        'height': 100,
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
    return (
        <View style={{width: '100%', alignItems: 'center'}}>
            {fields.map((data, index) =>
                <View style={styles.fieldList}>
                    <Text> {data.label} </Text>
                    <TextInput
                        key={index}
                        value={data.text}
                        placeholder={data.placeholder}
                        style={[styles.textInput, {height: data.height || 50}]}
                        multiline={data.height && true}
                        autoCapitalize='words'
                        onChangeText={newText => setText(newText)}
                        onBlur={() => {
                            if (data.required && !checkRequired(text)) {
                                alert("This is a Required Field")
                            }
                        }}
                    />
                </View>
            )}
            <View style={{marginTop: 10, marginBottom: 20}}>
                <Text style={{fontSize: 16, textAlign: 'center'}}> Police Report Made?</Text>
                <View style={{flexDirection: 'row', width: '80%'}}>
                    <RadioButtonRN
                        data={[{label: 'Yes'}, {label: 'No'}]}
                        style={{flex: 1}}
                        selectedBtn={(e) => console.log(e)}
                        circleSize={20}
                        icon={
                            <Icon
                                name="check-circle"
                                size={25}
                                color="#bc7d9c"
                            />
                        }
                    />
                </View>
            </View>
        </View>

    )
}

const AutoAccidentPage = ({navigation}) => {

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={{fontSize: 36}}> Auto Accident Form</Text>
                <DisplayFields/>
                <View style={{margin: 20, width: '40%'}}>
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
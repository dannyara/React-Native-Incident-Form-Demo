import {Button, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";
import * as React from "react";
import RadioButtonRN from 'radio-buttons-react-native';

const checkValue = () => {
    if (this.state.value.length > 2) {
        console.log("test")
    }
}
const validate = (text) => {
    return text === "test"
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
        'label': 'How Injury Occured',
        'placeholder': 'Enter all relevant details',
        'required': true,
        'height': 100,
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
        'label': 'Date and time of Incident',
        'placeholder': 'Enter Division Name',
        'required': true,
        'type': 'dropdown',
    },
    {
        'label': 'Part of body injured',
        'placeholder': 'Enter Division Name',
        'required': true,
        'type': 'dropdown',
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
            <View>
                <RadioButtonRN
                    data={['yes','no']}
                    selectedBtn={(e) => console.log(e)}
                />
            </View>
        </View>

    )
}


const TestValidation = ({label}) => {

    const [text, setText] = useState('')

    return (
        <View style={styles.nameInput}>
            <Text>{label}</Text>
            <TextInput value={text}
                       placeholder = " Enter text here"
                       name={"input"}
                       style={styles.textInput}
                       onChangeText={newText => setText(newText)}
                       autoCapitalize='words'
                       defaultValue={text}
                       onBlur ={() =>{
                           if (validate(text)) {
                               console.log('true')

                        } else {
                           console.log('false')
                        }
                       }}
            />
        </View>
    );
}

const InjuryPage = ({navigation}) => {
    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={{fontSize: 36}}> Injury Form</Text>
                <DisplayFields />


                <View>
                    <Button
                        title="Submit"
                        onPress={() => {
                            alert("Successful submit of Injury form")
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
        borderStyle: 'solid',
    }
});
export default InjuryPage
import {Button, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import * as React from "react";
import {useState} from "react";
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


// function to handle required field length, returns true if input is valid
const validateLength = (required, text) => {
    return (required || text.length > 0)
}

const DisplayFields = (input) => {
    let fields = input.fields
    let inputArray = input.userInput
    //function for updating user input each time they type into the field
    const updateInput = (text, index) => {
        setUserInput(previousState => {
            previousState.inputArr[index] = text
            return { inputArr: previousState.inputArr}
        })
    }
    function getValue(userInput, index) {
        return userInput.inputArr[index]
    }

    const [userInput, setUserInput] = useState({
        inputArr: inputArray,
        fieldBeingEdited: null
    })
    // handle the border color
    const handleBorderColor = (userInput,index) => {
        // if text is larger than 0
        if(validateLength(userInput.inputArr, index)){
            return index === userInput.fieldBeingEdited ? 'green' : 'maroon'
        }
        return 'red'

    }

    return(
        <View style={{width: '100%', alignItems: 'center'}}>
            {/*//fields.map == for(field in fields...*/}

            {fields.map((field, index) =>
                // switch statement here, textinput, radio , datefields, dropdown
                <View style={styles.fieldList}>
                    <Text> {field.label} </Text>
                    <TextInput
                        key={index}
                        value={getValue(userInput, index)}
                        placeholder={field.placeholder}
                        // conditional styling changes border color depending on user input
                        style={[styles.textInput, {height: field.height || 50, borderColor: handleBorderColor(userInput,index), borderWidth: 1} ]}
                        autoCapitalize='words'
                        multiline={field.height && true}
                        // keeps track of user input
                        onChangeText={newText => {
                            updateInput(newText, index)
                        }}
                        //onblur == when user clicks out of the field
                        onBlur={() => {
                            if (!validateLength(field.required, userInput.inputArr[index])) {
                                alert("This is a Required Field")
                            }
                            setUserInput({...userInput, fieldBeingEdited: null})
                        }}
                        //on focus == user clicks into the field
                        onFocus = { ()=> {
                            setUserInput({...userInput, fieldBeingEdited: index})
                        }}
                    />
                </View>
            )}
            <View style={{marginTop: 10, marginBottom: 20}}>
                <Text style={{fontSize: 16, textAlign: 'center'}}> Police Report Made?</Text>
                <View style={{flexDirection: 'row', width: '80%'}}>
                    <RadioButtonRN
                        data={[{'label': 'Yes'}, {'label': 'No'}]}
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


const AutoAccidentForm = ({navigation}) => {
    // json object of fields to be used in the form
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


    // create empty array for capturing user input
    const inputArray = Array(10).fill('')

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 36}}> Auto Accident Form</Text>
            <DisplayFields fields={fields} userInput={inputArray}/>
            <View>
                <Button
                    title="Submit"
                    onPress={() => {

                        console.log(fields.label, inputArray)
                        alert(inputArray)
                        navigation.pop()
                    }}
                />
            </View>
        </View>
    )
}

const AutoAccidentPage = ({navigation}) => {
    return (
        <ScrollView style={styles.scrollContainer}>
            <AutoAccidentForm navigation={navigation}/>

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
    buttonContainer: {
        margin: 20,
        width: '40%'
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
export default AutoAccidentPage
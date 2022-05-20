import {Button, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";
import * as React from "react";
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        'label': 'How Injury Occurred',
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
    // Need to make many of these
    return(
        <View style={{width: '100%', alignItems: 'center'}}>
            {fields.map((data, index) =>
                <View style={styles.fieldList}>
                    <Text> {data.label} </Text>
                    <TextInput
                        key={index}
                        value={data.text}
                        placeholder={data.placeholder}
                        style={[styles.textInput, {height: data.height || 50} ]}
                        multiline={data.height && true}
                        onChangeText={newText => setText(newText)}
                        onBlur ={() =>{
                            if (data.required && !checkRequired(text)) {
                                // this.setStyle({color: 'black'})
                                alert("This is a Required Field")
                            }
                        }}
                    />
                </View>
            )}
            <View style={{ 'padding': 20, 'textAlign': 'center'}}>
                <Text> Medical Treatment Sought?</Text>
                <RadioButtonRN
                    data={[{'label': 'Yes'},{'label': 'No'}]}
                    style={{'flexDirection': 'row', 'padding': 10, 'textAlign': 'end'}}
                    selectedBtn={(e) => console.log(e)}
                    circleSize={16}
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

    )
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
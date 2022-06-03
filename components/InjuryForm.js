import {
    Button,
    Keyboard,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import * as React from "react";
import {useState} from "react";
import COLORS from "../assets/colors";
import FieldInput from "./FieldInput";
import Dropdown from "./Dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";

const InjuryForm = ({navigation}) => {
    const [errors, setErrors] = useState({})


    const validate = () => {
        //valid variable to prevent page changing when validation
        let valid = true
        setErrors({}) // restart errors with every render
        // validation switch case
        if (!input.employeeName) { //if employee name is empty
            handleError('name', 'This is a required field')
            valid = false
        } else if (!input.employeeName.match(/\w{2,}\s\w/)) { // if name isn't first + last name
            handleError('name', 'Please enter a full name, ie. John Doe')
            valid = false
        }
        if (!input.incidentLocation) {
            handleError('location', 'This is a required field')
            valid = false
        }
        if (!input.injuryDetails) {
            handleError('injuryDetails', 'This is a required field, please provide all details')
            valid = false
        }

        if (!input.crewLeaderName) {
            handleError('crewLeaderName', 'This is a required field')
            valid = false
        }
        if (!input.incidentDateTime) {
            handleError('incidentDateTime', 'This is a required field')
            valid = false
        }
        if (!input.typeOfInjury) {
            handleError('typeOfInjury', 'This is a required field')
            valid = false
        }
        if (!input.bodyPartInjured) {
            handleError('bodyPartInjured', 'This is a required field')
            valid = false
        }
        if (!input.division) {
            handleError('division', 'This is a required field')
            valid = false
        }
        if (valid) {
            submit().then(r => {
                alert('Injury Form submitted successfully!')
                // return user back to home
                navigation.pop()
            })
        }
    }
    const submit = async () => {
        try {
            const val = JSON.stringify(input, 0, 2)
            console.log(val)
            alert('output: ' + val)
            // await storage for storing the value to be sent to the backend later
            await AsyncStorage.setItem('injuryForm', val)
            //TODO: send http request to backend with data
        } catch (e) {
            alert('an unexpected error has occurred, see logs')
            console.log(e)
        }
    }

    const [input, setInput] = useState({
        employeeName: '',
        incidentLocation: '',
        injuryDetails: '',
        crewLeaderName: '',
        division: '',
        supervisorName: '',
        incidentDateTime: '',
        bodyPartInjured: '',
        typeOfInjury: '',
        medicalTreatmentSought: ''
    })
    //This function handles updating the user input object, takes the field name and the text to update
    const handleOnChange = (field, text) => {
        setInput(previousState => {
            return {...previousState, [field]: text} // square brackets because of dynamic field, see https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react
        })
    }
    const handleError = (field, errMsg) => {
        console.log(field, errMsg)
        setErrors(previousState => ({...previousState, [field]: errMsg}))
        // square brackets because of dynamic field, see https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.label}> Injury Form</Text>
            <View>
                <FieldInput
                    label='Name of Employee Involved'
                    placeholder='Enter full Name'
                    autoCapitalize='words'
                    error={errors.name}
                    onChangeText={(text) => handleOnChange('employeeName', text)}
                />
                <FieldInput
                    label='Location of Incident'
                    placeholder='Please include address, town, state, and zip'
                    error={errors.location}
                    multiline={true}
                    height={60}
                    onChangeText={(text) => handleOnChange('incidentLocation', text)}
                />
                <FieldInput
                    label='Date and time of Incident'
                    placeholder='Pmm/dd/yy - hh:mmPM/AM'
                    error={errors.incidentDateTime}
                    onChangeText={(text) => handleOnChange('incidentDateTime', text)}
                />

                {/*<DatePicker value={new Date()} label='pick a date'/>*/}
                {/*<RNDateTimePicker value={new Date()} />*/}


                <FieldInput
                    label='Crew Leader Name'
                    placeholder='Enter the full name of the crew leader'
                    autoCapitalize='words'
                    error={errors.crewLeaderName}
                    onChangeText={(text) => handleOnChange('crewLeaderName', text)}
                />
                <FieldInput
                    label='Direct Supervisor'
                    placeholder='Enter full name of the supervisor'
                    autoCapitalize='words'
                    error={errors.supervisorName}
                    onChangeText={(text) => handleOnChange('supervisorName', text)}
                />
                <Dropdown
                    label="Stanley Tree Division"
                    selectedValue={input.division}
                    onValueChange={(division, index) =>
                        handleOnChange('division', division)
                    }
                    error={errors.division}
                />
                <FieldInput
                    label='Injury Details'
                    placeholder='Please explain in detail how injury occurred'
                    error={errors.injuryDetails}
                    height={120}
                    multiline={true}
                    onChangeText={(text) => handleOnChange('injuryDetails', text)}
                />

                <FieldInput
                    label='Part of body injured'
                    placeholder='Please enter all that apply'
                    error={errors.bodyPartInjured}
                    onChangeText={(text) => handleOnChange('bodyPartInjured', text)}
                />
                <FieldInput
                    label='Nature of Injury'
                    placeholder='Please enter all that apply'
                    error={errors.typeOfInjury}
                    onChangeText={(text) => handleOnChange('typeOfInjury', text)}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title={"Submit"}
                    onPress={() => {
                        validate()
                    }}
                />
            </View>

        </ScrollView>
    )
}

const InjuryPage = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <InjuryForm navigation={navigation}/>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1
    },
    scrollContainer: {
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: 25,
    },
    fieldList: {
        fontSize: 20,
        justifyContent: 'center',
        width: '80%',
        margin: 20,
    },
    buttonContainer: {
        padding: 20
    },
    label: {
        fontSize: 32,
        color: COLORS.black,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 25,
    },
    textInput: {
        backgroundColor: 'white',
        height: 50,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'maroon',
        borderStyle: 'solid',
    },
    submitButton: {
        height: 55,
        width: '40%',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        color: COLORS.offWhite,
        fontWeight: 'bold',
        fontSize: 18
    }
});
export default InjuryPage
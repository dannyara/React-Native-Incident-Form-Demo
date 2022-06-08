import {
    Button,
    Keyboard,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text, TouchableOpacity,
    View,
} from 'react-native';
import * as React from "react";
import {useState} from "react";
import COLORS from "../assets/colors";
import FieldInput from "../components/FieldInput";
import Dropdown from "../components/Dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import DTPicker from "../components/DTPicker";
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
        } else if (!input.crewLeaderName.match(/\w{2,}\s\w/)) { // if name isn't first + last name
            handleError('crewLeaderName', 'Please enter a full name, ie. John Doe')
            valid = false
        }
        if (!input.supervisorName) {
            handleError('supervisorName', 'This is a required field')
            valid = false
        } else if (!input.supervisorName.match(/\w{2,}\s\w/)) { // if name isn't first + last name
            handleError('supervisorName', 'Please enter a full name, ie. John Doe')
            valid = false
        }
        if (!input.incidentTime) {
            handleError('incidentTime', 'This is a required field')
            valid = false
        // } else if(!input.incidentTime.match(/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/)) {
        //     handleError('incidentTime', 'Please enter a valid time in hh:mm AM/PM Format. ie. 8:15 AM')
        }
        if (!input.incidentDate) {
            handleError('incidentDate', 'This is a required field')
            valid = false
        // } else if(!input.incidentDate.match(/(0\d{1}|1[0-2])\/([0-2]\d{1}|3[0-1])\/(20|21)\d{2}/)) {
        //     handleError('incidentDate', 'Please enter a valid date in mm/dd/yyyy format ie. 06/08/2022')
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
                const val = JSON.stringify(input, 0, 2)
                alert('output: ' + val)
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
            // await storage for storing the value to be sent to the backend later
            await AsyncStorage.setItem('injuryForm', val)
            axios.post('', { val }) //TODO: submit val to backend
                .then(response => console.log(response.data));
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
        incidentDate: null,
        incidentTime: null,
        bodyPartInjured: '',
        typeOfInjury: '',
        medicalTreatmentSought: ''
    })
    //This function handles updating the user input object, takes the field name and the text to update
    const handleOnChange = (field, text) => {
        console.log(field, text)
        setInput(previousState => {
            return {...previousState, [field]: text} // square brackets because of dynamic field, see https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react
        })
    }
    const handleError = (field, errMsg) => {
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

                <DTPicker
                    value={new Date()}
                    mode='date'
                    dateInput={input.incidentDate}
                    buttonHeader={'Select Date'}
                    label='Date of Incident'
                    error={errors.incidentDate}
                    changeDate={(newDate) => {
                        handleOnChange('incidentDate', (newDate.getMonth() + '/' + newDate.getDate() + '/' + newDate.getFullYear()))
                    }}
                    />


                <DTPicker
                    value={ new Date()}
                    mode='time' buttonHeader={'Select Time'} label='Time of Incident'
                    changeDate={(newTime) => handleOnChange('incidentTime', newTime.getHours() + ':' + newTime.getMinutes())}
                    error={errors.incidentTime}
                    timeInput={input.incidentTime}
                />

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
                    division={true}
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

                <Dropdown
                    label='Part of body injured'
                    bodyPart={true}
                    selectedValue={input.bodyPartInjured}
                    onValueChange={(bodyPart, index) =>
                        handleOnChange('bodyPartInjured', bodyPart)
                    }
                    error={errors.division}
                />
                <Dropdown
                    label='Type of Injury'
                    injuryType={true}
                    selectedValue={input.typeOfInjury}
                    onValueChange={(type, index) =>
                        handleOnChange('typeOfInjury', type)
                    }
                    error={errors.division}
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
        paddingVertical: 30,
        paddingHorizontal: 40,
    },
    button: {
        backgroundColor: COLORS.green,
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
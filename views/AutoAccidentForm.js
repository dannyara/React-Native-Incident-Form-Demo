import {
    Button,
    Keyboard,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import * as React from "react";
import {useState} from "react";
import COLORS from "../assets/colors";
import FieldInput from "../components/FieldInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Dropdown from "../components/Dropdown";
import axios from "axios";

const AutoAccidentForm = ({navigation}) => {
    // json object of fields to be used in the form
    const [errors, setErrors] = useState({})
    const validate = () => {
        Keyboard.dismiss()
        //valid variable for live style validation
        let valid = true
        setErrors({})
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
        if (!input.incidentDetails) {
            handleError('incidentDetails', 'This is a required field, please provide all details')
            valid = false
        }
        if (!input.crewLeaderName) {
            handleError('crewLeaderName', 'This is a required field')
            valid = false
        }else if (!input.crewLeaderName.match(/\w{2,}\s\w/)) { // if name isn't first + last name
            handleError('name', 'Please enter a full name, ie. John Doe')
            valid = false
        }
        if (!input.supervisorName) {
            handleError('supervisorName', 'This is a required field')
            valid = false
        } else if (!input.supervisorName.match(/\w{2,}\s\w/)) { // if name isn't first + last name
            handleError('name', 'Please enter a full name, ie. John Doe')
            valid = false
        }
        if (!input.incidentTime) {
            handleError('incidentTime', 'This is a required field')
            valid = false
        } else if(!input.incidentTime.match(/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/)) {
            handleError('incidentTime', 'Please enter a valid time in hh:mm AM/PM Format. ie. 8:15 AM')
        }
        if (!input.incidentDate) {
            handleError('incidentDate', 'This is a required field')
            valid = false
        } else if(!input.incidentDate.match(/(0\d{1}|1[0-2])\/([0-2]\d{1}|3[0-1])\/(20|21)\d{2}/)) {
            handleError('incidentDate', 'Please enter a valid date in mm/dd/yyyy format ie. 06/08/2022')
        }
        if (!input.vehicleInvolved) {
            handleError('vehicleInvolved', 'This is a required field')
            valid = false
        }
        if (!input.policeReportMade) {
            handleError('policeReportMade', 'This is a required field')
            valid = false
        }
        if (!input.division) {
            handleError('division', 'This is a required field')
            valid = false
        }
        if (valid) {
            submit().then(r => {
                Keyboard.dismiss()
                const val = JSON.stringify(input, 0, 2)
                alert('output: ', val)
                alert('Auto Accident Form submitted successfully!' + '\n')
                console.log(r)
                navigation.pop()
            })
        }
    }
    const submit = async () => {
        try {
            const val = JSON.stringify(input, 0, 2)
            await AsyncStorage.setItem('AutoAccidentForm', val)
            axios.post('', { val }) //TODO: submit val to backend
                .then(response => console.log(response.data));
        } catch (e) {
            alert('an unexpected error has occurred:', '\n', e)
        }
    }

    const [input, setInput] = useState({
        employeeName: '',
        incidentLocation: '',
        incidentDetails: '',
        crewLeaderName: '',
        division: '',
        supervisorName: '',
        incidentDate: '',
        incidentTime: '',
        vehicleInvolved: '',
        policeReportMade: false,
    })
    //This function handles updating the user input object, takes the field name and the text to update
    const handleOnChange = (field, text) => {
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
            <Text style={styles.label}> Auto Accident Form</Text>
            <View>
                <FieldInput
                    label='Name of Employee Involved'
                    placeholder='Enter full Name'
                    error={errors.name}
                    autoCapitalize='words'
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
                    label='Date of Incident'
                    placeholder='Please enter date in MM/DD/YYYY format'
                    error={errors.incidentDate}
                    onChangeText={(text) => handleOnChange('incidentDate', text)}
                />
                <FieldInput
                    label='Time of Incident'
                    placeholder='Please enter in HH:MM PM/AM format'
                    error={errors.incidentTime}
                    onChangeText={(text) => handleOnChange('incidentTime', text)}
                />

                <FieldInput
                    label='Crew Leader Name'
                    placeholder='Enter the full name of the crew leader'
                    error={errors.crewLeaderName}
                    autoCapitalize='words'
                    onChangeText={(text) => handleOnChange('crewLeaderName', text)}
                />
                <FieldInput
                    label='Direct Supervisor'
                    placeholder='Enter full name of the supervisor'
                    error={errors.supervisorName}
                    autoCapitalize='words'
                    onChangeText={(text) => handleOnChange('supervisorName', text)}
                />
                {/*Picker is currently unsupported in Expo: https://github.com/react-native-picker/picker/issues/45*/}
                <Dropdown
                    label="Stanley Tree Division"
                    selectedValue={input.division}
                    onValueChange={(division, index) =>
                        handleOnChange('division', division)
                    }
                    error={errors.division}
                />
                <FieldInput
                    label='Incident Details'
                    placeholder='Please explain in detail how the accident occurred'
                    error={errors.incidentDetails}
                    height={120}
                    multiline={true}
                    onChangeText={(text) => handleOnChange('incidentDetails', text)}
                />
                <FieldInput
                    label='Police Report Made'
                    placeholder='Please enter all that apply'
                    error={errors.policeReportMade}
                    onChangeText={(text) => handleOnChange('policeReportMade', text)}
                />
                <FieldInput
                    label='STS Vehicle Involved'
                    placeholder='Please enter all that apply'
                    error={errors.vehicleInvolved}
                    autoCapitalize='words'
                    onChangeText={(text) => handleOnChange('vehicleInvolved', text)}
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

const AutoAccidentPage = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <AutoAccidentForm navigation={navigation}/>
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
export default AutoAccidentPage
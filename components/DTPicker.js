import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
// import { Picker } from 'react-native'  // not supported with expo
//import {Picker} from '@react-native-picker/picker';
import COLORS from "../assets/colors";
import DateTimePicker from "@react-native-community/datetimepicker"; //#TODO: works on mobile but not in web
import {useState} from "react";

const DTPicker = ({d,t, label, buttonHeader, mode, changeDate = () => {}, ...props}) => {  // receive props that can be configured when called
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());
    const showPicker = () => {
        setShow(true)
    };

    return (
        <View style={{marginBottom: 20}}>
            <Text style={styles.label}> {label} </Text>
            <Button style={{maxWidth: '40%'}} onPress={showPicker} title={buttonHeader}/>
            {/* render date time picker modal only when user clicks on button*/}
            {show && (
                <View style={{maxWidth: '60%'}}>
                    <DateTimePicker
                        {...props}
                          onChange={(event, selectedDate) => { //on focus means when user clicks into a field
                              setShow(false)
                              changeDate(selectedDate)
                              setDate(selectedDate)
                          }}
                          mode={mode}
                    />
                </View>
            )}

            {d && (
                <Text style={styles.dateTimeInfo}>{date.getMonth() +'/'+ date.getDate() + '/' + date.getFullYear()}</Text>
                )}
            {t && (
                <Text style={styles.dateTimeInfo}>{date.getHours() +':'+ date.getMinutes()}</Text>
            )}


        </View>
    )

}


const styles = StyleSheet.create({
    label: {
        marginVertical: 5,
        fontSize: 18,
        color: COLORS.darkGray
    },
    errorInfo: {
        color: COLORS.red,
        fontSize: 14,
        marginTop: 10
    },
    dateTimeInfo: {
        color: COLORS.darkBlue,
        paddingHorizontal: 20,
        fontSize: 14,
        marginTop: 10
    }
})


export default DTPicker
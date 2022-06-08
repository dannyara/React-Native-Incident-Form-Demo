import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import COLORS from "../assets/colors";
import DateTimePicker from "@react-native-community/datetimepicker"; //#TODO: works on mobile but not in web
import {useState} from "react";

const DTPicker = ({dateInput,timeInput, error, label, buttonHeader, mode, changeDate = () => {}, ...props}) => {  // receive props that can be configured when called
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());
    const showPicker = () => {
        setShow(true)
    };

    return (
        <View style={{marginBottom: 20}}>
            <Text style={styles.label}> {label} </Text>
            <View style={styles.button}>
                <Button color={COLORS.secondaryButton} onPress={showPicker}
                        title={buttonHeader}/>
            </View>
            {/* render date time picker modal only when user clicks on button*/}
            {show && (
                <View style={{maxWidth: '60%'}}>
                    <DateTimePicker
                        {...props}
                        onChange={(event, selectedDate) => { //on focus means when user clicks into a field
                            setShow(false)
                            changeDate(selectedDate) //need to split on time and date
                            setDate(selectedDate)
                        }}
                        mode={mode}
                    />
                </View>
            )}

            {dateInput && (
                <Text
                    style={styles.dateTimeInfo}>{date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear()}</Text>
            )}
            {timeInput && (
                <Text style={styles.dateTimeInfo}>{date.getHours() + ':' + date.getMinutes()}</Text>
            )}
            {
                error && (
                    <Text style={styles.errorInfo}>
                        {error}
                    </Text>
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
        marginTop: 10,
        alignSelf: 'center'
    },
    button: {
        paddingHorizontal: 40
    }
})


export default DTPicker
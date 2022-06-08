import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
// import { Picker } from 'react-native'  // not supported with expo
//import {Picker} from '@react-native-picker/picker';
import COLORS from "../assets/colors";
import RNDateTimePicker from "@react-native-community/datetimepicker"; //#TODO: works on mobile but not in web
import {useState} from "react";

const DateTimePicker = ({data, label, buttonHeader, mode, onChange = () => {}, ...props}) => {  // receive props that can be configured when called
    const [show, setShow] = useState(false);
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
                          onChange={() => { //on focus means when user clicks into a field
                              setShow(false)
                              onChange()
                          }}
                          mode={mode}
                    />
                </View>
            )}

            {/*{data && (*/}
            {/*        <Text>*/}
            {/*            {data}*/}
            {/*        </Text>*/}
            {/*    )}*/}
            <Text>{data}</Text>

        </View>
    )

}


const styles = StyleSheet.create({
    label: {
        marginVertical: 5,
        fontSize: 18,
        color: COLORS.darkGray
    },
})


export default DateTimePicker

import {StyleSheet, Text, TextInput, View} from 'react-native';
// import { Picker } from 'react-native'  // not supported with expo
//import {Picker} from '@react-native-picker/picker';
import COLORS from "../assets/colors";
import RNDateTimePicker from "@react-native-community/datetimepicker";

const DatePicker = ({label, ...props}) => {  // receive props that can be configured when called

    return(
        <View>
            <Text style={styles.label}> {label} </Text>
            <View style={{maxWidth: '6o%'}}>
                <RNDateTimePicker {...props}
                                value={new Date()}/>
            </View>

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


export default DatePicker
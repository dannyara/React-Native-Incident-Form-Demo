
import {StyleSheet, Text, TextInput, View} from 'react-native';
import COLORS from "../assets/colors";
import {Picker} from "@react-native-picker/picker";

const Dropdown = ({label, error, height, onFocus=() => {}, ...props}) => {  // receive props that can be configured when called

    return(
        <View style={{marginBottom: 20}}>
            <Text style={styles.label}> {label} </Text>
            <View style={[styles.input, {borderColor: error ? COLORS.red : COLORS.darkGray,}]}>
                <Picker {...props}
                        style={styles.dropdown}
                        ColorValue={COLORS.blue}
                >
                    <Picker.Item label="Select a STS Division" style={{textColor: COLORS.gray}} value=""/>
                    <Picker.Item label="Commercial" value="Commercial"/>
                    <Picker.Item label="DOT" value="DOT"/>
                    <Picker.Item label="Fleet" value="Fleet"/>
                    <Picker.Item label="National Grid" value="National Grid"/>
                    <Picker.Item label="Safety" value="Safety"/>
                    <Picker.Item label="Residential" value="Residential"/>
                    <Picker.Item label="Small Engine" value="Small Engine"/>
                    <Picker.Item label="Eversource MASS" value="Eversource MASS"/>
                    <Picker.Item label="Eversource NH" value="Eversource NH"/>
                </Picker>

            </View>

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
    input: {
        backgroundColor: COLORS.light,
        borderWidth: 1,
        height: 60,
    },
    dropdown: {
        color: COLORS.darkGray, backgroundColor: COLORS.light,
        maxHeight: 40,
        fontSize: 18

    },
    errorInfo: {
        color: COLORS.red,
        fontSize: 14,
        marginTop: 10
    }
})


export default Dropdown
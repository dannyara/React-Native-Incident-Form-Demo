
import {Picker, StyleSheet, Text, TextInput, View} from 'react-native';
import COLORS from "../assets/colors";

const Dropdown = ({label, error, height, onFocus=() => {}, ...props}) => {  // receive props that can be configured when called

    return(
        <View>
            <Text style={styles.label}> {label} </Text>
            <View style={{maxWidth: '6o%'}}>
                <Picker {...props}>
                    <Picker.Item label="Commercial" value="Commercial"/>
                    <Picker.Item label="DOT" value="DOT"/>
                    <Picker.Item label="Fleet" value="Fleet"/>
                    <Picker.Item label="National Grid" value="National Grid"/>
                    <Picker.Item label="Safety" value="Safety"/>
                    <Picker.Item label="Residential" value="Residential"/>
                    <Picker.Item label="Small Engine" value="Small Engine"/>
                    <Picker.Item label="Eversource MASS" value="Eversource MASS"/>
                </Picker>
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


export default Dropdown
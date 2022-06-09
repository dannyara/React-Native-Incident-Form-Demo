
import {StyleSheet, Text, TextInput, View} from 'react-native';
import COLORS from "../assets/colors";
import {Picker} from "@react-native-picker/picker";

const Dropdown = ({injuryType, equipment, bodyPart, division, label, error, height, onFocus=() => {}, ...props}) => {  // receive props that can be configured when called

    //switch case for types of dropdown, injurytype, bodypart, and equipment
    return(
        <View style={{marginBottom: 20}}>
            <Text style={styles.label}> {label} </Text>
            <View style={[styles.input, {borderColor: error ? COLORS.red : COLORS.darkGray,}]}>
                {division && (
                    <Picker {...props}
                            style={styles.dropdown}>
                        {/*passing in value of '' is the equivalent of not selecting anything at all*/}
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
                )}
                {bodyPart && (
                    <Picker {...props}
                            style={styles.dropdown}>
                        <Picker.Item label="Select a body part" style={{textColor: COLORS.gray}} value=""/>
                        <Picker.Item label="Hand" value="Hand"/>
                        <Picker.Item label="Leg" value="Leg"/>
                        <Picker.Item label="Face" value="Face"/>
                        <Picker.Item label="Neck" value="Neck"/>
                        <Picker.Item label="Arm" value="Arm"/>
                        <Picker.Item label="Foot" value="Foot"/>
                        <Picker.Item label="Back" value="Back"/>
                        <Picker.Item label="Chest" value=" Chest"/>
                        <Picker.Item label="Trunk" value="Trunk"/>
                    </Picker>
                )}
                {injuryType && (
                    <Picker {...props}
                            style={styles.dropdown}>
                        <Picker.Item label="Select what best fits" style={{textColor: COLORS.gray}} value=""/>
                        <Picker.Item label="Puncture" value="Puncture"/>
                        <Picker.Item label="Cut" value="Cut"/>
                        <Picker.Item label="Burn" value="Burn"/>
                        <Picker.Item label="Bruise" value="Bruise"/>
                        <Picker.Item label="Fall" value="Fall"/>
                        <Picker.Item label="Fracture" value="Fracture"/>
                        <Picker.Item label="Amputation" value="Amputation"/>
                        <Picker.Item label="Concussion" value="Concussion"/>
                        <Picker.Item label="Superficial" value="Superficial"/>
                    </Picker>
                )}
                {equipment && (
                    <Picker {...props}
                            style={styles.dropdown}>
                        <Picker.Item label="Select STS Equipment" style={{textColor: COLORS.gray}} value=""/>
                        <Picker.Item label="Ford F150" value="Ford F150"/>
                        <Picker.Item label="Chevy Silverado" value="Chevy Silverado"/>
                        <Picker.Item label="Dump truck" value="Dump truck"/>
                        <Picker.Item label="Excavator " value="Excavator"/>

                    </Picker>
                )}


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
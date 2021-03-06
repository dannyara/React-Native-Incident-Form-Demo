import {StatusBar} from 'expo-status-bar';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Image} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InjuryPage from "./views/InjuryForm";
import AutoAccidentPage from "./views/AutoAccidentForm";
import COLORS from "./assets/colors";

const Stack = createNativeStackNavigator(); // stack allows for navigation
const FormButtons = ({navigation}) => {
    return (
        <View style={styles.formSelect}>
            <View style={{margin: 20}}>
                <Button
                    style={styles.buttons}
                    testId="injuryFormButton"
                    onPress={() => {
                        navigation.navigate('InjuryForm') //navigates to Injury Form
                    }}
                    title={"New Injury Form"}
                />
            </View>
            <View style={{margin: 20}}>
                <Button
                    style={styles.buttons}
                    testId="AccidentFormButton"
                    onPress={() => {
                        navigation.navigate('AutoAccidentForm') // Navigates to auto accident form
                    }}
                    title={"New Auto Accident Form"}
                />
            </View>
        </View>
    );

}
const HomePage = ({navigation}) => {
    return (
        <View style={[styles.container, {flexDirection: 'column'}]}>
            {/*use phone's native status bar settings*/}
            <StatusBar style="auto"/>
            <View style={[styles.header, {flex: 8}]}>
                <Image style={styles.image}
                       source={require('./assets/STS-logo.png')}/>
            </View>
            <View style={{flex: 4}}>
                <FormButtons navigation={navigation}/>
            </View>
        </View>
    );

}

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator id='home-stack'>
                <Stack.Screen
                    name="Home"
                    component={HomePage}
                    testID='homePage'
                    options={{title: "Welcome to STS Connect"}}
                />
                <Stack.Screen
                    name={"InjuryForm"}
                    component={InjuryPage}
                    options={{title: "New Injury"}}
                />
                <Stack.Screen
                    name={"AutoAccidentForm"}
                    component={AutoAccidentPage}
                    options={{title: "New Auto Accident"}}
                />

            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default App
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',

    },
    header: {
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 30,
        color: 'red',
    },
    formSelect: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttons: {
        margin: 20,
        padding: 20
    },
    image: {
        flex: 1,
        width: 300,
        height: 300,
        resizeMode: 'contain'
    }
});

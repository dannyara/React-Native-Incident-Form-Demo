import {StatusBar} from 'expo-status-bar';
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Image, TextInput} from "react-native-web";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const FormButtons = () => {
    return (
        <View style={styles.formSelect}>
            <Text style={[styles.title, {fontSize: 18}]}> Select an incident form below: </Text>
            <Button
                onPress={() => {
                    alert('You tapped the button!');
                }}
                title={"Start Injury Form"}
            />
            <Button
                onPress={() => {
                    alert('You tapped the button!');
                }}
                title={"Start Auto Accident Form"}
            />
        </View>
    );

}
const HomePage = () => {
    return (
        <View style={[styles.container, {flexDirection: 'column'}]}>

            <StatusBar style="auto"/>
            <View style={[styles.header, {flex: 10}]}>
                <Image style={{width: 150, height: 150}}
                       source={require('./assets/STS-logo.png')}/>
            </View>
            <View style={{flex: 2}}>
                <FormButtons/>
            </View>
        </View>
    );

}

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomePage}
                    options={{title: "Welcome to STS Connect"}}
                />

            </Stack.Navigator>

        </NavigationContainer>

    );
}


export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd',

    },
    header: {

        alignItems: 'center',
        justifyContent: 'top'
    },
    title: {
        fontSize: 30,
        color: 'red',
    },
    formSelect: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

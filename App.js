import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Button, Image, TextInput} from "react-native-web";

const Buttons = () => {
    return (
        <View style = {styles.formSelect}>
            <Text style = {{fontSize: 18}}> Select an incident form below: </Text>
            <Button
                onPress = {() => {}}
                title = {"Start Injury Form"}
            />
            <Button
                onPress={() => {}}
                title={"Start Auto Accident Form"}
            />
        </View>
    );

}

const App = () => {

    return (
        <View style={[styles.container, {flexDirection: 'column'}]}>

        <StatusBar style="auto"/>
            <View style={[styles.header, {flex: 10}]}>
                <Text style={styles.title}> Stanley Tree Incident Form</Text>
                <Image style={{width: 150, height: 150}}
                       source={require('./assets/STS-logo.png')}/>
            </View>
            <View style={{flex: 2}}>
                <Buttons />
            </View>
        </View>
    );
}


export default  App

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
  } ,
    formSelect: {
      justifyContent: 'center',
        alignItems: 'center'
    }
});

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Button from 'inkMaster/app/components/Button.js';

import { 
  createStackNavigator, 
  createAppContainer 
} from 'react-navigation';

import firebase from 'firebase';

export default class UpdateAccInfo extends React.Component {


    constructor(props) {
        super(props);
        this._signOut = this._signOut.bind(this);
        const navigation = this.props.navigation;
    }

    render() {
      return(
        <View style={styles.container}>
        
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={this._signOut}>Sign out</Text>
            </TouchableOpacity>

        </View>
      );
    }

    _signOut () {
      Alert.alert(
              'Sign out',
              'Are you sure you would like to sign out?',
              [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => {
                  console.log('Signout Completed!')
                   firebase.auth().signOut()
                  .then(
                    // await AsyncStorage.clear();
                    this.props.navigation.navigate('Auth')
                    // _signOutAsync()
                  //   function() {
                  //     console.log('Signed out')
                  // }
                  ).catch(function(error) {
                        Alert.alert(
                          'Error',
                          'An error happened while signing out',
                          {text: 'OK', onPress: () => console.log('OK pressed'), style: 'cancel'},
                          { cancelable: false }
                        )
                  });

                }},
              ],
                { cancelable: false }
            )
    };
}

_signOutAsync = async () => {
  await AsyncStorage.clear();
  this.props.navigation.navigate('Auth');
}

  const styles = StyleSheet.create({
    container : {
      backgroundColor:'#455a64',
      flex: 1,
      alignItems:'center',
      justifyContent :'center'
    },
    button: {
      width:300,
      backgroundColor:'#1c313a',
      borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
    },
    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    }
  });
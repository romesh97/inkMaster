import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { 
  createStackNavigator, 
  createAppContainer 
} from 'react-navigation';

export default class UpdateAccInfo extends React.Component {

    render() {
      return(
        <View style={styles.container}>
        
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={this._signOutAsync}>Sign out</Text>
            </TouchableOpacity>

        </View>
      );
    }

    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };
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
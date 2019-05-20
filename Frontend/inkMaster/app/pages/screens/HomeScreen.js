import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View
} from 'react-native';

export default class HomeScreen extends React.Component {

    static navigationOptions = {
      title: 'Welcome to inkMaster!',
    };
  
    render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={this._showMoreApp}>Take me to the gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={this._showAccSettings}>Account settings</Text>
          </TouchableOpacity>-
          
        </View>

      );
    }.
  
    _showMoreApp = () => {
      this.props.navigation.navigate('Gallery');
    };

    _showAccSettings = () => {
      this.props.navigation.navigate('UpdateAccInfo');
    };
    
}

  const styles = StyleSheet.create({
    container : {
      flexGrow: 1,
      backgroundColor:'#455a64',
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
  
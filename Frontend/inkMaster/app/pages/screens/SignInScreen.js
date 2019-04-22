import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,  
  View,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Logo from 'inkMaster/app/components/Logo.js';

import { 
  createStackNavigator, 
  createAppContainer 
} from 'react-navigation';

export default class Signin extends React.Component {

	render() {
		return(
			<View style={styles.container}>
          <Logo/>
          <View style={styles.container}>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Email"
                secureTextEntry={true}
                placeholderTextColor = "#ffffff"
                ref={(input) => this.password = input}
                />  
            <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "#ffffff"
                ref={(input) => this.password = input}
                /> 
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}onPress={this._signInAsync}>Sign in</Text>
            </TouchableOpacity>     
          </View>
          <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Don't have an account yet?</Text>
            <TouchableOpacity  onPress={this._showSignUp}>
                <Text style={styles.signupButton}> Signup</Text>
            </TouchableOpacity>
          </View>
      </View>	
      
      )
  }
  
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  _showSignUp = () => {
      this.props.navigation.navigate('SignUp');
  };

}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    backgroundColor:'#455a64',
    alignItems:'center',
    justifyContent :'center',
    paddingVertical: 10
  },
  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 7
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
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  }
});
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';

import Logo from 'inkMaster/app/components/Logo.js';

import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Signup extends React.Component {

    render() {
      return(
        <View style={styles.container}>
            <Logo/>
            <View style={styles.container}>
              <TextInput style={styles.inputBox} 
                  underlineColorAndroid='rgba(0,0,0,0)' 
                  placeholder="Name"
                  placeholderTextColor = "#ffffff"
                  selectionColor="#fff"
                  keyboardType="default"
                  onSubmitEditing={()=> this.password.focus()}
                  />
              <TextInput style={styles.inputBox} 
                  underlineColorAndroid='rgba(0,0,0,0)' 
                  placeholder="Email"
                  placeholderTextColor = "#ffffff"
                  selectionColor="#fff"
                  keyboardType="email-address"
                  onSubmitEditing={()=> this.password.focus()}
                  />
              <TextInput style={styles.inputBox} 
                  underlineColorAndroid='rgba(0,0,0,0)' 
                  placeholder="Contact"
                  placeholderTextColor = "#ffffff"
                  selectionColor="#fff"
                  keyboardType="email-address"
                  onSubmitEditing={()=> this.password.focus()}
                  />
              <TextInput style={styles.inputBox} 
                  underlineColorAndroid='rgba(0,0,0,0)' 
                  placeholder="Password"
                  secureTextEntry={true}
                  placeholderTextColor = "#ffffff"
                  ref={(input) => this.password = input}
                  />  
              <TextInput style={styles.inputBox} 
                  underlineColorAndroid='rgba(0,0,0,0)' 
                  placeholder="Confirm password"
                  secureTextEntry={true}
                  placeholderTextColor = "#ffffff"
                  ref={(input) => this.password = input}
                  /> 
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={this._showSignIn}>Sign up</Text>
              </TouchableOpacity>     
            </View>
            <View style={styles.signupTextCont}>
              <Text style={styles.signupText}>Already have an account?</Text>
              <TouchableOpacity onPress={this._showSignIn}>
                <Text style={styles.signupButton}> Sign in</Text>
              </TouchableOpacity>
            </View>
        </View>
      );
	  }

  _showSignIn = () => {
      this.props.navigation.navigate('SignIn');
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
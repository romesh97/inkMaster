import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StatusBar,
  Alert,
  ToastAndroid
} from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

import firebase from 'react-native-firebase';

import Logo from "inkMaster/app/components/Logo.js";

export default class Signin extends React.Component {

  static navigationOptions = {
    title: "Welcome to inkMaster",
    headerStyle: {
      backgroundColor: "#000000"
    },
    headerTintColor: "#ffffff"
  };


    constructor(props){
      super(props);
      this.state = {
        emailText : '',
        passwordText : '',
        loading:false,
        isLoggedIn: false,
        errorText: ''
      }
      this._signIn = this._signIn.bind(this);
      const navigation = this.props.navigation;
    }

	render() {
		return(
			<View style={styles.container}>
          <StatusBar backgroundColor="#979A9A" barStyle="light-content" />
          <View style={styles.container}>
            <TextInput style={styles.inputBox} 
                  underlineColorAndroid='rgba(0,0,0,0)' 
                  placeholder="Email"
                  placeholderTextColor = "#ffffff"
                  selectionColor="#fff"
                  placeholderTextColor="rgba(0,0,0,0.9)"
                  keyboardType="email-address"
                  returnKeyType="next"
                  onChangeText={text=>this.setState({emailText: text})}
                  />  
            <TextInput style={styles.inputBox} 
                  underlineColorAndroid='rgba(0,0,0,0)' 
                  placeholder="Password"
                  secureTextEntry={true}
                  placeholderTextColor = "#ffffff"
                  placeholderTextColor="rgba(0,0,0,0.9)"
                  keyboardType="default"
                  returnKeyType="go"
                  autoCorrect={false}
                  onChangeText={text=>this.setState({passwordText: text})}
                  />  
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}onPress={this._signIn}>Sign in</Text>
            </TouchableOpacity>     
          </View>
          <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>New to inkMaster?</Text>
            <TouchableOpacity  onPress={this._showSignUp}>
                <Text style={styles.signupButton}> Signup</Text>
            </TouchableOpacity>
          </View>
      </View>	
      
      )
  }
  
  _signIn = async () => {
      // await AsyncStorage.clear();
      this.setState({loading: true});
      const {emailText, passwordText} = this.state;
      if(emailText == '' || passwordText == '') {
        ToastAndroid.show('Please fill in email and password', ToastAndroid.SHORT);
      } else {
      firebase.auth().signInWithEmailAndPassword(emailText, passwordText)
      .then(this.setState({
          errorText: 'Success',
          loading: false,
          emailText: '',
          passwordText: ''
        })
      )
      .catch(error => {
            switch(error.code) {
                case 'auth/user-not-found':
                ToastAndroid.show('You havent signed up yet', ToastAndroid.SHORT);
                break;
                case 'auth/invalid-email':
                ToastAndroid.show('Please enter a valid email address', ToastAndroid.SHORT);
                break;
                case 'auth/wrong-password':
                ToastAndroid.show('Please enter the correct password', ToastAndroid.SHORT);
                break;
            }
        }
      )
      
      const params = this.props.navigation.state.params;
        if (params.type == 'Artist') 
            this.props.navigation.navigate('ArtistApp')
        else if (params.type == 'Customer')
            this.props.navigation.navigate('CustomerApp')
    }
  }

  _showSignUp = () => {
    this.props.navigation.navigate("SignUp");
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCD1D1",
    flexDirection: "column",
    padding: 20,
    justifyContent: "center"
  },
  inputBox: {
    height: 40,
    backgroundColor: "rgba(32,53,60,0.2)",
    color: "#FFFFFF",
    paddingHorizontal: 10,
    marginBottom: 20
  },
  button: {
    backgroundColor: "#641E16",
    paddingVertical: 15,
    marginBottom: 20
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 18
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row"
  },
  signupText: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 16
  },
  signupButton: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "500"
  }
});

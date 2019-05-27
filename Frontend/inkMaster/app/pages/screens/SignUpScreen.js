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

import Logo from "inkMaster/app/components/Logo.js";

import AsyncStorage from "@react-native-community/async-storage";

import firebase from 'react-native-firebase';

export default class Signup extends React.Component {

  static navigationOptions = {
    title: "Let's Get Started",
    headerStyle: {
      backgroundColor: "#000000"
    },
    headerTintColor: "#ffffff"
  };

constructor(props){
  super(props);
  this.state = {
    usernameText : '',
    emailText : '',
    contactText : '',
    passwordText : '',
    loading:false,
    isLoggedIn: false,
    signedUp: false,
    errorText: ''
  }
  this.artists = firebase.firestore().collection('artists');
  this.customers = firebase.firestore().collection('customers');
  this._signUp = this._signUp.bind(this);
}

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#979A9A" barStyle="light-content" />
        <View style={styles.container}>
            <View style={styles.container}>
              <TextInput style={styles.inputBox} 
                  underlineColorAndroid='rgba(0,0,0,0)' 
                  placeholder="Username"
                  selectionColor="#fff"
                  placeholderTextColor="rgba(0,0,0,0.5)"
                  keyboardType="default"
                  returnKeyType="next"
                  autoCorrect={false}
                  onChangeText={text=>this.setState({usernameText: text})}
                  />
              <TextInput style={styles.inputBox} 
                  underlineColorAndroid='rgba(0,0,0,0)' 
                  placeholder="Email"
                  selectionColor="#fff"
                  placeholderTextColor="rgba(0,0,0,0.5)"
                  keyboardType="email-address"
                  returnKeyType="next"
                  autoCorrect={false}
                  onChangeText={text=>this.setState({emailText: text})}
                  />
              <TextInput style={styles.inputBox} 
                  underlineColorAndroid='rgba(0,0,0,0)' 
                  placeholder="Contact"
                  selectionColor="#fff"
                  placeholderTextColor="rgba(0,0,0,0.5)"
                  keyboardType="phone-pad"
                  returnKeyType="next"
                  autoCorrect={false}
                  onChangeText={text=>this.setState({contactText: text})}
                  />
              <TextInput style={styles.inputBox} 
                  underlineColorAndroid='rgba(0,0,0,0)' 
                  placeholder="Password"
                  secureTextEntry={true}
                  placeholderTextColor="rgba(0,0,0,0.5)"
                  keyboardType="default"
                  returnKeyType="next"
                  autoCorrect={false}
                  onChangeText={text=>this.setState({passwordText: text})}
                  />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={this._signUp}>Sign up</Text>
              </TouchableOpacity>     
            </View>
            <View style={styles.signupTextCont}>
              <Text style={styles.signupText}>Already have an account?</Text>
              <TouchableOpacity onPress={this._showSignIn}>
                <Text style={styles.signupButton}> Sign in</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }

  _showSignIn = () => {
    this.props.navigation.navigate("SignIn");
  };

  _signUp = async () => {
      const response = await AsyncStorage.getItem('AccountType');
    this.setState({loading: true});
      const {emailText, passwordText} = this.state;
      if(emailText == '' || passwordText == '') {
        ToastAndroid.show('Please fill in email and password', ToastAndroid.SHORT);
      } else {
        firebase.auth().createUserWithEmailAndPassword(emailText, passwordText)
        .then(
          this.setState({
          errorText: 'Success',
          loading: true,
          emailText: '',
          passwordText: '',
          usernameText: '',
          contactText: '',
          signedUp: true
        })
        )
        .catch(error => {
            switch(error.code) {
                case 'auth/email-already-in-use':
                  ToastAndroid.show('You have already signed up', ToastAndroid.SHORT);
                break;
                case 'auth/invalid-email':
                  ToastAndroid.show('Please enter a valid email address', ToastAndroid.SHORT);
                break;
          }
        }
       )
      }      

      if(this.signedUp) {
          if(response == 'Customer') {
            this.customers.add({
                username: this.state.usernameText,
                email: this.state.emailText,
                contact: this.state.contactText
            }).then(
              this.setState({
                errorText: 'Success',
                loading: true,
                emailText: '',
                passwordText: '',
                usernameText: '',
                contactText: ''
              })
            ).catch(
              this.setState({
                errorText:'Success',
                loading: true,
                emailText: '',
                passwordText: '',
                usernameText: '',
                contactText: ''
              })
            )
          }  
          else if(response == 'Artist'){
            this.artists.add({
                username: this.state.usernameText,
                email: this.state.emailText,
                contact: this.state.contactText
            }).then(
              this.setState({
                errorText: 'Success',
                loading: true,
                emailText: '',
                passwordText: '',
                usernameText: '',
                contactText: ''
              })
            ).catch(
              this.setState({
                errorText:'Success',
                loading: true,
                emailText: '',
                passwordText: '',
                usernameText: '',
                contactText: ''
              })
            )
          } 
          
      }
  }

}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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

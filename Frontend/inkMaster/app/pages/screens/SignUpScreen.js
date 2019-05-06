import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StatusBar,
  TouchableOpacity
} from "react-native";

import Logo from "inkMaster/app/components/Logo.js";

// import firebase from 'firebase';

import firebase from 'react-native-firebase';

export default class Signup extends React.Component {

  static navigationOptions = {
    title: "Let's Get Started",
    headerStyle: {
      backgroundColor: "#000000"
    },
    headerTintColor: "#ffffff"
  };
  
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('type', 'DEFAULT_TYPE'),
  //   };
  // };

constructor(props){
  super(props);
  this.state = {
    usernameText : '',
    emailText : '',
    contactText : '',
    passwordText : '',
    loading:false,
    isLoggedIn: false,
    errorText: ''
  }
  this.artists = firebase.firestore().collection('artists');
  this.customers = firebase.firestore().collection('customers');
  this._signUp = this._signUp.bind(this);
}

    // componentWillMount() {
    //   var config = {
    //     apiKey: "AIzaSyCGru61A858SfGMVhhbcvN8J-rrCRueWwU",
    //     authDomain: "inkmasterapps.firebaseapp.com",
    //     databaseURL: "https://inkmasterapps.firebaseio.com",
    //     projectId: "inkmasterapps",
    //     storageBucket: "inkmasterapps.appspot.com",
    //     messagingSenderId: "987937825635"
    //   };
    //   firebase.initializeApp(config);
    //   firebase.auth().onAuthStateChanged(user=>{
    //     if(user) {
    //       this.setState({isLoggedIn: !this.state.isLoggedIn})
    //     } else {
    //       this.setState({isLoggedIn: false})
    //     }
    // })
    // }


  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#979A9A" barStyle="light-content" />
        <Logo />
        <View style={styles.container}>
            <Logo/>
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
    // Alert.alert(
    //     'Registration Nearly Complete',
    //     'Are you sure you would like to submit this form?',
    //     [
    //       {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    //       {text: 'OK', onPress: () => {
    //         console.log('Signup Completed!')
    //               //signup function
    //         this.props.navigation.navigate('SignIn');
    //       }},
    //     ],
    //       { cancelable: false }
    //     )
    this.setState({loading: true});
      const {emailText, passwordText} = this.state;
      firebase.auth().createUserWithEmailAndPassword(emailText, passwordText)
      .then(this.setState({
        errorText: 'Success',
        loading: true,
        emailText: '',
        passwordText: '',
        usernameText: '',
        contactText: '',
        signedUp: true
      }))
      .catch(this.setState({
        errorText: 'Authentication failed',
        loading: true,
        emailText: '',
        passwordText: '',
        usernameText: '',
        contactText: '',
      }))

      if(signedUp) {
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
          
        this.props.navigation.navigate('SignIn');

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

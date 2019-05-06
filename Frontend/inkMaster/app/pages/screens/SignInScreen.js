import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StatusBar
} from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

import firebase from 'firebase';
import Logo from "inkMaster/app/components/Logo.js";

import { createStackNavigator, createAppContainer } from "react-navigation";

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
      // const params = this.props.navigation.state.params;
      const navigation = this.props.navigation;
    }
  
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('type', 'DEFAULT_TYPE'),
  //   };
  // };

    // componentWillMount() {
    //   var config = {
    //     apiKey: "AIzaSyAtJYvnYTKS4FQaI309LSHwOXfKu6ZnplE",
    //     authDomain: "inkmastertattooapp.firebaseapp.com",
    //     databaseURL: "https://inkmastertattooapp.firebaseio.com",
    //     projectId: "inkmastertattooapp",
    //     storageBucket: "inkmastertattooapp.appspot.com",
    //     messagingSenderId: "211941742756"
    //   };
    //   firebase.initializeApp(config);
    //   firebase.auth().onAuthStateChanged(user=>{
    //       if(user) {
    //         this.setState({isLoggedIn: !this.state.isLoggedIn})
    //       } else {
    //         this.setState({isLoggedIn: false})
    //       }
    //   })
    // }

	render() {
		return(
			<View style={styles.container}>
          <StatusBar backgroundColor="#979A9A" barStyle="light-content" />
          <Logo/>
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
  
  _signIn () {
      this.setState({loading: true});
      const {emailText, passwordText} = this.state;
      firebase.auth().signInWithEmailAndPassword(emailText, passwordText)
      .then(
        this.setState({
          errorText: 'Success',
          loading: false,
          emailText: '',
          passwordText: ''
          // if (params.type == 'Artist') 
          //     navigation.navigate('ArtistApp')
          // else if (params.type == 'Customer')
          //   navigation.navigate('CustomerApp')
        })
        // _signInNavigate();
      )
      .catch(this.setState({
        errorText: 'Authentication failed',
        loading: false,
        emailText: '',
        passwordText: ''
      }))
      
      const params = this.props.navigation.state.params;
        if (params.type == 'Artist') 
            this.props.navigation.navigate('ArtistApp')
        else if (params.type == 'Customer')
            this.props.navigation.navigate('CustomerApp')
  };

    _signInNavigate() {
        if (params.type == 'Artist') 
            navigation.navigate('ArtistApp')
        else if (params.type == 'Customer')
          navigation.navigate('CustomerApp')
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
  signinTextCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row"
  },
  signinText: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 16
  },
  signinButton: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "500"
  }
});

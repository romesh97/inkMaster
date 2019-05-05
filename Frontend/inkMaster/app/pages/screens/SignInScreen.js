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

import firebase from 'firebase';

export default class Signin extends React.Component {

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
  
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('type', 'DEFAULT_TYPE'),
    };
  };

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
          <Logo/>
          <View style={styles.container}>
            <TextInput style={styles.inputBox} 
                  underlineColorAndroid='rgba(0,0,0,0)' 
                  placeholder="Email"
                  placeholderTextColor = "#ffffff"
                  selectionColor="#fff"
                  keyboardType="email-address"
                  onChangeText={text=>this.setState({emailText: text})}
                  />  
            <TextInput style={styles.inputBox} 
                  underlineColorAndroid='rgba(0,0,0,0)' 
                  placeholder="Password"
                  secureTextEntry={true}
                  placeholderTextColor = "#ffffff"
                  onChangeText={text=>this.setState({passwordText: text})}
                  />  
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}onPress={this._signIn}>Sign in</Text>
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
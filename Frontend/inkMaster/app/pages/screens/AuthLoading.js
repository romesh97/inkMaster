import React, { Component } from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View,
  StyleSheet,
} from 'react-native';
// import firebase from 'firebase';

import firebase from 'react-native-firebase';

import Firebase from 'inkMaster/app/config/firebase.js';
import AsyncStorage from '@react-native-community/async-storage';

export default class AuthLoadingScreen extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        user: null,
        isLoggedIn: false
      }
      this.unsubscriber = null;
      // this._bootstrapAsync();
    }

    // /**
    // * Listen for any auth state changes and update component state
    // */
    // componentDidMount() {
    //   this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
    //     this.setState({ user });
    //   });
    // }

    // componentWillUnmount() {
    //   if (this.unsubscriber) {
    //     this.unsubscriber();
    //   }
    // }
    
    _bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    }

    // componentWillMount() {
    //   const navigation = this.props.navigation;
    //   // var config = {
    //   //   apiKey: "AIzaSyAtJYvnYTKS4FQaI309LSHwOXfKu6ZnplE",
    //   //   authDomain: "inkmastertattooapp.firebaseapp.com",
    //   //   databaseURL: "https://inkmastertattooapp.firebaseio.com",
    //   //   projectId: "inkmastertattooapp",
    //   //   storageBucket: "inkmastertattooapp.appspot.com",
    //   //   messagingSenderId: "211941742756"
    //   // };
    //   // firebase.initializeApp(config);
    //   // !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
    //   firebase.auth().onAuthStateChanged(user=>{
    //       if(user) {
    //         this.setState({isLoggedIn: !this.state.isLoggedIn});
    //         navigation.navigate('App');
    //       } else {
    //         this.setState({isLoggedIn: false})
    //       }
    //   })

      
            // if(this.state.isLoggedIn)
            //   this.props.navigation.navigate('App');
    // }

    
     componentWillMount = async () => {
      const response = await AsyncStorage.getItem('AccountType');
      this.authListener = firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.setState({isLoggedIn: !this.state.isLoggedIn});
          if(response == 'Customer') {
            // this.props.navigation.navigate('CustomerApp', { name:user.displayName });
            this.props.navigation.navigate('CustomerApp');
          }  
          else if(response == 'Artist'){
            // this.props.navigation.navigate('ArtistApp', { name:user.displayName });
            this.props.navigation.navigate('ArtistApp');
          }  
        } else {
          this.setState({isLoggedIn: false});
          this.props.navigation.navigate('Auth');
        }
      });
    }

  // componentDidMount() {
  //   const navigation = this.props.navigation;
  //     firebase.auth().onAuthStateChanged(user=>{
  //         if(user) {
  //           this.setState({isLoggedIn: !this.state.isLoggedIn});
  //           navigation.navigate('App');
  //         } else {
  //           this.setState({isLoggedIn: false})
  //         }
  //     })
  //   const navigation = this.props.navigation;
  //   firebase.auth().onAuthStateChanged(function(user) {
  //     if (user) {
  //       var displayName = user.displayName;
  //       var email = user.email;
  //       var emailVerified = user.emailVerified;
  //       var photoURL = user.photoURL;
  //       var isAnonymous = user.isAnonymous;
  //       var uid = user.uid;
  //       var providerData = user.providerData;
  //       // this.setState({isLoggedIn: !this.state.isLoggedIn});
  //       navigation.navigate('App');
  //     } else {
  //       // this.setState({isLoggedIn: false})
  //       // this.props.navigation.navigate('Auth');
  //       navigation.navigate('Auth');
  //     }
  //   });
  // }

  render() {

      return (
        <View style={styles.container}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );

  }
  
}

const styles = StyleSheet.create({
    container : {
      flexGrow: 1,
      alignItems:'center',
      justifyContent :'center'
    }
  });

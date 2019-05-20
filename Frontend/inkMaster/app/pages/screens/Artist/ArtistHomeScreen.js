import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View
} from 'react-native';

import firebase from 'firebase';

export default class ArtistHomeScreen extends React.Component {

    // static navigationOptions = {
    //   title: 'Welcome to inkMaster - Artist!',
    // };
      constructor() {
        super();
        this.unsubscriber = null;
        this.state = {
          user: null,
        };
      }

      /**
      * Listen for any auth state changes and update component state
      */
      componentDidMount() {
        this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
          this.setState({ user });
        });
      }

      componentWillUnmount() {
        if (this.unsubscriber) {
          this.unsubscriber();
        }
      }


    // state = { currentUser: null }

    // componentDidMount() {
    //   const { currentUser } = firebase.auth()

    //   this.setState({ currentUser })
    // }
    
  
    render() {
      // const { currentUser } = this.state
      return (
        <View style={styles.container}>
          <Text>
            Hi {this.state.user.email}!
          </Text>
          <Text>
            Artist
          </Text>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={this._showGallery}>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={this._showImageUpload}>Upload tattoo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={this._showAccSettings}>Account settings</Text>
          </TouchableOpacity>
        </View>

      );
    }
  
    _showGallery = () => {
      this.props.navigation.navigate('Gallery');
    };

    _showScheduleAppointments = () => {
      this.props.navigation.navigate('Appointments');
    };

    _showAccSettings = () => {
      this.props.navigation.navigate('Settings');
    };
    
}

  const styles = StyleSheet.create({
    container : {
      flexGrow: 1,
      backgroundColor:'#EBEDEF',
      alignItems:'center',
      justifyContent :'center'
    },

    // button: {
    //   width:300,
    //   backgroundColor:'#1c313a',
    //   borderRadius: 25,
    //   marginVertical: 10,
    //   paddingVertical: 13
    // },
    // buttonText: {
    //   fontSize:16,
    //   fontWeight:'500',
    //   color:'#ffffff',
    //   textAlign:'center'
    // },
    button: {
      width: 180,
      backgroundColor: "#641E16",
      borderColor: "black",
      borderRadius: 10,
      marginVertical: 10,
      paddingVertical: 13
    },
    buttonText: {
      fontSize: 16,
      fontWeight: "500",
      color: "#ffffff",
      textAlign: "center"
    }
  });
  
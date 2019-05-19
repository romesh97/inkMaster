import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View
} from 'react-native';

import firebase from 'firebase';

export default class CustomerHomeScreen extends React.Component {

    // static navigationOptions = {
    //   title: 'Welcome to inkMaster - Customer!',
    // };
    state = { currentUser: null }

    componentDidMount() {
      const { currentUser } = firebase.auth()

      this.setState({ currentUser })
    }
  
    render() {
      const { currentUser } = this.state
      return (
        <View style={styles.container}>
          <Text>
            Hi {currentUser && currentUser.email}!
          </Text>
          <Text>
            Customer
          </Text>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={this._showMoreApp}>Show me more of the app</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={this._showAccSettings}>Account settings</Text>
          </TouchableOpacity>
        </View>

      );
    }
  
    _showMoreApp = () => {
      this.props.navigation.navigate('Gallery');
    };

    _showAccSettings = () => {
      this.props.navigation.navigate('Settings');
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
  
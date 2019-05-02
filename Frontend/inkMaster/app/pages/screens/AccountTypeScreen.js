import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity 
} from 'react-native';

export default class Home extends React.Component {

  static navigationOptions = {
    title: 'Choose an account to continue!',
  };

  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText} onPress={this._showSignInArtist}>Artist</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText} onPress={this._showSignInCustomer}>Customer</Text>
          </TouchableOpacity> 
      </View>
    );
  }

  _showSignInArtist = () => {
      this.props.navigation.navigate('SignIn', { type:'Artist' });
  };

  _showSignInCustomer = () => {
      this.props.navigation.navigate('SignIn', { type:'Customer' });
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

import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity 
} from 'react-native';

export default class Gallery extends React.Component {

  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sample gallery</Text>
          </TouchableOpacity>
      </View>
    );
  }

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

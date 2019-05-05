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
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#979A9A" barStyle="light-content" />
        <Logo />
        <View style={styles.container}>
          <TextInput
            style={styles.inputBox}
            placeholder="Enter email"
            placeholderTextColor="rgba(0,0,0,0.9)"
            keyboardType="email-address"
            returnKeyType="next"
            autoCorrect={false}
            onSubmitEditing={() => this.refs.password.focus()}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="Enter password"
            placeholderTextColor="rgba(0,0,0,0.9)"
            keyboardType="default"
            returnKeyType="go"
            autoCorrect={false}
            secureTextEntry={true}
            ref={"password"}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={this._signInAsync}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signinTextCont}>
          <Text style={styles.signinText}>New to inkMaster?</Text>
          <TouchableOpacity onPress={this._showSignUp}>
            <Text style={styles.signinButton}> Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("App");
  };

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

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
  TouchableOpacity
} from "react-native";

import Logo from "inkMaster/app/components/Logo.js";

import { createStackNavigator, createAppContainer } from "react-navigation";

export default class Signup extends React.Component {
  static navigationOptions = {
    title: "Let's Get Started",
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
            placeholder="Name"
            placeholderTextColor="rgba(0,0,0,0.5)"
            keyboardType="default"
            returnKeyType="next"
            autoCorrect={false}
            onSubmitEditing={() => this.refs.email.focus()}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="Email"
            placeholderTextColor="rgba(0,0,0,0.5)"
            keyboardType="email-address"
            returnKeyType="next"
            autoCorrect={false}
            ref={"email"}
            onSubmitEditing={() => this.refs.contact.focus()}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="Contact"
            placeholderTextColor="rgba(0,0,0,0.5)"
            keyboardType="phone-pad"
            returnKeyType="next"
            autoCorrect={false}
            ref={"contact"}
            onSubmitEditing={() => this.refs.password.focus()}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="Password"
            placeholderTextColor="rgba(0,0,0,0.5)"
            keyboardType="default"
            returnKeyType="next"
            autoCorrect={false}
            secureTextEntry={true}
            ref={"password"}
            onSubmitEditing={() => this.refs.cpassword.focus()}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="Confirm password"
            placeholderTextColor="rgba(0,0,0,0.5)"
            keyboardType="default"
            returnKeyType="go"
            autoCorrect={false}
            secureTextEntry={true}
            ref={"cpassword"}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={this._showSignIn}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already have an account?</Text>
          <TouchableOpacity onPress={this._showSignIn}>
            <Text style={styles.signupButton}> Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _showSignIn = () => {
    this.props.navigation.navigate("SignIn");
  };
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

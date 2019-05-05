import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

export default class Home extends React.Component {
  static navigationOptions = {
    title: "Choose an account to continue!",
    headerStyle: {
      backgroundColor: "#000000"
    },
    headerTintColor: "#ffffff"
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.primaryText}>I'm a tattoo enthusiast</Text>
          <Text style={styles.secondaryText}>
            Browse tattoos, preview a tattoo on your skin, book your next tattoo
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={this._showSignInCustomer}>
              Choose
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.primaryText}>I'm a tattoo artist</Text>
          <Text style={styles.secondaryText}>
            Showcase your art and get bookings from clients
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={this._showSignInArtist}>
              Choose
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _showSignInArtist = async () => {
    await AsyncStorage.setItem("AccountType", "Artist");
    this.props.navigation.navigate("SignIn", { type: "Artist" });
  };

  _showSignInCustomer = async () => {
    await AsyncStorage.setItem("AccountType", "Customer");
    this.props.navigation.navigate("SignIn", { type: "Customer" });
  };
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#EBEDEF",
    alignItems: "center",
    justifyContent: "center"
  },
  primaryText: {
    fontSize: 25,
    fontWeight: "400",
    fontFamily: "sans-serif-thin",
    color: "black",
    textAlign: "center",
    paddingTop: 18
  },
  secondaryText: {
    fontSize: 16,
    fontWeight: "300",
    color: "black",
    textAlign: "center",
    padding: 10
  },
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

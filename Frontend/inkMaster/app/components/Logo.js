import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 200, height: 145 }}
          source={require("inkMaster/app/images/LogoReal.png")}
        />
        <Text style={styles.logoText}>Welcome to inkMaster</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 20
  },
  logoText: {
    marginVertical: 10,
    fontSize: 18,
    color: "rgba(255, 255, 255, 0.7)"
  }
});

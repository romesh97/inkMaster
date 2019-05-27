import React, { Component } from "react";
import { View, 
StyleSheet, 
Text, 
ScrollView, 
TouchableOpacity, 
Linking } from "react-native";

export default class ProfilePages extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
      <Text style={styles.primaryText}>Top Tattoo Parlors in Sri Lanka</Text>
      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText} 
      onPress={() => Linking.openURL("https://soul-ink-studio.business.site")}>
      Soul Ink Studio
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText} 
      onPress={() => Linking.openURL("http://tattooparadise.lk")}>
      Tattoo Paradise
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText} 
      onPress={() => Linking.openURL("http://www.tattoomachan.lk")}>
      Tattoo Machan
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText} 
      onPress={() => Linking.openURL("https://www.facebook.com/mrpierce.international/?rf=202634299777240")}>
      MrPierce Studios International
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText} 
      onPress={() => Linking.openURL("https://www.facebook.com/alokatattoos/")}>
      Aloka Tattoos
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText} 
      onPress={() => Linking.openURL("https://shashees-gallery-boutique.business.site")}>
      Shashee Gallery Boutique
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText} 
      onPress={() => Linking.openURL("http://sampathtattoos.blogspot.com")}>
      Sampath Tattoo
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText} 
      onPress={() => Linking.openURL("http://tattoobabu.com")}>
      Tattoo Babu Body Arts and Salon
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText} 
      onPress={() => Linking.openURL("https://www.facebook.com/AdamandInktattoos/")}>
      Adam and Ink Tattoo Studio
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText} 
      onPress={() => Linking.openURL("https://www.facebook.com/dimmu.fernando/")}>
      Dimmu Fernando Tattoos
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText} 
      onPress={() => Linking.openURL("https://www.facebook.com/tattooceylon/")}>
      Tattoo Ceylon
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText} 
      onPress={() => Linking.openURL("https://www.facebook.com/ColomboTattooHut")}>
      Colombo Tattoo Hut Sri Lanka Flash Ink
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText} 
      onPress={() => Linking.openURL("https://www.facebook.com/West-Coast-Tattoo-Studio-197025727107028/")}>
      West Coast Tattoo Studio
      </Text>
      </TouchableOpacity>
      </ScrollView>
      </View>  
    );
  }
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
    marginVertical: 10,
    paddingVertical: 13
  },
  button: {
    width: 250,
    backgroundColor: "#641E16",
    borderColor: "black",
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 13,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  }
});
import React, { Component } from "react";
import { StyleSheet, View, Dimensions, Image, Text } from "react-native";

const Screen = Dimensions.get("window");

export const Card = () => (
  <View style={styles.content}>
    <Text style={styles.panelTitle}>San Francisco Airport</Text>
    <Text style={styles.panelSubtitle}>
      International Airport - 40 miles away
    </Text>
    <Image
      style={styles.photo}
      source={require("../assets/aircraft-wing.jpg")}
    />
    <View style={styles.panelButton}>
      <Text style={styles.panelButtonTitle}>Directions</Text>
    </View>
    <View style={styles.panelButton}>
      <Text style={styles.panelButtonTitle}>Search Nearby</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  content: {
    margin: 20,
    padding: 20,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  panelTitle: {
    fontSize: 27,
    height: 35
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10
  },
  panelButton: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#de6d77",
    alignItems: "center",
    marginVertical: 10
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white"
  },
  photo: {
    width: Screen.width - 80,
    height: 190,
    marginBottom: 20
  }
});

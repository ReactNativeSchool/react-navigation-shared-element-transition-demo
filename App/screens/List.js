import React from "react";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import { Transition } from "react-navigation-fluid-transitions";

const Screen = Dimensions.get("window");
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
    width: Screen.width,
    height: 190,
    marginBottom: 20,
    marginLeft: -20
  }
});

export const Card = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate("Details")}>
    <View style={styles.content}>
      <Transition shared="info">
        <View>
          <Text style={styles.panelTitle}>San Francisco Airport</Text>
          <Text style={styles.panelSubtitle}>
            International Airport - 40 miles away
          </Text>
        </View>
      </Transition>

      <View style={{ overflow: "hidden" }}>
        <Transition shared="image">
          <Image
            style={styles.photo}
            source={require("../assets/aircraft-wing.jpg")}
          />
        </Transition>
      </View>
      <View style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Directions</Text>
      </View>
      <View style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Search Nearby</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default ({ navigation }) => (
  <SafeAreaView>
    <ScrollView>
      <Card navigation={navigation} />
      <Card navigation={navigation} />
      <Card navigation={navigation} />
      <Card navigation={navigation} />
      <Card navigation={navigation} />
    </ScrollView>
  </SafeAreaView>
);

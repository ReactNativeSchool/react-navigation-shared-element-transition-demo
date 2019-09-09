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
const IMAGE_SIZE = Screen.width * 0.25;
const styles = StyleSheet.create({
  content: {
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  row: {
    flexDirection: "row",
    flex: 1
  },
  infoBlock: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1
  },
  panelTitle: {
    fontSize: 22,
    marginBottom: 4
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray"
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  panelButton: {
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: "#de6d77",
    alignItems: "center",
    marginVertical: 10,
    flex: 1,
    margin: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  panelButtonTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white"
  },
  photo: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2
  }
});

export const Card = ({ navigation, index }) => (
  <TouchableOpacity onPress={() => navigation.navigate("Details", { index })}>
    <View style={styles.content}>
      <View style={styles.row}>
        <Transition shared={`image-${index}`}>
          <Image
            style={styles.photo}
            source={require("../assets/aircraft-wing.jpg")}
          />
        </Transition>

        <Transition shared={`info-${index}`}>
          <View style={styles.infoBlock}>
            <Text style={styles.panelTitle}>San Francisco Airport</Text>
            <Text style={styles.panelSubtitle}>
              International Airport - 40 miles away
            </Text>
          </View>
        </Transition>
      </View>

      <View style={styles.buttonRow}>
        <View style={styles.panelButton}>
          <Text style={styles.panelButtonTitle}>Directions</Text>
        </View>
        <View style={styles.panelButton}>
          <Text style={styles.panelButtonTitle}>Search Nearby</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

export default ({ navigation }) => (
  <SafeAreaView>
    <ScrollView>
      <Card navigation={navigation} index={0} />
      <Card navigation={navigation} index={1} />
      <Card navigation={navigation} index={2} />
      <Card navigation={navigation} index={3} />
      <Card navigation={navigation} index={4} />
      <Card navigation={navigation} index={5} />
      <Card navigation={navigation} index={6} />
      <Card navigation={navigation} index={7} />
    </ScrollView>
  </SafeAreaView>
);

import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Transition } from "react-navigation-fluid-transitions";

const Screen = Dimensions.get("window");
const styles = StyleSheet.create({
  content: {},
  infoContainer: {
    margin: 20,
    marginBottom: 0
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
  photo: {
    width: Screen.width,
    height: 190
  },
  block: {
    margin: 20
  },
  blockText: {
    fontSize: 14,
    color: "gray",
    marginBottom: 10
  }
});

export default ({ navigation }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={styles.content}>
      <Transition shared="image">
        <Image
          style={styles.photo}
          source={require("../assets/aircraft-wing.jpg")}
        />
      </Transition>
      <View style={styles.infoContainer}>
        <Transition shared="info">
          <View>
            <Text style={styles.panelTitle}>San Francisco Airport</Text>
            <Text style={styles.panelSubtitle}>
              International Airport - 40 miles away
            </Text>
          </View>
        </Transition>
      </View>
      <Transition appear="right" disappear="scale">
        <TouchableOpacity onPress={() => navigation.pop()}>
          <View style={styles.block}>
            <Text style={styles.blockText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Malesuada fames ac turpis egestas maecenas pharetra convallis
              posuere morbi. Lacus viverra vitae congue eu consequat ac felis
              donec et. Amet consectetur adipiscing elit pellentesque habitant
              morbi. Molestie at elementum eu facilisis sed odio. Ac feugiat sed
              lectus vestibulum mattis ullamcorper velit. Vulputate eu
              scelerisque felis imperdiet proin fermentum leo vel. Varius sit
              amet mattis vulputate enim nulla. Id consectetur purus ut faucibus
              pulvinar elementum integer enim neque. Sed cras ornare arcu dui
              vivamus arcu. Accumsan tortor posuere ac ut consequat semper
              viverra. Viverra tellus in hac habitasse platea dictumst
              vestibulum. Amet aliquam id diam maecenas. Commodo quis imperdiet
              massa tincidunt. Sit amet mauris commodo quis imperdiet massa
              tincidunt nunc. Pretium fusce id velit ut tortor pretium viverra.
              Nisl condimentum id venenatis a condimentum vitae.
            </Text>

            <Text style={styles.blockText}>
              Faucibus ornare suspendisse sed nisi lacus sed. Dictum fusce ut
              placerat orci nulla pellentesque. Quis vel eros donec ac odio
              tempor. Nisl pretium fusce id velit ut tortor pretium viverra
              suspendisse. Morbi non arcu risus quis varius quam. Erat
              pellentesque adipiscing commodo elit at imperdiet dui accumsan.
              Pellentesque habitant morbi tristique senectus. Sed adipiscing
              diam donec adipiscing tristique risus nec feugiat. Aliquam sem
              fringilla ut morbi tincidunt augue interdum velit euismod. Proin
              nibh nisl condimentum id venenatis.
            </Text>

            <Text style={styles.blockText}>
              Cras pulvinar mattis nunc sed blandit libero. Felis imperdiet
              proin fermentum leo vel orci. Amet mauris commodo quis imperdiet
              massa tincidunt nunc pulvinar. Diam ut venenatis tellus in metus.
              Enim diam vulputate ut pharetra sit amet aliquam id diam. Viverra
              orci sagittis eu volutpat odio facilisis mauris sit. Vitae proin
              sagittis nisl rhoncus. At imperdiet dui accumsan sit. Tortor at
              risus viverra adipiscing. Pulvinar proin gravida hendrerit lectus.
              Arcu cursus vitae congue mauris. Varius duis at consectetur lorem
              donec. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper
              malesuada proin. Elit at imperdiet dui accumsan sit amet. Nullam
              eget felis eget nunc. Varius morbi enim nunc faucibus a
              pellentesque sit.
            </Text>

            <Text style={styles.blockText}>
              Morbi enim nunc faucibus a pellentesque sit amet porttitor. Tortor
              at risus viverra adipiscing at. Urna neque viverra justo nec
              ultrices dui. Porttitor massa id neque aliquam vestibulum morbi.
              Convallis tellus id interdum velit laoreet id donec ultrices.
              Risus nec feugiat in fermentum. Blandit volutpat maecenas volutpat
              blandit aliquam etiam erat. Sed viverra ipsum nunc aliquet
              bibendum enim. Id porta nibh venenatis cras sed. Ullamcorper sit
              amet risus nullam. Pretium nibh ipsum consequat nisl vel pretium
              lectus quam id. Maecenas volutpat blandit aliquam etiam. Facilisis
              gravida neque convallis a cras semper auctor neque vitae.
              Elementum nibh tellus molestie nunc. Non tellus orci ac auctor
              augue mauris augue. Augue mauris augue neque gravida in. Duis at
              consectetur lorem donec massa sapien faucibus et. Viverra justo
              nec ultrices dui sapien eget mi proin.
            </Text>

            <Text style={styles.blockText}>
              Sit amet commodo nulla facilisi nullam vehicula ipsum a. Sagittis
              aliquam malesuada bibendum arcu vitae elementum. Sit amet nisl
              purus in mollis nunc. Id diam vel quam elementum pulvinar etiam
              non quam lacus. Neque sodales ut etiam sit amet nisl purus in.
              Scelerisque viverra mauris in aliquam sem fringilla ut. Massa
              sapien faucibus et molestie ac feugiat sed lectus. Lobortis
              elementum nibh tellus molestie nunc non. Arcu bibendum at varius
              vel pharetra vel turpis. Tortor id aliquet lectus proin. Nulla
              porttitor massa id neque aliquam. Netus et malesuada fames ac
              turpis. Morbi tincidunt augue interdum velit euismod in
              pellentesque massa. Suspendisse in est ante in nibh mauris cursus.
              Velit dignissim sodales ut eu sem integer vitae justo eget.
            </Text>
          </View>
        </TouchableOpacity>
      </Transition>
    </ScrollView>
  </SafeAreaView>
);

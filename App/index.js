import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { createAppContainer } from "react-navigation";
import { createFluidNavigator } from "react-navigation-fluid-transitions";

import List from "./screens/List";
import Details from "./screens/Details";

const Navigator = createFluidNavigator({
  List: { screen: List },
  Details: { screen: Details }
});

const App = createAppContainer(Navigator);

export default () => <App />;

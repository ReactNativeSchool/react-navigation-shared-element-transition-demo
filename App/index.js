import React from "react";
import { ScrollView, SafeAreaView } from "react-native";

import { Card } from "./components/Card";

export default () => (
  <SafeAreaView>
    <ScrollView>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ScrollView>
  </SafeAreaView>
);

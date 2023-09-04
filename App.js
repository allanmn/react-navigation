import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./src/navigation/stack";
export default (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
        <Stack />
    </NavigationContainer>
  </SafeAreaView>
);

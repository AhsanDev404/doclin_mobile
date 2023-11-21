import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from "./AuthNavigation";
import TabNavigation from "./TabNavigation";
const Stack = createNativeStackNavigator();
export default function MainNavigation() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Auth" component={AuthNavigation} />
          <Stack.Screen name="Tab" component={TabNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

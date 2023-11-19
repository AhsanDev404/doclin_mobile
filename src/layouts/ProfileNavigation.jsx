import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from '../screens/profile/Profile';
import Contact from '../screens/profile/Contact';
import Personal from '../screens/profile/Personal';

const Stack = createNativeStackNavigator();
export default function ProfileNavigation() {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Personal" component={Personal} />
      <Stack.Screen name="Contact" component={Contact} />

      </Stack.Navigator>
     
    </>
  )
}
import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
const Stack = createNativeStackNavigator();
export default function AuthNavigation() {
  return (
    <>
     <Stack.Navigator screenOptions={{ headerShown: false }}>
     <Stack.Screen name="Login" component={Login} />
     <Stack.Screen name="SignUp" component={SignUp} />
     </Stack.Navigator>
    </>
  )
}
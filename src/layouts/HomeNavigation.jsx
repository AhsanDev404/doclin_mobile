import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import StartA from '../screens/home/StartA';
import StartB from '../screens/home/StartB';
import StartC from '../screens/home/StartC';
import StartD from '../screens/home/StartD';
import ViewAll from '../screens/home/ViewAll';
const Stack = createNativeStackNavigator();
export default function HomeNavigation() {
  return (
    <>
     <Stack.Navigator screenOptions={{ headerShown: false }}>
     <Stack.Screen name="Home" component={Home} />
     <Stack.Screen name="StartA" component={StartA} />
     <Stack.Screen name="StartB" component={StartB} />
     <Stack.Screen name="StartC" component={StartC} />
     <Stack.Screen name="StartD" component={StartD} />
     <Stack.Screen name="ViewAll" component={ViewAll} />
     </Stack.Navigator>
    </>
  )
}
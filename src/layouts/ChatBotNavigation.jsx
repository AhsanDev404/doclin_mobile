import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatBot from '../screens/chatBot/ChatBot';
const Stack = createNativeStackNavigator();
export default function ChatBotNavigation() {
  return (
    <>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ChatBot" component={ChatBot} />
    </Stack.Navigator>
      
    </>
  )
}
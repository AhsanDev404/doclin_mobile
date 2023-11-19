import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Community from '../screens/community/Community';
import Article from '../screens/community/Article';
import ArticleDetail from '../screens/community/ArticleDetail';
const Stack = createNativeStackNavigator();
export default function CommunityNavigation() {
  return (
    <>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
     <Stack.Screen name="Community" component={Community} />
     <Stack.Screen name="Article" component={Article} />
     <Stack.Screen name="ArticleDetails" component={ArticleDetail} />
    </Stack.Navigator>
    </>
  )
}
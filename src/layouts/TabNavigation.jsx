import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeNavigation from "./HomeNavigation";
import CommunityNavigation from "./CommunityNavigation";
import ChatBotNavigation from "./ChatBotNavigation";
import MedicalCardNavigation from "./MedicalCardNavigation";
import ProfileNavigation from "./ProfileNavigation";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ffffff"
      inactiveColor="#a8a8a8"
      barStyle={{ backgroundColor: "#000" }}
    >
      <Tab.Screen
        name="MainHome"
        component={HomeNavigation}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityNavigation}
        options={{
          tabBarLabel: "Community",
          tabBarIcon: ({ color }) => (
            <Icon name="people-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="ChatBot"
        component={ChatBotNavigation}
        options={{
          tabBarLabel: "ChatBot",
          tabBarIcon: ({ color }) => (
            <Icon name="chatbubble-ellipses-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="MedicalCard"
        component={MedicalCardNavigation}
        options={{
          tabBarLabel: "Medical Card",
          tabBarIcon: ({ color }) => (
            <Icon name="medkit-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigation}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Icon name="person-outline" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

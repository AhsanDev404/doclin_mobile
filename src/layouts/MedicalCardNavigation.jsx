import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MedicalCard from "../screens/medicalCard/MedicalCard";
import Recommendation from "../screens/medicalCard/Recommendation";
import Details from "../screens/medicalCard/Details";
import Appointment from "../screens/medicalCard/Appointment";
import TimeSlots from "../screens/medicalCard/TimeSlots";
import Confirm from "../screens/medicalCard/Confirm";

const Stack = createNativeStackNavigator();
export default function MedicalCardNavigation() {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MedicalCard" component={MedicalCard} />
        <Stack.Screen name="Recommendation" component={Recommendation} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Appointment" component={Appointment} />
        <Stack.Screen name="TimeSlots" component={TimeSlots} />
        <Stack.Screen name="Confirm" component={Confirm} />
      </Stack.Navigator>
    </>
  );
}

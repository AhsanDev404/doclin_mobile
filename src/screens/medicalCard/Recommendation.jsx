import { View, ScrollView, Image, StyleSheet, FlatList } from "react-native";
import React from "react";

import { doctorsData, feeling } from "../../utils/constant";
import DoctorCard from "../../components/DoctorCard";
import { IconButton, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ConsultantList from "../../components/ConsultantList";

export default function Recommendation({}) {
  const navigation = useNavigation()
  return (
    <ScrollView style={{ flex: 1, marginTop: 10, padding: 10 }}>
      <Text variant="headlineLarge" style={{ fontWeight: "bold" }}>
      Recommendations For You
      </Text>

      <ConsultantList />
      <View>
        <IconButton
          onPress={() => navigation.navigate("Home")}
          style={{ alignSelf: "center", backgroundColor: "black", margin: 20 }}
          iconColor="white"
          icon={"close"}
        />
      </View>
    </ScrollView>
  );
}

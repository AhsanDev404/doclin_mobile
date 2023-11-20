import { View, ScrollView, Image, StyleSheet, FlatList } from "react-native";
import React from "react";

import { doctorsData, feeling } from "../../utils/constant";
import DoctorCard from "../../components/DoctorCard";
import { IconButton, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Recommendation({}) {
  const navigation = useNavigation()
  return (
    <ScrollView style={{ flex: 1, marginTop: 10, padding: 10 }}>
      <Text variant="headlineLarge" style={{ fontWeight: "bold" }}>
      Recommendations For You
      </Text>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <FlatList
          scrollEnabled={false}
          data={doctorsData}
          renderItem={({ item }) => <DoctorCard item={item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={{ alignItems: "center" }} // Align items in the center
        />
      </View>
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

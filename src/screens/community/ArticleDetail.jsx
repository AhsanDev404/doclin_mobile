import { Image, ScrollView, View } from "react-native";
import React from "react";
import { IconButton, Text } from "react-native-paper";
import { hero } from "../../utils/assets";

export default function ArticleDetail({ navigation }) {
  return (
    <ScrollView style={{ padding: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconButton
          onPress={() => navigation.pop()}
          style={{ backgroundColor: "black", margin: 20 }}
          iconColor="white"
          icon={"close"}
        />
        <Text variant="headlineLarge" style={{ textAlign: "center" }}>
          Doctor Detail
        </Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image source={hero} />
      </View>

      <View style={{ marginVertical: 20, gap: 10 }}>
        <Text variant="displaySmall">How to cope with your demons?</Text>
        <Text variant="bodyLarge" style={{ color: "#888" }}>
          15 September 2023
        </Text>
        <Text variant="titleSmall">2 Mins Read</Text>
        <Text variant="bodyMedium" style={{color:"#888" , marginBottom:30}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu augue
          ut lectus arcu bibendum at varius. Mauris cursus mattis molestie a
          iaculis at erat pellentesque adipiscing. Sed turpis tincidunt id
          aliquet. Pellentesque pulvinar pellentesque habitant morbi tristique
          senectus et netus. Quam elementum pulvinar etiam non quam. Lorem ipsum
          dolor sit amet consectetur. Faucibus pulvinar elementum integer enim
          neque volutpat ac. In hac habitasse platea dictumst vestibulum
          rhoncus. Tellus cras adipiscing enim eu turpis egestas pretium. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Eu augue ut lectus
          arcu bibendum at varius. Mauris cursus mattis molestie a iaculis at
          erat pellentesque adipiscing. Sed turpis tincidunt id aliquet.
          Pellentesque pulvinar pellentesque habitant morbi tristique senectus
          et netus. Quam elementum pulvinar etiam non quam. Lorem ipsum dolor
          sit amet consectetur. Faucibus pulvinar elementum integer enim neque
          volutpat ac.
        </Text>
      </View>
    </ScrollView>
  );
}

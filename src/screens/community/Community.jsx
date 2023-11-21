import { Image, ScrollView, View } from "react-native";
import React from "react";
import { Card, Text } from "react-native-paper";
import HeroSection from "../../components/HeroSection";
import { anxity } from "../../utils/assets";
import { community } from "../../utils/constant";

export default function Community({navigation}) {
  return (
    <ScrollView
      style={{
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: "white",
      }}
    >
      <View style={{ margin: 10 }}>
        <Text style={{ fontWeight: "bold" }} variant="displaySmall">
          Community
        </Text>
        <Text style={{ color: "#888" }} variant="bodyLarge">
          Insights will help you be better
        </Text>
      </View>
      <View style={{ margin: 10 }}>
        <Text variant="bodyLarge" style={{ color: "#888" }}>
          He who has health has hope and he who has hope has everything –
          <Text variant="labelLarge" style={{ fontWeight: "bold" }}>
            {" "}
            Arabian Proverb
          </Text>
        </Text>
      </View>
      <View>
        <HeroSection />
      </View>

      <View
        style={{
          flexDirection: "row",
          padding: 10,
          gap: 10,
          flexWrap: "wrap",
          marginBottom: 30,
          justifyContent: "center",
        }}
      >
        {community.map((data, index) => (
          <Card onPress={()=>navigation.push('Article')} key={index} style={{ padding: 10, justifyContent: "center", width: 150 }}>
            <Image source={data.image} />
            <Text variant="titleSmall" style={{ textAlign: "center" }}>
              {data.title}
            </Text>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}

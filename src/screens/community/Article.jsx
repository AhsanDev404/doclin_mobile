import { View, ScrollView, Image } from "react-native";
import React from "react";
import { Card, IconButton, Text } from "react-native-paper";
import { anxity } from "../../utils/assets";
import { article } from "../../utils/constant";

export default function Article({ navigation }) {
  return (
    <ScrollView style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconButton
          onPress={() => navigation.push("Community")}
          style={{ backgroundColor: "black", margin: 20 }}
          iconColor="white"
          icon={"close"}
        />
        <Text variant="headlineLarge" style={{ textAlign: "center" }}>
          Doctor Detail
        </Text>
      </View>

      <View>
        {article.map((data, index) => (
          <Card onPress={()=>navigation.push('ArticleDetails')} key={index} style={{ margin: 5, padding: 5 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image source={data.imageSource} />
              <View style={{ flex: 1, gap: 10 }}>
                <Text numberOfLines={1} variant="titleLarge">
                  {data.title}
                </Text>
                <Text
                  numberOfLines={1}
                  variant="bodySmall"
                  style={{ color: "#888" }}
                >
                  {data.description}
                </Text>
                <Text variant="titleSmall">{data.readTime}</Text>
              </View>
            </View>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}

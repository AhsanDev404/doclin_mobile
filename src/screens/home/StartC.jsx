import { View } from "react-native";
import React from "react";
import { IconButton, Text } from "react-native-paper";
import StartButton from "../../components/StartButton";

export default function StartC({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text
        variant="headlineLarge"
        style={{ marginTop: 20, marginLeft: 10, fontWeight: "bold" }}
      >
        What do you want to discuss?
      </Text>
      <View>
        <StartButton
          navigation={navigation}
          address="StartB"
          title="Partner"
          icon="heart"
        />
        <StartButton
          navigation={navigation}
          address="StartC"
          title="Family"
          icon="users"
        />
        <StartButton
          navigation={navigation}
          address="StartD"
          title="Friends"
          icon="users"
        />
        <StartButton
          navigation={navigation}
          address="StartD"
          title="Workspace"
          icon="briefcase"
        />
      </View>
      <IconButton
        onPress={() => navigation.push("StartA")}
        style={{ alignSelf: "center", backgroundColor: "black" }}
        iconColor="white"
        icon={"close"}
      />
    </View>
  );
}

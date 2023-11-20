import { View, ScrollView, Image } from "react-native";
import React from "react";
import { Button, Card, IconButton, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { profile } from "../../utils/assets";

export default function Details() {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconButton
          onPress={() => navigation.navigate("MedicalCard")}
          style={{ backgroundColor: "black", margin: 20 }}
          iconColor="white"
          icon={"close"}
        />
        <Text variant="headlineLarge" style={{ textAlign: "center" }}>
          Doctor Detail
        </Text>
      </View>

      <Card style={{ margin: 10, padding: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image
            style={{
              borderEndWidth: 1,
              borderColor: "gray",
              borderRadius: 100,
              backgroundColor: "gray",
            }}
            source={profile}
          />
          <View>
            <Text variant="titleLarge">Dr. Amanda H.</Text>
            <Text style={{ color: "#888" }}>Ph.D. Clinical Psych.</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              margin: 10,
              padding: 10,
            }}
          >
            <Text style={{ color: "#888" }} variant="titleSmall">
              Patients
            </Text>
            <Text variant="displayLarge">100+</Text>
          </Card>
          <Card
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              margin: 10,
              padding: 10,
            }}
          >
            <Text style={{ color: "#888" }} variant="titleSmall">
              Patients
            </Text>
            <Text variant="displayLarge">100+</Text>
          </Card>
        </View>
        <Button
        onPress={()=>navigation.navigate('TimeSlots')}
          mode="contained"
          style={{ backgroundColor: "black", margin: 10 }}
        >
          Book Appointment Now
        </Button>
      </Card>

      <Card style={{ margin: 10, padding: 10 }}>
        <Text variant="titleLarge">About Doctor</Text>
        <Text variant="bodyLarge" style={{color:'#888'  }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit
          in voluptate velit.
        </Text>
      </Card>
    </ScrollView>
  );
}

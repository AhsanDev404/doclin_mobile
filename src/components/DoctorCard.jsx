import { View, Image } from "react-native";
import React from "react";
import { Button, Card, Text } from "react-native-paper";
import { profile } from "../utils/assets";
import { useNavigation } from "@react-navigation/native";

export default function DoctorCard({item}) {
  const navigation = useNavigation()
  return (
    <Card onPress={()=>{
      navigation.navigate('MainMedicalCard', {
        screen: 'Details',
        params: { item: item }, 
      });
      

    }} style={{  marginTop:50 ,marginLeft:5, width:150 }}>
      <Image
        style={{
          width: 100,
          height: 100,
          alignSelf: "center",
          borderRadius: 100,
          borderWidth: 1,
          borderColor: "gray",
          position: "relative",
          bottom: 30,
        }}
        source={profile}
      />
      <Text
        style={{ textAlign: "center", fontWeight: "bold" }}
        variant="labelLarge"
      >
        {item.name}
      </Text>
      <Text style={{ textAlign: "center", color: "#888" }}>
        {item.specialization}
      </Text>
      <Button mode="contained" style={{ backgroundColor: "black", margin: 10 }}>
        Book Now
      </Button>
    </Card>
  );
}

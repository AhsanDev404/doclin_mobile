import { View, ScrollView, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import { hero, profile, scared } from "../../utils/assets";
import { Button, Card, Text } from "react-native-paper";
import { doctorsData, feeling } from "../../utils/constant";
import HeroSection from "../../components/HeroSection";
import DoctorCard from "../../components/DoctorCard";

export default function Home({ navigation }) {
  const name = "Ahmed";
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={profile} style={styles.profileImage} />
        <View style={styles.textContainer}>
          <Text style={styles.greeting}>
            Hi There <Text style={styles.nameText}>{name}!</Text>
          </Text>
          <Text style={styles.zodiac}>Gemini</Text>
        </View>
      </View>
      <View style={{ margin: 10 }}>
        <Text style={{ fontWeight: "bold" }} variant="displaySmall">
          Today
        </Text>
        <Text style={{ color: "#888" }} variant="bodyLarge">
          How are you feeling?
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          padding: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {feeling.map((data, index) => (
          <View key={index} style={{ alignItems: "center", gap: 2 }}>
            <Image source={data.image} />
            <Text variant="labelLarge">{data.title}</Text>
          </View>
        ))}
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
      <HeroSection navigation={navigation} />
      <View style={{ margin: 10 }}>
        <Text style={{ fontWeight: "bold" }} variant="headlineSmall">
          Consultation
        </Text>
        <Text variant="bodyLarge" style={{ color: "#888" }}>
          Best Therapists available 24/7
        </Text>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <FlatList
            scrollEnabled={false}
            data={doctorsData}
            renderItem={({ item }) => <DoctorCard item={item} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={{ alignItems: "center" }} // Align items in the center
          />
        </View>
        <Button onPress={()=>navigation.push('ViewAll')} mode="contained" style={{margin:10 , backgroundColor:"black"}}>Explore More</Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  profileContainer: {
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    margin: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 75,
    marginBottom: 10,
    backgroundColor: "gray",
  },

  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
    marginBottom: 5,
  },
  nameText: {
    color: "black", // Change the color as needed
    fontWeight: "bold",
  },
  zodiac: {
    fontSize: 16,
    color: "#888", // Change the color as needed
  },
});

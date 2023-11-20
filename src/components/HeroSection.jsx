import { Image, View } from 'react-native'
import React from 'react'
import { Button, Text } from 'react-native-paper'
import { hero } from '../utils/assets'

export default function HeroSection() {
  return (
    <View
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 10,
          backgroundColor: "#eee",
          margin: 10,
          borderRadius: 10,
        }}
      >
        <View style={{ flex: 1, margin: 10, justifyContent: "space-between" }}>
          <Text
            variant="labelLarge"
            style={{ fontSize: 20, fontWeight: "bold" }}
          >
            Are you ready to have your first therapy session?
          </Text>
          <Button
            onPress={() => navigation.push("StartA")}
            style={{ backgroundColor: "black" }}
            mode="contained"
          >
            Get Started
          </Button>
        </View>
        <Image style={{ flex: 1 }} source={hero} />
      </View>
  )
}
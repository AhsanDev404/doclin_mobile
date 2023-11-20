import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text, IconButton } from 'react-native-paper';

export default function Contact({ navigation }) {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSave = () => {
    // Handle saving the edited contact data
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <View style={{ padding: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconButton
          onPress={() => navigation.navigate("Profile")}
          style={{ backgroundColor: "black", margin: 20 }}
          iconColor="white"
          icon="close"
        />
        <Text variant="headlineLarge" style={{ textAlign: "center" }}>
          Contact
        </Text>
      </View>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        label="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        style={{ marginBottom: 10 }}
        keyboardType="numeric"
      />
      <Button mode="contained" onPress={handleSave} style={{ backgroundColor: "black" }}>
        Save
      </Button>
    </View>
  );
}

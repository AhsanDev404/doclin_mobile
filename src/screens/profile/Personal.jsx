import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, RadioButton, Text, IconButton } from 'react-native-paper';

export default function EditProfile({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('male'); // Default value set to male
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleSave = () => {
    // Handle saving the edited profile data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Gender:', gender);
    console.log('Age:', age);
    console.log('Height:', height);
    console.log('Weight:', weight);
  };

  return (
    <View style={{ padding: 20 }}>
       <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconButton
          onPress={() => navigation.navigate("Profile")}
          style={{ backgroundColor: "black", margin: 20 }}
          iconColor="white"
          icon={"close"}
        />
        <Text variant="headlineLarge" style={{ textAlign: "center" }}>
         Personal
        </Text>
      </View>
      <TextInput
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ marginBottom: 10 }}
      />
     <RadioButton.Group onValueChange={(value) => setGender(value)} value={gender}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <RadioButton value="male" />
          <Text style={{ marginRight: 20 }}>Male</Text>
          
          <RadioButton value="female" />
          <Text style={{ marginRight: 20 }}>Female</Text>
          
          <RadioButton value="other" />
          <Text style={{ marginRight: 20 }}>Other</Text>
        </View>
      </RadioButton.Group>

      <TextInput
        label="Age"
        value={age}
        onChangeText={(text) => setAge(text)}
        style={{ marginBottom: 10 }}
        keyboardType="numeric"
      />
      <TextInput
        label="Height (cm)"
        value={height}
        onChangeText={(text) => setHeight(text)}
        style={{ marginBottom: 10 }}
        keyboardType="numeric"
      />
      <TextInput
        label="Weight (kg)"
        value={weight}
        onChangeText={(text) => setWeight(text)}
        style={{ marginBottom: 10 }}
        keyboardType="numeric"
      />
      <Button mode="contained" onPress={handleSave} style={{backgroundColor:"black"}}>
        Save
      </Button>
    </View>
  );
}

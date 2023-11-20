import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { profile } from '../../utils/assets';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library

export default function Profile({navigation}) {
  const handlePersonal = () => {
    navigation.push('Personal')
  };

  const handleContact = () => {
    navigation.push('Contact')
  };

  const handleLogout = () => {
    // Handle logout button action
  };

  return (
    <View style={{flex:1, paddingVertical: 20, paddingHorizontal: 10 , justifyContent:"center" , alignItems:'center' }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          margin: 10,
        }}
      >
        <Image
          style={{
            borderEndWidth: 1,
            borderColor: 'gray',
            borderRadius: 100,
            backgroundColor: 'gray',
          }}
          source={profile}
        />
        <View>
          <Text variant="titleLarge">Ahmad Mujtaba</Text>
          <Text style={{ color: '#888' }}>Male, 23 years old</Text>
        </View>
      </View>
      <View style={{gap:5 , width:'100%'}}>
        <Button
          icon={({ size, color }) => (
            <Icon name="user" size={size} color={color} /> // Replace "user" with the desired icon name
          )}
          mode="contained"
          onPress={handlePersonal}
          style={{backgroundColor:'black'}}
        >
          Personal
        </Button>
        <Button
          icon={({ size, color }) => (
            <Icon name="phone" size={size} color={color} /> // Replace "phone" with the desired icon name
          )}
          mode="contained"
          onPress={handleContact}
          style={{backgroundColor:'black'}}
        >
          Contact
        </Button>
        <Button
          icon={({ size, color }) => (
            <Icon name="sign-out" size={size} color={color} /> // Replace "sign-out" with the desired icon name
          )}
          mode="contained"
          onPress={handleLogout}
          style={{backgroundColor:'black'}}
        >
          Logout
        </Button>
      </View>
    </View>
  );
}

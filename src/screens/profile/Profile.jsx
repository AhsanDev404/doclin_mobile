import React, { useState } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { profile } from '../../utils/assets';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library
import { logoutUser } from '../../services/auth';
import { clearUser } from '../../redux/slices/authSlice';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from 'react-redux';
import ErrorMessage from '../../components/ErrorMessage';

export default function Profile({}) {
  const navigation  = useNavigation()
  const dispatch = useDispatch()
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(false);
  const handlePersonal = () => {
    navigation.navigate('Personal')
  };

  const handleContact = () => {
    navigation.navigate('Contact')
  };

  const handleLogout = async() => {
    try {
      const token = await AsyncStorage.getItem("token");
      const responseData = await logoutUser(token); // Call the loginAPI function
      dispatch(clearUser());
      await AsyncStorage.setItem("token", "junk");
      navigation.navigate("Login");
    } catch (error) {
      setError("Login failed. Please check your credentials.");
      setVisible(true);
      console.log(error.message);
    }
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
      <ErrorMessage
        visible={visible}
        hideDialog={() => setVisible(false)}
        message={error}
      />
    </View>
  );
}

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

const Confirm = ({ navigation }) => {


  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Icon name="check-circle" size={100} color="black" />
      <Text style={{ fontSize: 20, marginVertical: 20 }}>
        Appointment Pending
      </Text>
      <Text style={{ marginBottom: 20 }}>
        You'll receive an email once confirmed
      </Text>
      <Button
    
        mode="contained"
        style={{
          backgroundColor: "black",
        }}
        onPress={()=>navigation.push('Appointment')}
      >
        View Appointments
      </Button>
    </View>
  );
};

export default Confirm;

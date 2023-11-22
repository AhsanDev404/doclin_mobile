import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Card, Title, Button, Paragraph, Text } from "react-native-paper";
import { getBookings } from "../../services/booking";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Appointment = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchTimeSlots = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const responseData = await getBookings(token);
        setBookings(responseData.data);
      } catch (error) {}
    };

    fetchTimeSlots();
  }, []);

  return (
    <ScrollView style={{ padding: 20 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {bookings === undefined ? (
          <Text variant="headlineLarge">No Confirm Booking Yet</Text>
        ) : (
          <></>
        )}
      </View>
    </ScrollView>
  );
};

export default Appointment;

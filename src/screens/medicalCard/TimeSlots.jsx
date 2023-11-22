import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Card, Title, Subheading } from 'react-native-paper';
import { getTimeSlotsByConsultantId } from '../../services/timeSlots';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBooking } from '../../services/booking';
import ErrorMessage from '../../components/ErrorMessage';

const TimeSlots = ({ navigation }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [slots, setSlots] = useState([]);
  const route = useRoute();
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fetchTimeSlots = async () => {
      try {
        const responseData = await getTimeSlotsByConsultantId(route.params.consultant);
        setSlots(responseData.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTimeSlots();
  }, [route.params.consultant]);

  const handelConfirm = async () => {

    if(!selectedSlot){
      setError("Login failed. Please check your credentials.");
      setVisible(true);
    }
    else{
      const token = await AsyncStorage.getItem("token");
    try {
      const res = await createBooking(token , {timeSlot:selectedSlot})
      if(res.data){
        navigation.push('Confirm')
      }
    } catch (error) {
      
    }
    }
    
    
  };

  return (
    <ScrollView style={{ paddingHorizontal: 20 }}>
      <Title style={{ textAlign: 'center', marginBottom: 20 }}>Select a Time Slot</Title>
      {slots.map((slotGroup) => (
        <Card key={slotGroup._id} style={{ marginVertical: 10, padding: 15 }}>
          <Title>{slotGroup.timeSlots[0].day}</Title>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            {slotGroup.timeSlots[0].slots.map((slot) => (
              <Button
                key={slot._id}
                mode="outlined"
                onPress={() => setSelectedSlot(slot._id)}
                style={{
                  marginVertical: 5,
                  backgroundColor: selectedSlot === slot._id ? 'blue' : 'transparent',
                }}
              >
                <Subheading style={{ color: selectedSlot?._id === slot._id ? 'white' : 'black' }}>
                  {`${slot.startTime} - ${slot.endTime}`}
                </Subheading>
              </Button>
            ))}
          </View>
          <Button
            mode="contained"
            style={{ margin: 20, backgroundColor: 'black' }}
            onPress={handelConfirm}
          >
            Confirm
          </Button>
        </Card>
      ))}
      <ErrorMessage
        visible={visible}
        hideDialog={() => setVisible(false)}
        message={error}
      />
    </ScrollView>
  );
};

export default TimeSlots;

import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Card, Title, Subheading } from 'react-native-paper';

const TimeSlots = ({navigation}) => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
    // Handle slot selection logic here
  };

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM'];

  return (
    <ScrollView style={{ paddingHorizontal: 20 }}>
      <Title style={{ textAlign: 'center', marginBottom: 20 }}>Select a Time Slot</Title>
      {days.map((day, dayIndex) => (
        <Card key={dayIndex} style={{ marginVertical: 10, padding: 15 ,  }}>
          <Title>{day}</Title>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap:'wrap' }}>
            {timeSlots.map((slot, slotIndex) => (
              <Button
                key={slotIndex}
                mode="outlined"
                onPress={() => handleSlotSelection(`${day} - ${slot}`)}
                style={{
                  marginVertical: 5,
                  backgroundColor: selectedSlot === `${day} - ${slot}` ? 'blue' : 'transparent',
                }}
              >
                <Subheading style={{ color: selectedSlot === `${day} - ${slot}` ? 'white' : 'black' }}>
                  {slot}
                </Subheading>
              </Button>
            ))}
          </View>
          <Button
        mode="contained"
        style={{ margin: 20 , backgroundColor:'black'  }}
        onPress={() => navigation.push('Confirm')}
        
       
        
      >
        Confirm
      </Button>
        </Card>
      ))}
      
    </ScrollView>
  );
};

export default TimeSlots;

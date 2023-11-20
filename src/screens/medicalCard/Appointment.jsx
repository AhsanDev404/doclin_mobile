import React from 'react';
import { ScrollView, View } from 'react-native';
import { Card, Title, Button, Paragraph } from 'react-native-paper';

const Appointment = () => {
  const pendingAppointments = [
    { id: 1, doctor: 'Dr. Smith', day: 'Monday', date: 'Nov 25', time: '10:00 AM', status: 'Pending' },
    { id: 2, doctor: 'Dr. Johnson', day: 'Tuesday', date: 'Nov 26', time: '11:30 AM', status: 'Pending' },
    // Add more pending appointments as needed
  ];

  const confirmedAppointments = [
    { id: 3, doctor: 'Dr. Brown', day: 'Wednesday', date: 'Nov 27', time: '9:00 AM', status: 'Confirmed' },
    { id: 4, doctor: 'Dr. Davis', day: 'Thursday', date: 'Nov 28', time: '2:00 PM', status: 'Confirmed' },
    // Add more confirmed appointments as needed
  ];

  return (
    <ScrollView style={{ padding: 20 }}>
       <Title style={{ marginTop: 20 }}>Confirmed Appointments</Title>
      {confirmedAppointments.map((appointment) => (
        <Card key={appointment.id} style={{ marginVertical: 10 }}>
          <Card.Content>
            <Title>{appointment.doctor}</Title>
            <Paragraph>Day: {appointment.day}</Paragraph>
            <Paragraph>Date: {appointment.date}</Paragraph>
            <Paragraph>Time: {appointment.time}</Paragraph>
            <Paragraph>Status: {appointment.status}</Paragraph>
          </Card.Content>
          {appointment.status === 'Confirmed' && (
            <Card.Actions>
              <Button mode='contained' style={{ backgroundColor: 'black' }} onPress={() => console.log('Go to meeting', appointment.id)}>
                Go to Meeting
              </Button>
            </Card.Actions>
          )}
        </Card>
      ))}
      <Title>Pending Appointments</Title>
      {pendingAppointments.map((appointment) => (
        <Card key={appointment.id} style={{ marginVertical: 10 }}>
          <Card.Content>
            <Title>{appointment.doctor}</Title>
            <Paragraph>Day: {appointment.day}</Paragraph>
            <Paragraph>Date: {appointment.date}</Paragraph>
            <Paragraph>Time: {appointment.time}</Paragraph>
            <Paragraph>Status: {appointment.status}</Paragraph>
          </Card.Content>
        </Card>
      ))}

     
    </ScrollView>
  );
};

export default Appointment;

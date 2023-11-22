import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import DoctorCard from './DoctorCard'
import { doctorsData } from '../utils/constant'
import { useDispatch } from 'react-redux'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllConsultants } from '../services/home'

export default function ConsultantList({ numberOfDoctorsToShow }) {
    const dispatch = useDispatch();
    const [consultants, setConsultants] = useState([]);
  
    useEffect(() => {
      const fetchConsultants = async () => {
        try {
          const token = await AsyncStorage.getItem('token');
          if (token) {
            const responseData = await getAllConsultants(token);
            
            setConsultants(responseData.data);
          } else {
            // Handle case where token is not available (e.g., user not authenticated)
          }
        } catch (error) {
          // Handle error
        }
      };
  
      fetchConsultants();
    }, [dispatch]); // Remove dispatch from the dependency array if it's not used within this effect
  
    // Generate an array of doctors according to the specified number
    const doctorsToShow = consultants.length ? consultants.slice(0, numberOfDoctorsToShow) : [];
  
    return (
      <View style={{ flexDirection :"row" , flexWrap:"wrap" , gap:2 }}>
        {doctorsToShow.map((item , index)=><DoctorCard key={index} item={item} />)}
      </View>
    );
  }
  
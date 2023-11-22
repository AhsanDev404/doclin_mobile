import { FlatList, ScrollView, View } from 'react-native'
import React from 'react'
import { IconButton, Text } from 'react-native-paper'
import { doctorsData } from '../../utils/constant'
import DoctorCard from '../../components/DoctorCard'
import ConsultantList from '../../components/ConsultantList'

export default function ViewAll({navigation}) {
  return (
    <ScrollView style={{flex:1 , marginTop:10 , padding:10}}>

      <Text variant='headlineLarge' style={{fontWeight:'bold'}}>Psychologists</Text>
     
      <ConsultantList />
        <View>
        <IconButton onPress={()=>navigation.push('Home')} style={{alignSelf:"center" , backgroundColor:'black' ,margin:20 }} iconColor="white" icon={'close'} />
        </View>
    </ScrollView>
  )
}
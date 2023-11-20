import { FlatList, ScrollView, View } from 'react-native'
import React from 'react'
import { IconButton, Text } from 'react-native-paper'
import { doctorsData } from '../../utils/constant'
import DoctorCard from '../../components/DoctorCard'

export default function ViewAll({navigation}) {
  return (
    <ScrollView style={{flex:1 , marginTop:10 , padding:10}}>

      <Text variant='headlineLarge' style={{fontWeight:'bold'}}>Psychologists</Text>
     
      <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <FlatList
            scrollEnabled={false}
            data={doctorsData}
            renderItem={({ item }) => <DoctorCard item={item} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={{ alignItems: "center" }} // Align items in the center
          />
        </View>
        <View>
        <IconButton onPress={()=>navigation.push('Home')} style={{alignSelf:"center" , backgroundColor:'black' ,margin:10 }} iconColor="white" icon={'close'} />
        </View>
    </ScrollView>
  )
}
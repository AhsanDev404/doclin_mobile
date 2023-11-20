import { View } from "react-native";
import React from "react";
import { IconButton, Text } from "react-native-paper";
import StartButton from "../../components/StartButton";

export default function StartA({navigation}) {
  return (
    <View style={{flex:1  , justifyContent:"center"}}>
      <Text variant="headlineLarge" style={{marginTop:20 , marginLeft:10 , fontWeight:'bold'}}>What do you want to discuss?</Text>
      <View>
        <StartButton navigation={navigation} address= "StartB" icon={"heart"} title = "Condition" />
        <StartButton navigation={navigation} address= "StartC" icon={"group"} title = "Relationship" />
        <StartButton navigation={navigation} address= "StartD" icon={"briefcase"} title = "Work and Career" />
      </View>
      <IconButton onPress={()=>navigation.push('Home')} style={{alignSelf:"center" , backgroundColor:'black' , }} iconColor="white" icon={'close'} />
    </View>
  );
}

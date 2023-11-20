import { View } from "react-native";
import React from "react";
import { IconButton, Text } from "react-native-paper";
import StartButton from "../../components/StartButton";

export default function StartB({navigation}) {
  return (
    <View style={{flex:1  , justifyContent:"center"}}>
      <Text variant="headlineLarge" style={{marginTop:20 , marginLeft:10 , fontWeight:'bold'}}>What do you want to discuss?</Text>
      <View>
      <StartButton navigation={navigation} address="StartB" title="Mood Swings" icon="smile-o" />
<StartButton navigation={navigation} address="StartC" title="Stress" icon="exclamation-circle" />
<StartButton navigation={navigation} address="StartD" title="Low Energy" icon="battery-quarter" />
<StartButton navigation={navigation} address="StartD" title="Depression" icon="frown-o" />

      </View>
      <IconButton onPress={()=>navigation.push('StartA')} style={{alignSelf:"center" , backgroundColor:'black' , }} iconColor="white" icon={'close'} />
    </View>
  );
}

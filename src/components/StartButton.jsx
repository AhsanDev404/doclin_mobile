import { View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from 'react-native-paper';

export default function StartButton({navigation , icon , address , title}) {
  return (
    <View onTouchStart={()=>navigation.push(address)} style={{ alignItems: 'center', flexDirection:'row', justifyContent:'space-between', margin:10 , backgroundColor:"#ddd" , padding:20 , borderRadius:10}}>
      <View style={{flexDirection:"row",alignItems: 'center',gap:5}}>
      <Icon name={icon} size={20} /> 
      <Text variant='bodyLarge'>{title}</Text>
      </View>
      <Icon name="arrow-right" size={20} /> 
    </View>
  );
}

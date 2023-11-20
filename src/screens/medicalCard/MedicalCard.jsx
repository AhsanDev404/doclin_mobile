import { View, ScrollView, Image } from "react-native";
import React from "react";
import { Button, Card, Text } from "react-native-paper";
import { profile } from "../../utils/assets";
import Icon from "react-native-vector-icons/FontAwesome";
export default function MedicalCard({navigation}) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white",paddingVertical:20 }}>
      <Card style={{ margin: 10, padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            margin: 10,
          }}
        >
          <Image
            style={{
              borderEndWidth: 1,
              borderColor: "gray",
              borderRadius: 100,
              backgroundColor: "gray",
            }}
            source={profile}
          />
          <View>
            <Text variant="titleLarge">Ahmad Mujtaba</Text>
            <Text style={{ color: "#888" }}>Male, 23 years old</Text>
          </View>
        </View>
        <View style={{ margin: 10, gap: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="map-marker" size={20} style={{ marginRight: 5 }} />
            <Text>216, Beverly Hills, California, USA</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="phone" size={20} style={{ marginRight: 5 }} />
            <Text>(92) 000 1213457</Text>
          </View>
        </View>
      </Card>

      <Card style={{ margin: 10, padding: 10 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View style={{ justifyContent: "center", borderRightWidth:1,borderRightColor:'gray' , paddingRight:10 }}>
            <Text style={{ color: "#888" }}>Weight</Text>
            <Text variant="headlineSmall" style={{ fontWeight: "bold" }}>
              81 kg
            </Text>
          </View>
          <View style={{ justifyContent: "center", }}>
            <Text style={{ color: "#888" }}>Weight</Text>
            <Text variant="headlineSmall" style={{ fontWeight: "bold" }}>
              81 kg
            </Text>
          </View>
          <View style={{ justifyContent: "center" ,borderLeftWidth:1,borderLeftColor:'gray' , paddingLeft:10 }}>
            <Text style={{ color: "#888" }}>Weight</Text>
            <Text variant="headlineSmall" style={{ fontWeight: "bold" }}>
              81 kg
            </Text>
          </View>
        </View>
      </Card>

      <View style={{flexDirection:'row' , justifyContent:'space-evenly',margin:10}}>
        <Card style={{padding:20 }}>
          <Text variant="displayLarge" style={{fontWeight:'bold'}}>6</Text>
          <Text variant="titleSmall">Appointments</Text>
        </Card>
        <Card style={{padding:20 }}>
          <Text variant="displayLarge" style={{fontWeight:'bold'}}>6</Text>
          <Text variant="titleSmall">Appointments</Text>
        </Card>
      </View>

      <Button onPress={()=>navigation.push('Recommendation')} mode="contained" style={{backgroundColor:'black' , margin:10}}>
      Scheduled Sessions
      </Button>

    </ScrollView>
  );
}

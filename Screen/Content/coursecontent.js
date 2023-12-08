import React from 'react'
import { ImageBackground, Text, View } from 'react-native'

export default function Coursecontent() {
  return (
    <View>
        <View style={{width: 375, height: 500, alignItems: 'center'}}> 
        <ImageBackground source={require("../../assets/bannerimage2.png")}
        style={{width:300, height: 150, alignItems:'center', justifyContent: 'center'}}> 
        <Text>Java</Text>
        </ImageBackground>
        </View>
    </View>
  )
}

import React from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'

export default function Coursecontent() {
  return (
    <View>
        <View style={{width: 375, alignItems: 'center'}}> 
        <ImageBackground source={require("../../assets/bannerimage2.png")}
        style={{width:270, height: 120, alignItems:'center', justifyContent: 'center'}}> 
        <Text style={{fontFamily:"glacialindibold", fontSize: 50}}>Java</Text>
        </ImageBackground>
        </View>
        <View style={{width:375, alignItems:'center', justifyContent: 'center'}}>
            <TouchableOpacity style={{width:105, backgroundColor: "#D9D9D9", alignItems: 'center', padding: 10}}>
                <Text>Add Favorites</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

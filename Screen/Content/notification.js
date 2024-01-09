import React from "react";
import {Dimensions,Image,ImageBackground,Text,View,TouchableOpacity,Button,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const { width, height } = Dimensions.get("window");
export default function Notification() {
  return (
    <SafeAreaView>
      <View
        style={{
          
          height: height,
          width: width,
          backgroundColor: "white"
        }}
      >
        <View
          style={{
            fontFamily: "glacialindi",
            flexDirection: "row",
            justifyContent: "space-between",
            marginRight: 10,
            marginLeft: 10,
            alignItems: "center",
            marginBottom:10,
            borderRadius:10,
            borderBottomWidth: 2,
            borderBottomColor: 'gray',
            padding:5

          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 5,
            
            }}
          >
            <ImageBackground
            source={require("../../assets/chevron-left-no-background.png")}
            style={{
              width: 30,
              height: 18,
              marginTop:10
            }}
            
          />
          </View>
         </View>
      </View>
    </SafeAreaView>
  );
}
import React from "react";
import {Dimensions,Image,ImageBackground,Text,View,TouchableOpacity,Button,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather,  } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");
export default function Notification({ navigation }) {
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
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom:10,
            borderRadius:10,
            borderBottomWidth: 2,
            borderBottomColor: 'gray',

          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 5,
            
            }}
          >
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
              <AntDesign name="left" size={30} color="black" style={{marginTop: 15, marginHorizontal: 10}}/>
            </TouchableOpacity>
    
            <ImageBackground
            source={require("../../assets/logo-no-background.png")}
            style={{
              width: 45,
              height: 45,
              marginTop: 9,
              marginBottom: 9,
            }}
            
          />
          </View>
          <Text
            style={{
              fontSize: 25,
              fontFamily: "boorsok",
              alignItems: "center"

            }}
          >
            Notification
          </Text>
          
          
            <TouchableOpacity onPress={()=>{navigation.navigate("Coursecontent")}}>
                <Feather name="search" size={28} color="black" style={{marginHorizontal:20}}/>
            </TouchableOpacity>
          
         
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "glacialindi",
              fontSize: 25,
            }}
          >
            Your Updates
          </Text>

          <TouchableOpacity>
            <Text
              style={{
                fontFamily: "glacialindi",
                fontSize: 15,
                textDecorationLine: "underline",
              }}
            >
              Read All
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontFamily: "glacialindi",
            fontSize: 20,
            margin: 10,
          }}
        >
          New
        </Text>
        <View
          style={{
            backgroundColor: "#D6EEFF",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <TouchableOpacity style={{
            padding: 10,
            flexDirection: "row",
            alignItems: "center",


          }}>
          <View>
            <AntDesign name="filetext1" size={30} color="black" style={{marginHorizontal: 10}}/>
          
          </View>
          
          <View style={{ padding: 10, flexDirection: "column" }}>
            <Text
              style={{
                fontFamily: "glacialindibold",
                marginBottom: 5,
                fontSize: 18
              }}
            >
              Python Topics Added
            </Text>
            <Text style={{ width: 250, fontFamily: 'glacialindi' }}>
            Check now the lesson to learn and discover what is python and its contex
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal: 25}}>
              <AntDesign name="ellipsis1" size={25} color="black" />
          </TouchableOpacity>
        </View>
        
        <View
          style={{
            backgroundColor: "white",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 10,
            marginTop: 10
          }}
        >
          <TouchableOpacity style={{
            padding: 10,
            flexDirection: "row",
            alignItems: "center",


          }}>
          <View>
            <AntDesign name="filetext1" size={30} color="black" style={{marginHorizontal: 10}}/>
          
          </View>
          
          <View style={{ padding: 10, flexDirection: "column" }}>
            <Text
              style={{
                fontFamily: "glacialindibold",
                marginBottom: 5,
                fontSize: 18
              }}
            >
              Python Topics Added
            </Text>
            <Text style={{ width: 250, fontFamily: 'glacialindi' }}>
            Check now the lesson to learn and discover what is python and its contex
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal: 25}}>
              <AntDesign name="ellipsis1" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "#D6EEFF",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 10,
            marginTop: 10
          }}
        >
          <TouchableOpacity style={{
            padding: 10,
            flexDirection: "row",
            alignItems: "center",


          }}>
          <View>
            <AntDesign name="filetext1" size={30} color="black" style={{marginHorizontal: 10}}/>
          
          </View>
          
          <View style={{ padding: 10, flexDirection: "column" }}>
            <Text
              style={{
                fontFamily: "glacialindibold",
                marginBottom: 5,
                fontSize: 18
              }}
            >
              Python Topics Added
            </Text>
            <Text style={{ width: 250, fontFamily: 'glacialindi' }}>
            Check now the lesson to learn and discover what is python and its contex
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal: 25}}>
              <AntDesign name="ellipsis1" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

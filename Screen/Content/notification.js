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
          <ImageBackground
            source={require("../../assets/logo-no-background.png")}
            style={{
              width: 30,
              height: 37,
              
            }}
            
          />
          </View>
          <Text
            style={{
              fontSize: 25,
              fontFamily: "carme",
              lineheight: "normal",
              fontWeight:'400',
              alignItems: "center"

            }}
          >
            Notification
          </Text>
          
          <View style={{
                borderRadius:200/2,
                height: 32,
                width: 32,
                borderWidth:1,


          }}
          >
             <ImageBackground
            source={require("../../assets/search-icon-no-background.png")}
            style={{
              width: 16,
              height:18,
              margin:6
            }}
            
          />
          </View>
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
        <TouchableOpacity
          style={{
            backgroundColor: "#D6EEFF",
            fontFamily: "glacialindi",
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 10,
            margin: 10,
          }}
        >
          <View>
          <ImageBackground
            source={require("../../assets/file_contract_icon.png")}
            style={{
              width: 25,
              height: 30,
              
            }}
            
          />
          
          </View>
          
          <View style={{ padding: 10, flexDirection: "column" }}>
            <Text
              style={{
                fontFamily: "glacialindi",
                fontWeight: "bold",
                marginBottom: 5,
              }}
            >
              Python Topics Added
            </Text>
            <Text style={{ width: 250 }}>
            Check now the lesson to learn and discover what is python and its contex
            </Text>
          </View>
          <View>
          <ImageBackground
            source={require("../../assets/ellipsis-no-background.png")}
            style={{
              width: 15,
              height: 15,
              
            }}
            
          />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            fontFamily: "glacialindi",
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 10,
            margin: 10,
          }}
        >
          <View>
          <ImageBackground
            source={require("../../assets/file_contract_icon.png")}
            style={{
              width: 30,
              height: 37,
              
            }}
            
          />
          </View>
          <View style={{ padding: 10, flexDirection: "column" }}>
            <Text
              style={{
                fontFamily: "glacialindi",
                fontWeight: "bold",
                marginBottom: 5,
              }}
            >
              Python Topics Added
            </Text>
            <Text style={{ width: 250}}>
            Check now the lesson to learn and discover what is python and its contex
            </Text>
          </View>
          <View>
          <ImageBackground
            source={require("../../assets/ellipsis-no-background.png")}
            style={{
              width: 15,
              height: 15,
              
            }}
            
          />
          </View>
          <View style={{ padding: 10, flexDirection: "column" }}>
            <Text
              style={{
                fontFamily: "glacialindi",
                fontWeight: "bold",
                marginBottom: 5,
              }}
            >
              Python Topics Added
            </Text>
            <Text style={{ width: 250}}>
            Check now the lesson to learn and discover what is python and its contex
            </Text>
          </View>
          <View>
          <ImageBackground
            source={require("../../assets/ellipsis-no-background.png")}
            style={{
              width: 15,
              height: 15,
              
            }}
            
          />
          </View>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
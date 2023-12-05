import React from "react";
import { Dimensions, Image, ImageBackground, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");
export default function Schools() {
  return (
    <View
      style={{
        width: width,
        height: height,
      }}
    >
      <View
        style={{
          width: width,
          height: 350,
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 20,
          padding: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <ImageBackground
            source={require("../../assets/ustp.jpg")}
            style={{
              width: 180,
              height: 180,
            }}
            borderRadius={8}
          >
            <Image
              source={require("../../assets/ustplogo.png")}
              style={{ width: 70, height: 70, borderRadius: 8 }}
            />
          </ImageBackground>
          <View>
            <Text
              style={{
                width: 165,
                fontFamily: "boorsok",
                fontSize: 15,
                lineHeight: 15,
                textAlign: "center",
              }}
            >
              University of Science and Technology of Southern Philippines
            </Text>
            <Text
              style={{
                width: 165,
                fontFamily: "glacialindi",
                fontSize: 15,
                textAlign: "center",
                marginTop: 10,
              }}
            >
              USTP has different campuses consist of Alubijid, CDO, Claveria and
              many more ......
            </Text>
          </View>
        </View>

        <Text style={{ textAlign: "center", marginTop: 10 }}>
          USTP Campuses offer different courses under different department. For
          CDO campus offer BS in information Technology, BS in technology
          Communication and Management and many more. For more info about USTP
          check the link ustp.edu.ph.
        </Text>
        <TouchableOpacity>
          <View
            style={{
              width: 150,
              height: 35,
              backgroundColor: "black",
              justifyContent: "center",
              borderRadius: 50,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontFamily: "glacialindibold",
                fontSize: 17,
              }}
            >
              Learn Course
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

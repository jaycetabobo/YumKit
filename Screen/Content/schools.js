import React from "react";
import { Dimensions, Image, ImageBackground, Text, View } from "react-native";

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
        <Text>
          University of Science and Technology of Southern Philippines
        </Text>
      </View>
    </View>
  );
}

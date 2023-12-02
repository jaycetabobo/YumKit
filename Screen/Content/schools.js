import React from "react";
import { Dimensions, ImageBackground, Text, View } from "react-native";

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
        }}
      >
        <ImageBackground
          source={require("../../assets/ustp.jpg")}
          style={{ width: 200, height: 200 }}
        ></ImageBackground>
      </View>
    </View>
  );
}

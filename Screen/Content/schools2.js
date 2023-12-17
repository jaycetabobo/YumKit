import React from "react";
import { Dimensions, Image, ImageBackground, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");
function Schools2() {
  return (
    <View style={{ alignItems: "center" }}>
      <View style={{ width: "98%" }}>
        <Text style={{ textAlign: "center" }}>
          University of Science and Technology of Southern Philippines
        </Text>
      </View>
      <Image
        source={require("../../assets/ustp2.jpg")}
        style={{ width: "98%", height: 150, marginTop: 30, borderRadius: 30 }}
      />
      <ImageBackground
        source={require("../../assets/bannerimage2.png")}
        style={{
          width: 300,
          height: 100,
          marginTop: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>BS in Information Technology</Text>
      </ImageBackground>
    </View>
  );
}

export default Schools2;

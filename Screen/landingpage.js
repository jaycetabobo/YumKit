import React from "react";
import { Dimensions, ImageBackground, Text, View, Button } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Landingpage({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/landingpagebg.png")}
      style={{ width: width, height: height }}
    >
      <View style={{ display: "flex", alignItems: "center", marginTop: 280 }}>
        <Text style={{ fontSize: 50 }}>SandySurf</Text>
        <Text style={{ fontSize: 15, width: 300, marginTop: 70 }}>
          SandySurf is not just an app; it's your passport to a world of
          information on a wide range of subjects. Whether you're a student, a
          curious mind, or simply someone looking to dive deep into a topic of
          interest, SandySurf is your ultimate companion.
        </Text>
      </View>
      <View
        style={{
          marginTop: 60,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            borderColor: "black",
            borderWidth: 2,
            width: 145,
            height: 40,
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            borderRadius: 100,
          }}
        >
          <Text>Login</Text>
        </View>
        <View
          style={{
            borderColor: "black",
            borderWidth: 2,
            width: 145,
            height: 40,
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            borderRadius: 100,
          }}
        >
          <Text>Register</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

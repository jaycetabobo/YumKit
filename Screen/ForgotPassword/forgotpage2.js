import React from "react";
import { View, Text, Dimensions, Image, TextInput, Button } from "react-native";
import { ImageBackground } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Forgotpage2({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/forgotbg.png")}
      style={{ width: width, height: height }}
    >
      <View style={{ display: "flex", alignItems: "center" }}>
        <Text
          style={{
            fontFamily: "anton",
            fontSize: 24,
            marginTop: 280,
            color: "#04745F",
          }}
        >
          Forgot your password?
        </Text>
        <Text
          style={{
            fontFamily: "anton",
            fontSize: 11,
            marginTop: 16,
            color: "#04745F",
          }}
        >
          Enter your email and we’ll send you a code to reset your password.
        </Text>
        <View
          style={{
            borderWidth: 2,
            borderRadius: 100,
            width: "80%",
            paddingLeft: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: 40,
            marginTop: 10,
          }}
        >
          <View style={{ width: "7%" }}></View>
          <TextInput
            placeholder="Enter new password"
            style={{ width: "75%" }}
          />
          <View>
            <Image
              source={require("../../assets/eye.png")}
              style={{
                width: 25,
                height: 25,
                marginLeft: 10,
              }}
            />
          </View>
        </View>
        <View
          style={{
            borderWidth: 2,
            borderRadius: 100,
            width: "80%",
            paddingLeft: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: 40,
            marginTop: 13,
          }}
        >
          <View style={{ width: "7%" }}></View>
          <TextInput
            placeholder="Confirm your password"
            style={{ width: "75%" }}
          />
          <Image
            source={require("../../assets/eye.png")}
            style={{
              width: 25,
              height: 25,
              marginLeft: 10,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#C2ECF8",
            width: 190,
            borderRadius: 100,
            marginTop: 24,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            title="Reset Password"
            onPress={() => navigation.navigate("Forgotpage1")}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

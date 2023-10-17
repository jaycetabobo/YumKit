import React from "react";
import { Dimensions, View, Text, Image, Button } from "react-native";
import { ImageBackground } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

function Forgotpage1({ navigation }) {
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
          <View style={{ width: "10%" }}>
            <Image
              source={require("../../assets/2.png")}
              style={{ width: 25, height: 25 }}
            />
          </View>
          <TextInput
            placeholder="Type your email address"
            style={{ width: "75%" }}
          />
          <View>
            <Image
              source={require("../../assets/arrow.png")}
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
          <View style={{ width: "10%" }}>
            <Image
              source={require("../../assets/code.png")}
              style={{ width: 25, height: 25 }}
            />
          </View>
          <TextInput placeholder="Type your code" style={{ width: "75%" }} />
        </View>
        <View
          style={{
            backgroundColor: "#C2ECF8",
            width: 150,
            borderRadius: 100,
            marginTop: 24,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            title="Continue"
            onPress={() => navigation.navigate("Forgotpage2")}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

export default Forgotpage1;

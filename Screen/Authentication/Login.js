import React from "react";
import {
  ImageBackground,
  View,
  Dimensions,
  Text,
  Image,
  TextInput,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function Login() {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/lqual.png")}
        style={{ width: width, height: height }}
      >
        <View style={{ display: "flex", alignItems: "center" }}>
          <Image
            source={require("../../assets/logo.png")}
            style={{ width: 80, height: 80, marginTop: 70 }}
          />
          <Text style={{ fontSize: 45, marginTop: 55 }}>Login</Text>
          <View style={{ width: "80%", marginTop: 50 }}>
            <Text>Username:</Text>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                borderWidth: 2,
                borderRadius: 100,
                paddingLeft: 10,
                paddingBottom: 5,
                paddingTop: 5,
              }}
            >
              <Image
                source={require("../../assets/2.png")}
                style={{ width: 25, height: 25 }}
              />
              <TextInput style={{ marginLeft: 10 }}>
                Input your username
              </TextInput>
            </View>
          </View>
          <View style={{ width: "80%", marginTop: 10 }}>
            <Text>Password:</Text>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                borderWidth: 2,
                borderRadius: 100,
                paddingLeft: 10,
                paddingBottom: 5,
                paddingTop: 5,
              }}
            >
              <Image
                source={require("../../assets/3.png")}
                style={{ width: 25, height: 25 }}
              />
              <TextInput style={{ marginLeft: 10 }} secureTextEntry={true}>
                Input your password
              </TextInput>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "black",
              width: 150,
              marginTop: 27,
              borderRadius: 100,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 25 }}>Login</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text style={{ marginTop: 40, fontSize: 15 }}>
              Or Sign Up using
            </Text>
            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
            >
              <Image
                source={require("../../assets/4.png")}
                style={{ width: 40, height: 40 }}
              />
              <Image
                source={require("../../assets/5.png")}
                style={{ width: 40, height: 40, marginLeft: 10 }}
              />
              <Image
                source={require("../../assets/6.png")}
                style={{ width: 40, height: 40, marginLeft: 10 }}
              />
            </View>
          </View>
          <Text style={{ marginTop: 30, fontSize: 15 }}>
            Don't have an account?
            <Text style={{ color: "#38B6FF" }}> Click Here.</Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

import React from "react";
import {
  ImageBackground,
  View,
  Dimensions,
  Text,
  Image,
  TextInput,
  Button,
} from "react-native";
import ProfileRoutes from "../../routes/profileRoutes";

const { width, height } = Dimensions.get("window");

export default function Login({ navigation }) {
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
          <Text style={{ fontSize: 45, marginTop: 55, fontFamily: "boorsok" }}>
            Login
          </Text>
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
              <TextInput
                style={{ marginLeft: 10 }}
                placeholder="Input your username"
              ></TextInput>
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
              <TextInput
                style={{ marginLeft: 10 }}
                secureTextEntry={true}
                placeholder="Input your username"
              ></TextInput>
            </View>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
  <Text onPress={() => navigation.navigate("Forgotpage1")}>Forgot Password?</Text>
</View>
          <View
            style={{
              backgroundColor: "black",
              width: 150,
              borderRadius: 100,
              marginTop: 8,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              title="login"
              onPress={() => navigation.navigate("Profile")}
            />
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
            <Text
              style={{ color: "#38B6FF" }}
              onPress={() => navigation.navigate("Signup")}
            >
              {" "}
              Click Here.
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

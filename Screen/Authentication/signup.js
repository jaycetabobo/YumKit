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

const { width, height } = Dimensions.get("window");

export default function Signup({ navigation }) {
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
          <Text style={{ fontSize: 45, marginTop: 5, fontFamily: "boorsok" }}>
            Sign up
          </Text>
          <View style={{ width: "80%", marginTop: 30 }}>
            <Text>Fullname:</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                borderWidth: 2,
                borderRadius: 100,
                paddingLeft: 10,
                paddingBottom: 5,
                paddingTop: 5,
              }}
            >
              <TextInput
                style={{ marginLeft: 10, width: 300 }}
                placeholder="Name"
              ></TextInput>
            </View>
            <Text>Birthdate:</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                borderWidth: 2,
                borderRadius: 100,
                paddingLeft: 10,
                paddingBottom: 5,
                paddingTop: 5,
              }}
            >
              <TextInput
                style={{ marginLeft: 10, width: 300 }}
                placeholder="MM/DD/YYYY"
              ></TextInput>
            </View>
            <Text>Location:</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                borderWidth: 2,
                borderRadius: 100,
                paddingLeft: 10,
                paddingBottom: 5,
                paddingTop: 5,
              }}
            >
              <TextInput
                style={{ marginLeft: 10, width: 300 }}
                placeholder="Location"
              ></TextInput>
            </View>
          </View>

          <View style={{ width: "80%", marginTop: 10 }}>
            <Text>PhoneNumber:</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                borderWidth: 2,
                borderRadius: 100,
                paddingLeft: 10,
                paddingBottom: 5,
                paddingTop: 5,
              }}
            >
              <TextInput
                style={{ marginLeft: 10, width: 300 }}
                placeholder="Phone Number"
              ></TextInput>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "black",
              width: 150,
              marginTop: 27,
              marginLeft: 25,
              borderRadius: 100,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              title="CONTINUE"
              onPress={() => navigation.navigate("Signup2")}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          ></View>
          <Text style={{ marginTop: 30, fontSize: 15 }}>
            Do you have an existing account?
            <Text
              style={{ color: "#38B6FF" }}
              onPress={() => navigation.navigate("Login")}
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

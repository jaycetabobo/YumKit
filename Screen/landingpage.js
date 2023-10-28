import React from "react";
import { Dimensions, ImageBackground, Text, View, Button } from "react-native";
import CustomButton from "../components/CustomButton";

const { width, height } = Dimensions.get("window");

export default function Landingpage({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/landingpagebg.png")}
      style={{ width: width, height: height }}
    >
      <View style={{ display: "flex", alignItems: "center", marginTop: 200 }}>
        <Text style={{ fontSize: 70, fontFamily: 'angelina' }}>SandySurf</Text>
        <Text style={{ fontSize: 18, width: 350, marginTop: 60, fontFamily: 'glacialindibold' }}>
          SandySurf is not just an app; it's your passport to a world of
          information on a wide range of subjects. Whether you're a student, a
          curious mind, or simply someone looking to dive deep into a topic of
          interest, SandySurf is your ultimate companion.
        </Text>
      </View>
      <View
        style={{
          marginTop: 70,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CustomButton text='login' onPress={ () => navigation.navigate('Login')}/>
        <CustomButton text='signup' onPress={ () => navigation.navigate('Signup')} />
      </View>
    </ImageBackground>
  );
}

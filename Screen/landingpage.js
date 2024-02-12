import React from "react";
import { Dimensions, ImageBackground, Text, View, Button, Image } from "react-native";
import CustomButton from "../components/CustomButton";

const { width, height } = Dimensions.get("window");
export default function Landingpage({ navigation }) {
  return (
    <View style={{ flex: 1 , height: height, width: width}}>
      <View style={{ display: "flex", alignItems: "center", marginTop: 100 }}>
        <Image
        source={require("../assets/logo-no-background.png")}
        style={{ height: 110, width: 100, marginVertical: 20}}
      />
      <ImageBackground
        source={require("../assets/bannerimage2.png")}
        style={{ height: 150, width: 'auto', marginVertical: 20}}
      >
        <Text style={{ fontSize: 70, fontFamily: 'angelina', height: 150, paddingHorizontal: 40 }}>SandySurf</Text>
      </ImageBackground>
        <Text style={{ fontSize: 18, width: 350, marginTop: 10, fontFamily: 'glacialindibold' }}>
          SandySurf is not just an app; it's your passport to a world of
          information on a wide range of subjects. Whether you're a student, a
          curious mind, or simply someone looking to dive deep into a topic of
          interest, SandySurf is your ultimate companion!!!!!.
        </Text>

      </View>
      <View
        style={{
          marginTop: 50,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CustomButton text='login' onPress={ () => navigation.navigate('Login')}/>
        <CustomButton text='signup' onPress={ () => navigation.navigate('Signup')} />
     
      </View>
      </View>
  );
}

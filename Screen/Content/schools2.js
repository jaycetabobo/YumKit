import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

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
      <ScrollView
        style={{
          backgroundColor: "pink",
          width: "98%",
          height: 350,
          marginTop: 20,
        }}
      >
        <Text>Programming</Text>
        <View
          style={{
            height: 170,
            width: 270,
            backgroundColor: "white",
            borderRadius: 20,
            marginTop: 10,
          }}
        >
          <Text>This is for image</Text>
        </View>
        <Text style={{ marginTop: 10 }}>
          Java is a high-level, class-based, object-oriented programming
          language. Developers use Java to construct applications in laptops,
          data centres, game consoles, scientific supercomputers, cell phones,
          and other devices.
        </Text>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: "black",
              width: 120,
              borderRadius: 20,
              padding: 5,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                textAlign: "center",
                color: "white",
              }}
            >
              View Now
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default Schools2;

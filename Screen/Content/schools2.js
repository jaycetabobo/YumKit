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
        <Text
          style={{
            textAlign: "center",
            fontFamily: "glacialindibold",
            fontSize: 20,
          }}
        >
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
          width: 280,
          height: 90,
          marginTop: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "glacialindibold",
            fontSize: 25,
            textAlign: "center",
          }}
        >
          BS in Information Technology
        </Text>
      </ImageBackground>
      <ScrollView
        style={{
          width: "98%",
          height: 350,
          marginTop: 20,
        }}
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "glacialindibold",
            fontSize: 18,
            textAlign: "center",
          }}
        >
          Programming
        </Text>
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#B7DCFE",
            width: "98%",
            borderRadius: 20,
            marginTop: 10,
            padding: 8,
          }}
        >
          <Text
            style={{
              fontFamily: "glacialindibold",
              marginTop: 5,
              fontSize: 30,
            }}
          >
            Java
          </Text>
          <Image
            source={require("../../assets/java.jpg")}
            style={{
              height: 170,
              width: 270,
              backgroundColor: "white",
              borderRadius: 20,
              marginTop: 10,
            }}
          />
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
        </View>
      </ScrollView>
    </View>
  );
}

export default Schools2;

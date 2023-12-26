import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native";
import { useRoute } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const Schools2 = () => {
  const route = useRoute();
  const { schoolId } = route.params;
  const [schoolDetails, setSchoolDetails] = useState(null);

  useEffect(() => {
    const fetchSchoolDetails = async () => {
      try {
        const response = await fetch(
          `https://c141-103-62-155-235.ngrok-free.app/schools/${schoolId}/`
        );
        const data = await response.json();
        setSchoolDetails(data);
      } catch (error) {
        console.error("Error fetching school details:", error);
      }
    };

    fetchSchoolDetails();
  }, [schoolId]);

  if (!schoolDetails) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

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
          {schoolDetails.name}
        </Text>
      </View>
      <Image
        source={require("../../assets/ustp2.jpg")}
        style={{ width: "98%", height: 150, marginTop: 30, borderRadius: 30 }}
      />
      <ScrollView style={{ height: 400, width: width, padding: 8 }}>
        {schoolDetails.courses.map((course, index) => (
          <View
            style={{
              alignItems: "center",
            }}
          >
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
              <View>
                <Text
                  key={index}
                  style={{
                    fontFamily: "glacialindibold",
                    fontSize: 25,
                    textAlign: "center",
                  }}
                >
                  {course}
                </Text>
              </View>
            </ImageBackground>
            <View
              style={{
                height: 280,
                width: "100%",
                backgroundColor: "pink",
                alignItems: "center",
                overflow: "hidden",
                borderRadius: 10,
                marginTop: 15,
              }}
            >
              <Text style={{ fontFamily: "boorsok", fontSize: 20 }}>Java</Text>
              <Image
                source={require("../../assets/java.jpg")}
                style={{ height: 190, width: "96 %", borderRadius: 15 }}
              ></Image>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>

    /*
    <View style={{ alignItems: "center" }}>
      <Text>Name: {schoolDetails.name}</Text>
      <Text>Description: {schoolDetails.description}</Text>
      <Text>Courses:</Text>
      <View>
        {schoolDetails.courses.map((course, index) => (
          <Text key={index}>{course}</Text>
        ))}
      </View>
      <Image
        source={{ uri: schoolDetails.image }}
        style={{ width: 200, height: 200 }}
      />
      <Image
        source={{ uri: schoolDetails.logo }}
        style={{ width: 100, height: 100 }}
      />
    </View>*/
  );
};

export default Schools2;

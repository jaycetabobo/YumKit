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
          `https://d5ce-103-62-155-235.ngrok-free.app/schools/${schoolId}/`
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
      <ScrollView
        style={{
          height: 450,
          width: width,
          paddingHorizontal: 8,
          paddingBottom: 15,
        }}
      >
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
                    fontSize: 22,
                    textAlign: "center",
                  }}
                >
                  {course.course}
                </Text>
              </View>
            </ImageBackground>
            {course.topics.map((topic, topicIndex) => (
              <View
                key={topicIndex}
                style={{
                  width: "100%",
                  alignItems: "center",
                  overflow: "hidden",
                  borderRadius: 10,
                  marginTop: 15,
                  borderWidth: 1,
                  paddingVertical: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    padding: 3,
                    fontFamily: "glacialindibold",
                    fontSize: 20,
                  }}
                >
                  {topic.topicname}
                </Text>
                <Image
                  source={require("../../assets/java.jpg")}
                  style={{
                    height: 190,
                    width: "96%",
                    borderRadius: 15,
                  }}
                />
                <Text
                  style={{
                    fontFamily: "glacialindi",
                    fontSize: 15,
                    paddingVertical: 8,
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  {topic.topicdescription}
                </Text>
              </View>
            ))}
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

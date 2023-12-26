import React, { useState, useEffect } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const url = "https://d5ce-103-62-155-235.ngrok-free.app/posts";
const schoolsurl = "https://d5ce-103-62-155-235.ngrok-free.app/schools";
const urlcomments = "https://d5ce-103-62-155-235.ngrok-free.app/comments";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const Schools = () => {
  const [searchText, setSearchText] = useState("");
  const [schoolsData, setSchoolsData] = useState([]);
  const [postdata, setPostData] = useState([]);
  const [universitiesData, setUniversitiesData] = useState([]);
  const navigation = useNavigation();

  const getPosts = () => {
    fetch(url)
      .then((res) => res.json())
      .then((resJson) => {
        console.log("posts: ", resJson);
        setPostData(resJson);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const getSchools = () => {
    fetch(schoolsurl)
      .then((res) => res.json())
      .then((resJson) => {
        console.log("schools: ", resJson);
        setSchoolsData(resJson);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getPosts();
    getSchools();
  }, []);

  return (
    <View style={{ padding: 7, height: 620 }}>
      <ScrollView>
        {schoolsData.map((item, index) => (
          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              marginBottom: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 3,
              }}
            >
              <ImageBackground
                source={{ uri: item.image }}
                style={{
                  width: 180,
                  height: 180,
                }}
                borderRadius={10}
              >
                <Image
                  source={{ uri: item.logo }}
                  style={{ width: 70, height: 70, borderRadius: 8 }}
                />
              </ImageBackground>
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text
                  style={{
                    fontFamily: "boorsok",
                    fontSize: 15,
                    lineHeight: 20,
                    textAlign: "center",
                    marginBottom: 5,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontFamily: "glacialindi",
                    fontSize: 15,
                    textAlign: "center",
                  }}
                >
                  {item.description}
                </Text>
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text style={{ marginVertical: 5 }}>Courses:</Text>
              {item.courses.map((course, courseIndex) => (
                <Text
                  key={courseIndex}
                  style={{
                    fontFamily: "glacialindibold",
                    marginBottom: 5,
                    textAlign: "center",
                  }}
                >
                  {course.course}
                </Text>
              ))}
            </View>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() =>
                navigation.navigate("Schools2", { schoolId: item.id })
              }
            >
              <Text
                style={{
                  backgroundColor: "black",
                  textAlign: "center",
                  fontFamily: "boorsok",
                  padding: 10,
                  justifyContent: "center",
                  borderRadius: 10,
                  marginVertical: 10,
                  color: "white",
                }}
              >
                Learn More
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Schools;

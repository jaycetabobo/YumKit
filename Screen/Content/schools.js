import React, { useState, useEffect } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const Schools = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [universitiesData, setUniversitiesData] = useState([]);

  useEffect(() => {
    // Fetch university data from the provided JSON API
    fetch("https://api.jsonbin.io/v3/b/65876e0e1f5677401f1282b4")
      .then((response) => response.json())
      .then((data) => setUniversitiesData(data.record))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredUniversities = universitiesData.filter((university) =>
    university.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={{ height: 620 }}>
      <ScrollView>
        <View style={{ padding: 10 }}>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              marginBottom: 10,
              paddingLeft: 10,
            }}
            placeholder="Search for universities..."
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
          />

          {filteredUniversities.map((university, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("Schools2")}
              style={{
                borderWidth: 1,
                borderColor: "black",
                borderRadius: 20,
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  padding: 10,
                }}
              >
                <ImageBackground
                  source={{ uri: university.image }}
                  style={{
                    width: 180,
                    height: 180,
                  }}
                  borderRadius={8}
                >
                  <Image
                    source={{ uri: university.logo }}
                    style={{ width: 70, height: 70, borderRadius: 8 }}
                  />
                </ImageBackground>
                <View style={{ marginLeft: 10, flex: 1 }}>
                  <Text
                    style={{
                      fontFamily: "boorsok",
                      fontSize: 15,
                      lineHeight: 15,
                      textAlign: "center",
                    }}
                  >
                    {university.name}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "glacialindi",
                      fontSize: 15,
                      textAlign: "center",
                      marginTop: 10,
                    }}
                  >
                    {university.description}
                  </Text>
                </View>
              </View>
              <Text style={{ textAlign: "center", marginTop: 10 }}>
                {`Courses: ${university.courses.join(", ")}`}
              </Text>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    width: 150,
                    height: 35,
                    backgroundColor: "black",
                    justifyContent: "center",
                    borderRadius: 50,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontFamily: "glacialindibold",
                      fontSize: 17,
                    }}
                  >
                    Learn Course
                  </Text>
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Schools;

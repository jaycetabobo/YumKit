import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import ButtonSubjects from "../../components/buttonSubjects";
import { AntDesign, Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

export default function GeneralSubject({ navigation }) {
  const [schoolsData, setSchoolsData] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Z3ro0o0/sandydata/main/db.json")
      .then((response) => response.json())
      .then((data) => setSchoolsData(data.schools))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleLearnMore = (school) => {
    console.log("Clicked Learn More:", school);

    if (school) {
      navigation.navigate("Schools2", {
        schoolName: school.name || "",
        schoolDescription: school.description || "",
        schoolImage: school.image || "",
        courses: school.courses || [],
        comments: school.comments || [],
      });
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 10,
          borderBottomWidth: 2,
          borderBottomColor: "gray",
          marginTop: 45,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign
              name="left"
              size={30}
              color="black"
              style={{ marginTop: 15, marginHorizontal: 10 }}
            />
          </TouchableOpacity>

          <ImageBackground
            source={require("../../assets/logo-no-background.png")}
            style={{
              width: 45,
              height: 45,
              marginTop: 9,
              marginBottom: 9,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 25,
            fontFamily: "boorsok",
            alignItems: "center",
          }}
        >
          General Subject
        </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("notification");
          }}
        >
          <Feather
            name="bell"
            size={28}
            color="black"
            style={{ marginHorizontal: 20 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {/* mao ni search bar */}
        <TextInput style={styles.searchBar} placeholder="Search subjects..." />

        {/* Gen sub ni */}
        <ScrollView>
          <View style={styles.gridContainer}>
            {schoolsData.map((school) => (
              <View key={school.id}>
                {/* Add a unique key for the school */}
                <Text style={styles.header}>{school.name}</Text>
                <Text>{school.description}</Text>
                <View style={styles.gridContainer}>
                  {school.courses.map((course) => (
                    <View key={course.courseid}>
                      {/* Add a unique key for the course */}
                      <Text style={styles.header}>{course.course}</Text>
                      {course.topics.map((topic) => (
                        <View key={topic.topicname}>
                          {/* Use a unique key for the topic */}
                          <Text style={styles.generalSubjectsText}>
                            {topic.topicname}
                          </Text>
                          <Text style={styles.generalSubjectsText2}>
                            {topic.topicdescription}
                          </Text>
                          <TouchableOpacity>
                            <ButtonSubjects
                              text="Learn More"
                              onPress={() => handleLearnMore(school)}
                            />
                          </TouchableOpacity>
                        </View>
                      ))}
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  headerContainer: {
    marginBottom: 10,
    borderColor: "black", // Add border color
    borderWidth: 1, // Add border width
    borderRadius: 5, // Add border radius
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  searchBar: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: "pink",
  },
  schoolContent: {
    borderWidth: 1,
    borderColor: "black",
    height: "auto",
    width: "48%", // Set the width to 48% for two items in a row
    borderRadius: 10,
    marginBottom: 10,
  },
  generalSubjectImage: {
    height: 69,
    borderRadius: 10,
    width: "auto",
    marginVertical: 10,
  },
  schoolContentText: {
    flex: 1,
    alignItems: "center",
  },
  generalSubjectsText2: {
    fontFamily: "glacialindi",
    fontSize: 13,
    marginTop: 5,
  },
});

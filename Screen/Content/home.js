import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import Carousel from "../../components/Carousel";
import { TouchableOpacity } from "react-native-gesture-handler";
import ButtonSubjects from "../../components/buttonSubjects";
import { useEffect, useState } from "react";

export default function Home({ navigation }) {
  const [schoolsData, setSchoolsData] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Z3ro0o0/sandydata/main/db.json")
      .then((response) => response.json())
      .then((data) => setSchoolsData(data.schools))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleLearnMore = (school) => {
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
    <ScrollView style={styles.container}>
      <View style={styles.TextContainer}>
        <Text style={styles.Text}>Your Course Matter!!</Text>
      </View>
      <Image
        source={require("../../assets/course.jpg")}
        style={styles.bannerImage}
      />
      <View style={styles.bannerImage2}>
        <ImageBackground source={require("../../assets/bannerimage2.png")}>
          <Text style={styles.bannerText}>Explore & Surf</Text>
        </ImageBackground>
      </View>
      <SafeAreaView>
        <Carousel />
      </SafeAreaView>
      <View style={styles.schoolText}>
        <Text style={styles.schoolTextDesign2}>School</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Schools");
          }}
        >
          <Text style={styles.schoolTextDesign}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.schoolContentScroll} horizontal={true}>
        <View style={styles.schoolContent}>
          <ImageBackground
            source={require("../../assets/ustp.jpg")}
            style={styles.schoolContentImageBG}
          >
            <Image
              source={require("../../assets/ustplogo.png")}
              style={styles.schoolContentUnderImageBG}
            />
          </ImageBackground>
          <View style={styles.schoolContentText}>
            <Text style={styles.schoolContentText2}>USTP</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.schoolText}>
        <Text style={styles.schoolTextDesign2}>General Subjects</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("generalsubjects")}
        >
          <Text style={styles.schoolTextDesign}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.schoolContentScroll} horizontal={true}>
        {schoolsData.map((school) =>
          school.courses
            .filter((course) => course.courseid === "2")
            .map((course) =>
              course.topics.map((topic) => (
                <View key={topic.topicname} style={styles.schoolContent}>
                  {/* <Image
                    source={{ uri: topic.image }}
                    style={styles.generalSubjectImage}
                  /> */}
                  <View style={styles.schoolContentText}>
                    <Text style={styles.generalSubjectsText}>
                      {topic.topicname}
                    </Text>
                    <Text style={styles.generalSubjectsText2}>
                      {topic.topicdescription}
                    </Text>
                    
                    <Text style={styles.generalSubjectsText}>
                      {school.name}
                    </Text>
                    <TouchableOpacity onPress={() => handleLearnMore(school)}>
                      <ButtonSubjects text="Learn More" />
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            )
        )}
      </ScrollView>

      <View style={styles.bottomSpace}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  TextContainer: {
    alignItems: "center",
  },
  Text: {
    fontFamily: "glacialindibold",
    fontSize: 30,
    marginTop: 30,
  },
  bannerImage: {
    width: "auto",
    height: 247,
    marginTop: 20,
  },
  bannerImage2: {
    alignItems: "center",
    width: "auto",
    marginTop: 20,
    marginBottom: 5,
  },
  bannerText: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    fontFamily: "boorsok",
    fontSize: 30,
  },
  schoolText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 20,
  },
  schoolTextDesign: {
    borderBottomWidth: 1,
    fontFamily: "glacialindi",
    fontSize: 15,
  },
  schoolTextDesign2: {
    fontFamily: "glacialindibold",
    fontSize: 18,
  },
  schoolContentScroll: {
    flexDirection: "row",
  },
  schoolContent: {
    borderWidth: 1,
    borderColor: "black",
    height: "auto",
    width: 166,
    borderRadius: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  schoolContentImageBG: {
    margin: 7.5,
    width: 149.4,
    height: 133.219,
  },
  schoolContentUnderImageBG: {
    borderRadius: 100,
    width: 48.291,
    height: 50.531,
  },
  schoolContentText: {
    flex: 1,
    alignItems: "center",
    padding: 5
  },
  schoolContentText2: {
    fontFamily: "boorsok",
    fontSize: 30,
  },
  generalSubjectImage: {
    height: 69,
    borderRadius: 10,
    width: 30,
    marginVertical: 10,
  },
  generalSubjectsText: {
    fontFamily: "glacialindibold",
    fontSize: 15,
    textAlign: "center",
  },
  generalSubjectsText2: {
    fontFamily: "glacialindi",
    fontSize: 13,
    marginVertical: 5,
    
  },

  bottomSpace: {
    marginVertical: 60,
  },
});

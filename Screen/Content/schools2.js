import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const Schools2 = () => {
  const route = useRoute();
  const { schoolId } = route.params;
  const [schoolDetails, setSchoolDetails] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [newUsername, setNewUsername] = useState("");

  useEffect(() => {
    const fetchSchoolDetails = async () => {
      try {
        const response = await fetch(
          `https://5b38-103-62-155-238.ngrok-free.app/schools/${schoolId}/`
        );
        const data = await response.json();
        setSchoolDetails(data);
      } catch (error) {
        console.error("Error fetching school details:", error);
      }
    };

    fetchSchoolDetails();
  }, [schoolId]);

  const handleCommentSubmit = () => {
    // Add logic to submit the new comment to the server or update state
    // This is just an example, adjust it based on your backend setup

    // Creating a copy of the comments array to avoid directly modifying state
    const updatedComments = [...(schoolDetails.comments || [])];

    // Adding the new comment to the local state
    updatedComments.push({ username: newUsername, comment: newComment });

    // Assuming you have an API endpoint to update comments
    // Modify this according to your API setup
    // This is just a dummy example, replace it with your actual API call
    fetch(`https://5b38-103-62-155-238.ngrok-free.app/schools/${schoolId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comments: updatedComments }),
    })
      .then((response) => response.json())
      .then((data) => {
        // If the API call is successful, update the state with the new comments
        setSchoolDetails({ ...schoolDetails, comments: data.comments });

        // Clear the input fields after submitting the comment
        setNewUsername("");
        setNewComment("");
      })
      .catch((error) => console.error("Error submitting comment:", error));
  };

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
        source={{ uri: schoolDetails.image }}
        style={{
          width: "98%",
          height: 150,
          marginVertical: 30,
          borderRadius: 30,
        }}
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
        <View style={{ marginLeft: 5 }}>
          <Text
            style={{
              marginVertical: 5,
              fontFamily: "glacialindibold",
              fontSize: 20,
            }}
          >
            Comments:
          </Text>
          {schoolDetails.comments.map((comment, commentIndex) => (
            <View
              key={commentIndex}
              style={{
                marginVertical: 5,
                marginLeft: 5,
                backgroundColor: "#F0EDEB",
                padding: 6,
                borderRadius: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  marginVertical: 4,
                  fontFamily: "glacialindibold",
                }}
              >
                {comment.username}:
              </Text>
              <Text>{comment.comment}</Text>
            </View>
          ))}
        </View>
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

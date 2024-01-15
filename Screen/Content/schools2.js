import React from "react";
import { View, Text, Image, Dimensions, ImageBackground } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const Schools2 = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { schoolName, schoolImage, courses, comments } = route.params;

  return (
    <View style={{ alignItems: "center" }}>
      <Text
        style={{
          textAlign: "center",
          fontFamily: "glacialindibold",
          fontSize: 20,
        }}
      >
        {schoolName}
      </Text>

      <Image
        source={{ uri: schoolImage }}
        style={{
          width: "98%",
          height: 150,
          marginVertical: 30,
          borderRadius: 30,
        }}
      />

      <ScrollView
        style={{
          height: 400,
          width: width,
        }}
      >
        <View style={{ alignItems: "center" }}>
          {courses && courses.length > 0 && (
            <View
              style={{
                width: "100%",
                paddingHorizontal: 10,
                alignItems: "center",
              }}
            >
              {courses.map((course, courseIndex) => (
                <View key={courseIndex} style={{ alignItems: "center" }}>
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
                        fontSize: 22,
                        textAlign: "center",
                      }}
                    >
                      {course.course}
                    </Text>
                  </ImageBackground>
                  {course.topics && course.topics.length > 0 && (
                    <View
                      style={{
                        width: width,
                        padding: 10,
                      }}
                    >
                      {course.topics.map((topic, topicIndex) => (
                        <View
                          key={topicIndex}
                          style={{
                            alignItems: "center",
                            backgroundColor: "#B7DCFE",
                            borderRadius: 20,
                            marginVertical: 10,
                          }}
                        >
                          <Text
                            style={{
                              textAlign: "center",
                              padding: 3,
                              fontFamily: "glacialindibold",
                              fontSize: 20,
                              marginVertical: 10,
                            }}
                          >
                            {topic.topicname}
                          </Text>

                          <Image
                            source={{ uri: schoolImage }}
                            style={{
                              height: 250,
                              width: "96%",
                              borderRadius: 15,
                            }}
                          />
                          <Text style={{ textAlign: "center", marginTop: 10 }}>
                            {topic.topicdescription}
                          </Text>
                          <TouchableOpacity
                            onPress={() =>
                              navigation.navigate("Coursecontent", {
                                topicname: topic.topicname,
                                topicdescription: topic.topicdescription,
                                littleinformation: topic.littleinformation,
                              })
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
                    </View>
                  )}
                </View>
              ))}
            </View>
          )}
        </View>

        {comments && comments.length > 0 && (
          <View
            style={{
              paddingHorizontal: 10,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                marginVertical: 5,
                fontFamily: "glacialindibold",
                fontSize: 20,
              }}
            >
              Comments:
            </Text>
            {comments.map((comment, commentIndex) => (
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
                  {comment.username}
                </Text>
                <Text>{comment.comment}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Schools2;

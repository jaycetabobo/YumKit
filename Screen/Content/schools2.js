import React, {useState} from "react";
import { View, ScrollView, Text, Image, Dimensions, ImageBackground, Alert, Modal, StyleSheet, Pressable,TextInput, TouchableOpacity} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { Feather, AntDesign } from '@expo/vector-icons';
import { commentInput } from "./reducer/commentSlice";


const { width, height } = Dimensions.get("window");

const Schools2 = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { schoolName, schoolImage, courses, comments } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const comment = useSelector((state)=> state.comment.comments);
  const users = useSelector((state) => state.auth.users);
  const Tokens = useSelector((state) => state.auth.logInToken);
  const token = Tokens.token;
  const matchingUser = users.find((users) => users.username === token);
  const username = matchingUser.username;
  const dispatch = useDispatch();
  const today = new Date();
  const todayDate = today.getMonth()+1 + "/" +today.getDate() + "/" + today.getFullYear();
  const [userComments, setUserComments] = useState({
    comment: "",
    date: ""
  });
  const handleTextChange = (text) => {
    setUserComments({ ...userComments, comment: text, date: todayDate})
  };

  const handleCommentSubmit = () => {
    // Dispatch the user comment
    dispatch(commentInput([...comment, userComments]));

    // Clear the input field for the next comment
    setUserComments({
      comment: "",
      date: ""
    });
  };
  const reversedComments = comment.slice().reverse();


  return (
    <View style={{ alignItems: "center", backgroundColor: "white" }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={{flex: 12, textAlign: 'center', paddingLeft: 30,fontFamily: "boorsok", fontSize: 20 }}>
                Comments
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <AntDesign name="close" size={22} color="white" />
              </Pressable>
            </View>

            <ScrollView style={{width: '100%'}}>
              {
              reversedComments.map((obj, index) => 
              <View key={index} style={{flexDirection: 'row', alignItems: 'flex-start', width: '80%',marginTop: 10}}>
                <Image
                  source={require("../../assets/profileImage.png")}
                  style={{width: 40, height: 40, marginHorizontal: 10, borderRadius: 100}}
                ></Image>
                <View style={{borderRadius: 20, borderWidth: 2, padding: 15}}>
                  <Text style={{fontSize: 14, marginBottom: 15}}>
                    {obj.comment}
                  </Text>
                  <Text style={{fontFamily: 'glacialindi', fontSize: 12}}>
                    {obj.date}          {username}
                  </Text>
                </View>
                
              </View>)
            }
            </ScrollView>

            <View style={{flexDirection: 'row', marginTop: 'auto', marginBottom: 10, paddingTop: 15}}>
              <Image
                source={require("../../assets/profileImage.png")}
                style={{width: 40, height: 40, marginHorizontal: 10, borderRadius: 100}}
                ></Image>
              <View style={styles.textInputField}>
                <TextInput
                  style={{ marginHorizontal: 10, width: '88%' }}
                  placeholder = 'add comments'
                  multiline= {true}
                  value={userComments.comment}
                  onChangeText={handleTextChange}
                />
            </View>
            <TouchableOpacity style={{padding: 10}} onPress={handleCommentSubmit}>
              <Feather name="corner-right-up" size={24} color="black"/>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
          marginBottom: 0,
          borderRadius: 30,
        }}
      />
      <View style={{
          textAlign: "center"
        }}>
          <TouchableOpacity onPress={() =>setModalVisible(true)}>
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
                See Comments
              </Text>
            </TouchableOpacity>
      </View>
      <ScrollView
        style={{
          height: "64%",
          width: width
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

        {/* {comments && comments.length > 0 && (
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
        )} */}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: '90%',
    width: '90%'
  },
  button: {
    borderRadius: 20,
    padding: 8,
    elevation: 2,
    flex: 1
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  textInputField:{
    display: "flex",
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 20,
    paddingLeft: 5,
    paddingBottom: 5,
    paddingTop: 5,
    width: '70%'
  }
});

export default Schools2;

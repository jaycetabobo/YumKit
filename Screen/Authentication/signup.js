import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Dimensions,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback, 
  Keyboard, 
  StyleSheet,
  Alert
} from "react-native";
import CustomButton from '../../components/CustomButton';

const { width, height } = Dimensions.get("window");

export default function Signup({ navigation, }) {

  const [userData, setUserData] = useState({
    Firstname: "",
    Lastname:"",
    birthdate: "",
    location: "",
    phoneNumber: ""
  },
);

  const handleonChange = () => {
    
  }

  const handleSubmit = () => {
    // Check if any of the text inputs are empty.
    if (userData.Firstname !== "" 
    && userData.Lastname !== "" 
    && userData.birthdate !== "" 
    && userData.location !== ""
    && userData.phoneNumber !== "") {
      // Set the user data state variable
      setUserData(userData);

      // Navigate to the `profile.js` screen
      navigation.navigate("Signup2", { userData });
    } else {
      // If any of the text inputs are empty, display the alert.
      Alert.alert(
        "Please fill in all of the text inputs before continuing.",
        "",
        [{ text: "OK" }]
      );
      
    }
  };

  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
      <ImageBackground
        source={require("../../assets/lqual.png")}
        style={{ width: width, height: height }}
      >
        <View style={{ display: "flex", alignItems: "center" }}>
          <Image
            source={require("../../assets/logo.png")}
            style={{ width: 80, height: 80, marginTop: 70 }}
          />
          <Text style={{ fontSize: 45, marginTop: 5, fontFamily: 'boorsok' }}>Sign up</Text>

          <View style={{flexDirection: 'row', marginTop: 30}}>
            <View style={{ width: "39%", marginRight: 5 }}>
              <Text style={styles.aboveTextOfTextInput}>Firstname:</Text>
              <View style={styles.textInputField}>
                <TextInput
                  style={{ marginLeft: 10, width: 150 }}
                  placeholder = 'e.g Jonie boy'
                  value={userData.Firstname}
                  onChangeText={(text) => setUserData({ ...userData, Firstname: text })}
                />
              
              </View>
            </View>
            <View style={{ width: "39%" }}>
              <Text style={styles.aboveTextOfTextInput}>Lastname:</Text>
              <View style={styles.textInputField}>
                <TextInput
                  style={{ marginLeft: 10, width: 150 }}
                  placeholder = 'e.g Sumalpong'
                  value={userData.Lastname}
                  onChangeText={(text) => setUserData({ ...userData, Lastname: text })}
                />
              
              </View>
            </View>
          </View>
          <View style={{ width: "80%" }}>
            <Text style={styles.aboveTextOfTextInput2}>Birthdate:</Text>
            <View style={styles.textInputField}>
              <TextInput
                style={{ marginLeft: 10, width: 300 }}
                keyboardType="numeric"
                placeholder = 'MM-DD-YY'
                value={userData.birthdate}
                onChangeText={(text) => setUserData({ ...userData, birthdate: text.trim() })}
              />
            </View>
            <Text style={styles.aboveTextOfTextInput2}>Location:</Text>
            <View style={styles.textInputField}>
              <TextInput
                style={{ marginLeft: 10, width: 300 }}
                placeholder = 'e.g CDO'
                value={userData.location}
                onChangeText={(text) => setUserData({ ...userData, location: text })}
              />
              
            </View>

            <Text style={styles.aboveTextOfTextInput2}>PhoneNumber:</Text>
            <View style={styles.textInputField}>
              <TextInput
                style={{ marginLeft: 10, width: 300 }}
                keyboardType="numeric"
                placeholder = 'e.g 09427537856'
                value={userData.phoneNumber}
                onChangeText={(text) => setUserData({ ...userData, phoneNumber: text.trim() })}
              />
              
            </View>
          </View>
          <CustomButton text='Continue' onPress={handleSubmit}/>
          <Text style={{ marginTop: 30, fontSize: 15 }}>
            Do you have an existing account?
            <Text style={{ color: "#38B6FF" }} onPress={ () => navigation.navigate('Login', { userData2 })}> Click Here.</Text>
          </Text>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  aboveTextOfTextInput:{
    marginLeft: 15
  },
  aboveTextOfTextInput2:{
    marginLeft: 15,
    marginTop: 20
  },
  textInputField:{
    display: "flex",
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 100,
    paddingLeft: 10,
    paddingBottom: 5,
    paddingTop: 5,
  }
})
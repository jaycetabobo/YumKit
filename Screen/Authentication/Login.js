import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Dimensions,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import CustomButton from "../../components/CustomButton";


const { width, height } = Dimensions.get("window");

export default function Login({ navigation, route }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const userData2 = route.params.userData2;
  // const userData = route.params.userData;
  const handleLoginSubmit = ()=>{
    navigation.navigate('Profile');
    // if (userData2.username === username && userData2.password === password) {
    //   // Navigate to the profile page
    //   navigation.navigate('Profile');
    // } else {
    //   // Display an error message
    //   alert('Invalid username or password');
    // }
  }

  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
      <View>
        <ImageBackground
          source={require("../../assets/lqual.png")}
          style={{ width: width, height: height }}
        >
          <View style={{ display: "flex", alignItems: "center" }}>
            <Image
              source={require("../../assets/logo.png")}
              style={{ width: 80, height: 80, marginTop: 70 }}
            />
            <Text style={{ fontSize: 45, marginTop: 55, fontFamily: 'boorsok' }}>Login</Text>
            <View style={{ width: "80%", marginTop: 50 }}>
              <Text>Username:</Text>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  borderWidth: 2,
                  borderRadius: 100,
                  paddingLeft: 10,
                  paddingBottom: 5,
                  paddingTop: 5,
                }}
              >
                <Image
                  source={require("../../assets/2.png")}
                  style={{ width: 25, height: 25 }}
                />
                <TextInput style={{ marginLeft: 10,width: 300 }} placeholder = 'Input your username' onChangeText={(text) => setUsername(text)}>
                </TextInput>
              </View>
            </View>
            <View style={{ width: "80%", marginTop: 10 }}>
              <Text>Password:</Text>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  borderWidth: 2,
                  borderRadius: 100,
                  paddingLeft: 10,
                  paddingBottom: 5,
                  paddingTop: 5,
                  marginBottom: 27
                }}
              >
                <Image
                  source={require("../../assets/3.png")}
                  style={{ width: 25, height: 25 }}
                />
                <TextInput style={{ marginLeft: 10, width: 300 }} secureTextEntry={true} placeholder = 'Input your password' onChangeText={(text) => setPassword(text)}>
                  
                </TextInput>
              </View>
            </View>
            <CustomButton text='LOGIN' onPress={handleLoginSubmit}/>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}>
                Or Sign Up using
              </Text>
              <View
                style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
              >
                <Image
                  source={require("../../assets/4.png")}
                  style={{ width: 40, height: 40 }}
                />
                <Image
                  source={require("../../assets/5.png")}
                  style={{ width: 40, height: 40, marginLeft: 10 }}
                />
                <Image
                  source={require("../../assets/6.png")}
                  style={{ width: 40, height: 40, marginLeft: 10 }}
                />
              </View>
            </View>
            <Text style={{ marginTop: 30, fontSize: 15 }}>
              Forgot your password?
              <TouchableOpacity onPress={ () => navigation.navigate('Forgotpage1')}>
              <Text style={{ color: "#38B6FF"}}> Click Here.</Text>
              </TouchableOpacity>
            </Text>
            <TouchableOpacity style={styles.createAccountButton} onPress={ () => navigation.navigate('Signup')}>
              <Text style={styles.createAccountButtonText}>Create an Account</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles= StyleSheet.create({
    createAccountButton: {
      borderColor: "black",
      borderWidth: 2,
      width: 250,
      height: 40,
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
      borderRadius: 100,
      marginTop: 80,
      backgroundColor: 'white'
    },
    createAccountButtonText:{
      fontSize: 15
    }
});

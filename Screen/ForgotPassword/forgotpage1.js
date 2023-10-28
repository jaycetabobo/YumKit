import React from "react";
import { Dimensions,
  View,
  Text, 
  Image, 
  Button, 
  StyleSheet, 
  TouchableOpacity, 
  ImageBackground, 
  TouchableWithoutFeedback, 
  Keyboard, 
  Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import CustomButton from "../../components/CustomButton";
import { useState, useEffect } from "react";

const { width, height } = Dimensions.get("window");

function Forgotpage1({ navigation }) {
  const [email, setEmail] = useState("");
  const [codes, setCodes] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      setErrorMessage("");
    }else if(email.length===0){
      setErrorMessage("");
    }else{
      setErrorMessage("Please enter a valid email address.");
    }
  }, [email]);

  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handleCodeChange = (text) => {
    setCodes(text);
  };

  const handleEmailArrow = () => {
    if (email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      Alert.alert('Code Successfully Send!! Code = 12345');
    }
  }

  const handleContinue = () => {
    // Verify the email address and send a code to the user.
    if(codes == 12345 && email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      navigation.navigate('Forgotpage2')
    }else if (codes != 12345 && email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      Alert.alert('Incorrect Code!!!! Please Try Again.'); 
    }
  };


  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
      <ImageBackground
        source={require("../../assets/forgotbg.png")}
        style={{ width: width, height: height }}
      >
        <View style={{ display: "flex", alignItems: "center" }}>
          <Text
            style={{
              fontFamily: 'anton',
              fontSize: 24,
              marginTop: 250,
              color: "#04745F",
            }}
          >
            Forgot your password?
          </Text>
          <Text
            style={{
              fontFamily: "anton",
              fontSize: 11,
              marginTop: 16,
              color: "#04745F",
              marginBottom:10
            }}
          >
            Enter your email and we’ll send you a code to reset your password.
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              borderWidth: 2,
              borderRadius: 100,
              width: "72%",
              paddingLeft: 10,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: 40,
              marginTop: 10,
            }}
          >
            <View style={{ width: "10%" }} >
              <Image
                source={require("../../assets/2.png")}
                style={{ width: 25, height: 25 }}
              />
            </View>
            <TextInput
              placeholder="Type your email address"
              style={{ width: "75%" }}
              onChangeText={handleEmailChange}
              value={email}
            />
            
          </View>
          <TouchableOpacity onPress={handleEmailArrow}>
              <Image
                source={require("../../assets/arrow.png")}
                style={{
                  width: 25,
                  height: 25,
                  marginLeft: 10,
                  marginTop: 10
                }}
              />
            </TouchableOpacity>
          </View>
          {errorMessage && (
            <Text style={{ color: "red", fontSize: 12, marginTop: 5 }}>
              {errorMessage}
            </Text>
          )}

          <View
            style={{
              borderWidth: 2,
              borderRadius: 100,
              width: "80%",
              paddingLeft: 10,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: 40,
              marginTop: 13,
            }}
          >
            <View style={{ width: "10%" }}>
              <Image
                source={require("../../assets/code.png")}
                style={{ width: 25, height: 25 }}
              />
            </View>
            <TextInput placeholder="Type your code" style={{ width: "75%" }} onChangeText={handleCodeChange} value={codes} />
          </View>
          <View
            style={{
              marginTop: 24,
            }}
          >
            <CustomButton text='Continue' onPress={handleContinue}/>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles= StyleSheet.create({
  correctInput: {

  }
});

export default Forgotpage1;

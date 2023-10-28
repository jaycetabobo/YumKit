import React from "react";
import {
  ImageBackground,
  View,
  Dimensions,
  Text,
  Image,
  TextInput,
  Alert,
  TouchableWithoutFeedback, 
  Keyboard, 
  StyleSheet
} from "react-native";
import { useState,useEffect } from "react";
import { Entypo } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton';

const { width, height } = Dimensions.get("window");

export default function Signup2({ navigation, route }) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [retypeSecureTextEntry, setRetypeSecureTextEntry] = useState(true);
  const [icon, setIcon] = useState('eye-with-line');
  const [errorMessage, setErrorMessage] = useState("");

  const handleShowHidePassword = () => {
    setSecureTextEntry(!secureTextEntry);
    setIcon(secureTextEntry ? 'eye' : 'eye-with-line');
    setRetypeSecureTextEntry(!retypeSecureTextEntry);
  };
  
  const [signedUp, setSignedUp] = useState(false);

  const userData = route.params.userData;

  const [userData2, setUserData2] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  }, 
);
  const usernames = userData2.username;
  const emails = userData2.email;
  const passwords = userData2.password;
  const confirmPasswords = userData2.confirmpassword;
  const [errorMessageWeak, setErrorMessageWeak] = useState("");
  const [errorMessageModerate, setErrorMessageModerate] = useState("");
  const [errorMessageStrong, setErrorMessageStrong] = useState("");
  const [errorMessageConfirm, setErrorMessageConfirm] = useState("");
  const regexTest = emails.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  useEffect(() => {
    if (passwords.length>0 && passwords.length<=8){
      setErrorMessageWeak("WEAK");
      setErrorMessageStrong("");
      setErrorMessageModerate("");
    } else if (passwords.length>=8 && passwords.length <=15){
      setErrorMessageModerate("MODERATE");
      setErrorMessageWeak("");
      setErrorMessageStrong("");
    } else if (passwords.length>=15){
      setErrorMessageStrong("STRONG");
      setErrorMessageModerate("");
      setErrorMessageWeak("");
    } else {
      setErrorMessageStrong("");
      setErrorMessageModerate("");
      setErrorMessageWeak("");
    }
  }, [userData2.password]);

  useEffect(() => {
    if (confirmPasswords === passwords) {
      setErrorMessageConfirm("");
    } else {
      setErrorMessageConfirm("Re-type Password didn't match to the Password.");
    }
  }, [confirmPasswords]);

  useEffect(() => {
    if (regexTest){
      setErrorMessage("");
    }else if(emails.length===0){
      setErrorMessage("");
    }else{
      setErrorMessage("Please enter a valid email address.");
    }
  }, [emails]);

  const handlePasswordChange = (text) => {
    setUserData2({ ...userData2, password: text })
  }

  const handleEmailChange = (text) => {
    setUserData2({ ...userData2, email: text.trim() })
  };

  const handleSubmit = () => {
    if (confirmPasswords === passwords && regexTest &&  usernames !== "") {
      // Set the user data state variable
    setUserData2(userData2);

    setSignedUp(true);
    Alert.alert('Account created successfully!', null, [
      { text: 'OK', onPress: () => navigation.navigate("Login", { userData,userData2 })},
    ], {
      titleStyle: {
        color: 'yellow',
        fontWeight: 'bold',
        
      },
    }); 
    }  else if(confirmPasswords === "" || passwords === "" || emails === "" || usernames === ""){
      Alert.alert('Unfilled Inputs!!! Please Try Again.');
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
          <View style={{ width: "80%", marginTop: 30 }}>
            <Text style={styles.aboveTextOfTextInput}>Username:</Text>
            <View style={styles.textInputField}>
              <TextInput style={{ marginLeft: 10, width: 300 }} placeholder = 'Username'
              value={userData2.username}
              onChangeText={(text) => setUserData2({ ...userData2, username: text.trim() })}
              >
              </TextInput>
            </View>
            <Text style={styles.aboveTextOfTextInput2}>Email:</Text>
            <View style={styles.textInputField}>
              <TextInput style={{ marginLeft: 10, width: 300}} placeholder = 'Email'
                value={userData2.email}
                onChangeText={handleEmailChange}
              >
              </TextInput>
            </View>
            {errorMessage && (
            <Text style={{ color: "red", fontSize: 12, marginTop: 5, marginLeft: 12}}>
              {errorMessage}
            </Text>
          )}
            
            
          </View>
          
          <View style={{ width: "80%" }}>
            <Text style={styles.aboveTextOfTextInput2}>Password:</Text>
            <View style={styles.textInputField}>
              <TextInput  secureTextEntry={secureTextEntry} placeholder = 'Password' style={{marginLeft:10, width: '85%'}}
                value={userData2.password}
                onChangeText={handlePasswordChange}
              > 
              </TextInput>
              <Entypo name={icon} size={24} color="black" style={{ width: 100 }} onPress={handleShowHidePassword}

              />
              
            </View>
            <View>
              {errorMessageWeak && (
                <Text style={{ color: "red", fontSize: 15, marginTop: 5, marginRight: 240, marginLeft: 20}}>
                  {errorMessageWeak}
                </Text>
              )}
            {errorMessageModerate && (
                <Text style={{ color: "orange", fontSize: 15, marginTop: 5, marginRight: 240, marginLeft: 20}}>
                  {errorMessageModerate}
                </Text>
              )}
              {errorMessageStrong && (
                <Text style={{ color: "green", fontSize: 15, marginTop: 5, marginRight: 240, marginLeft: 20}}>
                  {errorMessageStrong}
                </Text>
              )}
            </View>
            <Text style={styles.aboveTextOfTextInput2}>Re-type Password:</Text>
            <View style={styles.textInputField}>
              <TextInput style={{ marginLeft: 10, width: 300 }} secureTextEntry={retypeSecureTextEntry} placeholder = 'Re-type Password'
                value={userData2.confirmpassword}
                onChangeText={(text) => setUserData2({ ...userData2, confirmpassword: text })}
              > 
              </TextInput>
            
            </View>
            <View>
              {errorMessageConfirm && (
                  <Text style={{ color: "red", fontSize: 15, marginLeft: 20}}>
                    {errorMessageConfirm}
                  </Text>
                )}
            </View>
          </View>
          <CustomButton text='signup' onPress={handleSubmit}/>
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
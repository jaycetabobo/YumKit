import React from "react";
import { View, 
  Text, 
  Dimensions, 
  Image, 
  TextInput, 
  Button,
  TouchableWithoutFeedback, 
  Keyboard, 
  ImageBackground} from "react-native";
import { useState, useEffect } from "react";
import { Entypo } from '@expo/vector-icons';
import CustomButton from "../../components/CustomButton";
    

const { width, height } = Dimensions.get("window");

export default function Forgotpage2({ navigation }) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [retypeSecureTextEntry, setRetypeSecureTextEntry] = useState(true);
  const [icon, setIcon] = useState('eye-with-line');
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessageWeak, setErrorMessageWeak] = useState("");
  const [errorMessageModerate, setErrorMessageModerate] = useState("");
  const [errorMessageStrong, setErrorMessageStrong] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (confirmPassword === password) {
      setErrorMessage("");
    } else {
      setErrorMessage("Confirm Password didn't match to the Password.");
    }
  }, [confirmPassword]);

  useEffect(() => {
    if (password.length>0 && password.length<=8){
      setErrorMessageWeak("WEAK");
      setErrorMessageStrong("");
      setErrorMessageModerate("");
    } else if (password.length>=8 && password.length <=15){
      setErrorMessageModerate("MODERATE");
      setErrorMessageWeak("");
      setErrorMessageStrong("");
    } else if (password.length>=15){
      setErrorMessageStrong("STRONG");
      setErrorMessageModerate("");
      setErrorMessageWeak("");
    } else {
      setErrorMessageStrong("");
      setErrorMessageModerate("");
      setErrorMessageWeak("");
    }
  }, [password]);

  const handleShowHidePassword = () => {
    setSecureTextEntry(!secureTextEntry);
    setIcon(secureTextEntry ? 'eye' : 'eye-with-line');
    setRetypeSecureTextEntry(!retypeSecureTextEntry);
  };

  const handlePasswordChange = (text) => {
    setPassword(text)
  }

  const handleResetPass = () =>{

    if (confirmPassword === password) {
      navigation.navigate('Login')
    }
  }

  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
        <View style={{ display: "flex", alignItems: "center", flex: 1, backgroundColor: 'white'}}>
           <ImageBackground
            source={require("../../assets/bannerimage2.png")}
            style={{ height: 100, width: 'auto', marginVertical: 50}}
          >
            <Text
            style={{
              fontFamily: 'anton',
              fontSize: 24,
              marginVertical: 25,
              color: "black",
              paddingHorizontal: 40
            }}
          >
            Reset your Password
          </Text>
          </ImageBackground>
          <Text
            style={{
              fontFamily: "anton",
              fontSize: 13,
              marginTop: 16,
              color: "black",
              marginBottom:10
            }}
          >
            Please enter a new password.
          </Text>
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
              marginTop: 10,
            }}
          >
            <Image
                  source={require("../../assets/3.png")}
                  style={{ width: 25, height: 25 ,marginRight: 5 }}
                />
            <TextInput
              secureTextEntry={secureTextEntry}
              placeholder="Enter new password"
              style={{ width: "75%" }}
              onChangeText={handlePasswordChange}
              value={password}
            />
            <Entypo name={icon} size={24} color="black" style={{ width: 100 }} onPress={handleShowHidePassword}/>
          </View>
          <View>
          {errorMessageWeak && (
              <Text style={{ color: "red", fontSize: 15, marginTop: 5, marginRight: 240}}>
                {errorMessageWeak}
              </Text>
            )}
          {errorMessageModerate && (
              <Text style={{ color: "orange", fontSize: 15, marginTop: 5, marginRight: 240}}>
                {errorMessageModerate}
              </Text>
            )}
            {errorMessageStrong && (
              <Text style={{ color: "green", fontSize: 15, marginTop: 5, marginRight: 240}}>
                {errorMessageStrong}
              </Text>
            )}
          </View>
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
              marginTop: 20,
              
            }}
          >
            <Image
                  source={require("../../assets/3.png")}
                  style={{ width: 25, height: 25 ,marginRight: 5 }}
                />
            <TextInput
              secureTextEntry={retypeSecureTextEntry}
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}
              placeholder="Confirm your password"
              style={{ width: "75%" }}
            />
            
          </View>
          <View>
          {errorMessage && (
              <Text style={{ color: "red", fontSize: 15}}>
                {errorMessage}
              </Text>
            )}
          </View>
          <CustomButton text='Reset' onPress={handleResetPass}/>
        </View>
    </TouchableWithoutFeedback>
  );
}

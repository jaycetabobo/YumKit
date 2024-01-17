import { 
  StyleSheet, 
  ImageBackground,
  View,
  Dimensions,
  Text,
  Image,
  ScrollView,
  Keyboard
 } from 'react-native';
 import ExpandableText from '../../components/Expandable';
 import { useDispatch, useSelector } from "react-redux";

import React, { useState, useEffect } from "react";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LOGOUT } from '../Authentication/reducer/authSlice';
import { ActivityIndicator } from 'react-native-paper';


export default function Profile() {
  const titles = ["The Basics of Programming", "Environmental Science", "Locomotive"];
  const texts= ["SandySurf is not just an app. it's your passport to a world of information on a wide range of subjects. Whether you're a student, acurious mind, or simply someone looking to dive deep into a topic of interest, SandySurf is your ultimate companion."];

  const users = useSelector((state) => state.auth.users)
  const Tokens = useSelector((state) => state.auth.logInToken)
  const dispatch = useDispatch();

  const token = Tokens.token;
  const matchingUser = users.find((users) => users.username === token);
  const username = matchingUser.username;
  const email = matchingUser.email;
  const firstName = matchingUser.firstname;
  const lastName = matchingUser.lastname;
  const birthdate = matchingUser.birthdate;
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(null);

  const handleLogoutSubmit = async () =>{
    Keyboard.dismiss();
    setIsLoading(true);

    setTimer(setTimeout(() => {
      dispatch(LOGOUT())
      setIsLoading(false);
    }, 3000)); // Adjust timer duration as needed
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer); // Clear timer on unmount
    };
  }, [timer]);
  

  return (
      <ScrollView style={styles.container}>
        <View style={styles.contentTop}>
          <ImageBackground
            source={require("../../assets/profileWaveImage.png")}
            imageStyle={{ borderRadius: 10}}
            style={styles.contentTopBg}>
            <View style={styles.contentTopInside}>
                <Image
                source={require("../../assets/profileImage.png")}
                style={styles.profile}
                ></Image>
                <View style={styles.profileName}>
                  <Text style={styles.profileNameText} numberOfLines={1} adjustsFontSizeToFit={true}>
                    {username}
                  </Text>
                  <Text style={styles.profileNameText2} numberOfLines={1} adjustsFontSizeToFit={true}>
                    {email}
                  </Text>
                </View>
                <Text style={styles.profileEdit}>
                  Edit
                </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.contentBottom}>
          <View style={styles.contentBottomText}>
            <Text style={styles.underContentBottomText}>
              Full Name
            </Text>
            <Text style={styles.underContentBottomText2}>
              {/* {userData.fullname} */}
              {firstName} {lastName}
            </Text>
          </View>
          <View style={styles.contentBottomText}>
            <Text style={styles.underContentBottomText}>
              BirthDate
            </Text>
            <Text style={styles.underContentBottomText2}>
              {/* {userData.birthdate} */}
              {birthdate}
            </Text>
          </View>
          <View style={styles.contentBottomText}>
            <ExpandableText headerText={'About Us'} titles={texts} />
            <Text style={styles.contentBottom2}>
              Share App
            </Text>
            <Text style={styles.contentBottom2}>
              Term & Condition
            </Text>
            <Text style={styles.contentBottom2}>
              Privacy & Policy
            </Text>
            <Text style={styles.contentBottom2}>
              FAQ
            </Text>
            <TouchableOpacity onPress={ handleLogoutSubmit}>
              <Text style={styles.contentBottom2}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
          
        </View>
         {isLoading && (
        <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            opacity: 0.9,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color='black' />
          <Text style={{ fontSize: 20, marginVertical: 20}}>Logging Out</Text>
        </View>
      )}
      </ScrollView> 
  );
}

const styles = StyleSheet.create({
  header:{
      height: 0
  },
  container:{
    flex:1
  },
  contentTop:{
    marginHorizontal: 5,
    marginVertical: 5,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: 20
  },
  contentTopBg:{
    height: 150,
    borderRadius: 10,
  },
  contentTopInside:{
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1

  },
  profile:{
    width: 100,
    height: 100,
    borderWidth: 5,
    marginHorizontal: 10,
    borderRadius: 100
  },
  profileName:{
    flex: 4,
    fontFamily: 'boorsok',
  },
  profileEdit:{
    flex: 1,
    marginRight: 'auto',
    fontFamily: 'boorsok',
  },
  profileNameText:{
    fontFamily: 'boorsok',
    fontSize: 25,
    marginVertical: 5,
    height:25
  },
  profileNameText2:{
    fontFamily: 'glacialindi',
    fontSize: 15,
    marginVertical: 5,
    height: 25
  },
  contentBottom:{
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    flex: 8,
    
  },
  contentBottomText:{
    borderTopWidth: 2,
  },
  underContentBottomText:{
    marginVertical: 5,
    marginHorizontal: 5,
    fontFamily: 'glacialindibold',
    fontSize: 20,
  },
  underContentBottomText2:{
    marginHorizontal: 30,
    fontFamily: 'glacialindi',
    fontSize: 20,
    marginBottom: 10
  },
  contentBottom2:{
    marginHorizontal: 5,
    fontFamily: 'glacialindibold',
    fontSize: 20,
    marginVertical: 10
  },
})
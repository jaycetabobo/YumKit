import { 
  StyleSheet, 
  ImageBackground,
  View,
  Dimensions,
  Text,
  Image,
  ScrollView,
 } from 'react-native';
 import { Ionicons } from '@expo/vector-icons';
 import { FontAwesome } from '@expo/vector-icons';
 import ExpandableText from '../../components/Expandable';

import React, { useState, useEffect } from "react";
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("window");

export default function Profile({ navigation, route }) {
  const titles = ["The Basics of Programming", "Environmental Science", "Locomotive"];
  const texts= ['asdasdasdasd'];

  // const userData = route.params.userData;
  // const userData2 = route.params.userData2;

  return (
      <ScrollView style={styles.container}>
        <View style={styles.contentTop}>
          <ImageBackground
            source={require("../../assets/profileWaveImage.png")}
            imageStyle={{ borderRadius: 10}}
            style={styles.contentTopBg}>
            <View style={styles.contentTopInside}>
                <Image
                source={require("../../assets/testimage.jpg")}
                style={styles.profile}
                ></Image>
                <View style={styles.profileName}>
                  <Text style={styles.profileNameText} numberOfLines={1} adjustsFontSizeToFit={true}>
                    {/* {userData.username} */}
                    Jayce Tabobo
                  </Text>
                  <Text style={styles.profileNameText2} numberOfLines={1} adjustsFontSizeToFit={true}>
                    {/* {userData2.email} */}
                    tabobo.jayce01@gmail.com
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
              Jayce Tabobo
            </Text>
          </View>
          <View style={styles.contentBottomText}>
            <Text style={styles.underContentBottomText}>
              BirthDate
            </Text>
            <Text style={styles.underContentBottomText2}>
              {/* {userData.birthdate} */}
              01-10-02
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
            <TouchableOpacity onPress={ () => navigation.navigate('landingpage')}>
              <Text style={styles.contentBottom2}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
          
        </View>
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
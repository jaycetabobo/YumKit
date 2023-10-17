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

const { width, height } = Dimensions.get("window");

export default function Profile({ navigation, route }) {
  const titles = ["The Basics of Programming", "Environmental Science", "Locomotive"];
  const texts= ['asdasdasdasd'];

  const userData = route.params.userData;
  const userData2 = route.params.userData2;

  return (
    <View style={styles.container}>
      
        <ImageBackground
          source={require("../../assets/profilebg.png")}
          style={{ width: width, height: height }}
          
        >
        <ScrollView style={{ flex: 1 }}>
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
                    {userData.username}
                  </Text>
                  <Text style={styles.profileNameText2} numberOfLines={1} adjustsFontSizeToFit={true}>
                    {userData2.email}
                  </Text>
                </View>
                <Text style={styles.profileLogout} onPress={() => navigation.navigate('Login')}>
                  Logout
                </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.contentMid}>
          <View style={styles.contentMidText}>
            <Ionicons name="location" size={40} color="black" style={styles.contentMidIcon}/>
            <View>
              <Text style={styles.contentMidTextFont}>
                Location
              </Text>
              <Text style={styles.contentMidTextFont2} numberOfLines={1} adjustsFontSizeToFit={true}>
                {userData.location}
              </Text>
            </View>
          </View>
          <View style={styles.contentMidText}>
            <FontAwesome name="phone" size={40} color="black" style={styles.contentMidIcon}/>
            <View>
              <Text style={styles.contentMidTextFont}>
                Phone #
              </Text>
              <Text style={styles.contentMidTextFont2} numberOfLines={1} adjustsFontSizeToFit={true}>
                {userData.phoneNumber}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.contentBottom}>
          <View style={styles.contentBottomText}>
            <Text style={styles.underContentBottomText}>
              Full Name
            </Text>
            <Text style={styles.underContentBottomText2}>
              {userData.fullname}
            </Text>
          </View>
          <View style={styles.contentBottomText}>
            <Text style={styles.underContentBottomText}>
              BirthDate
            </Text>
            <Text style={styles.underContentBottomText2}>
              {userData.birthdate}
            </Text>
          </View>
          <View style={styles.contentBottomText}>
            <ExpandableText headerText={'Favorites'} titles={titles} />
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
          </View>
          
        </View>
        </ScrollView>
        </ImageBackground>
        
    </View>
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
  profileLogout:{
    flex: 1,
    marginRight: 10,
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
  contentMid:{
    marginHorizontal: 5,
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    flex: 1,
    height:80,
    flexDirection: 'row',
    alignItems: 'center'
  },
  contentMidText:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  contentMidIcon:{
    marginRight: 5
  },
  contentMidTextFont:{
    fontFamily: 'glacialindibold',
    fontSize: 25,
    marginBottom: 5
  },
  contentMidTextFont2:{
    fontFamily: 'glacialindi',
    fontSize: 15,
    width: 100
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
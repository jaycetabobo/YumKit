import React from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import ButtonSubjects from "../../components/buttonSubjects";
import { AntDesign, Feather,  } from '@expo/vector-icons';


export default function GeneralSubject({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: "white"}}>
      <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius:10,
            borderBottomWidth: 2,
            borderBottomColor: 'gray',
            marginTop: 45
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 5,
            
            }}
          >
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
              <AntDesign name="left" size={30} color="black" style={{marginTop: 15, marginHorizontal: 10}}/>
            </TouchableOpacity>
    
            <ImageBackground
            source={require("../../assets/logo-no-background.png")}
            style={{
              width: 45,
              height: 45,
              marginTop: 9,
              marginBottom: 9,
            }}
            
          />
          </View>
          <Text
            style={{
              fontSize: 25,
              fontFamily: "boorsok",
              alignItems: "center"

            }}
          >
            General Subject
          </Text>
          
          
            <TouchableOpacity onPress={()=>{navigation.navigate("notification")}}>
                 <Feather name="bell" size={28} color="black" style={{marginHorizontal: 20}}/>
            </TouchableOpacity>
          
         
        </View>
    <View style={styles.container}>

      {/* mao ni search bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search subjects..."
        
      />

      {/* Gen sub ni */}
      <View style={styles.gridContainer}>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <View key={index} style={styles.schoolContent}>
            <Image
              source={require('../../assets/programming.jpg')}
              style={styles.generalSubjectImage}
            />
            <View style={styles.schoolContentText}>
              <Text style={styles.generalSubjectsText}>programming {index}</Text>
              <Text style={styles.generalSubjectsText2}>
                Programming may asdasdconsist of Java, Python, C++, Javascript, and HTML .....
              </Text>
              <ButtonSubjects text="Learn More" />
            </View>
          </View>
        ))}
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  headerContainer: {
    marginBottom: 10,
    borderColor: 'black',  // Add border color
    borderWidth: 1,        // Add border width
    borderRadius: 5,      // Add border radius
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchBar: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  schoolContent: {
    borderWidth: 1,
    borderColor: 'black',
    height: 196,
    width: '48%', 
    borderRadius: 10,
    marginBottom: 10,
  },
  generalSubjectImage: {
    height: 69,
    borderRadius: 10,
    width: 'auto',
    marginVertical: 10,
  },
  schoolContentText: {
    flex: 1,
    alignItems: 'center',
  },
  generalSubjectsText2: {
    fontFamily: 'glacialindi',
    fontSize: 13,
    marginTop: 5,
  },
});

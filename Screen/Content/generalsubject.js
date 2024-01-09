import React from "react";
import { View, StyleSheet, Text, Image, TextInput } from "react-native";
import ButtonSubjects from "../../components/buttonSubjects";

export default function GeneralSubject() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {/* Your existing header code */}
        <Text style={styles.header}>General Subjects</Text>
      </View>

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
                Programming may consist of Java, Python, C++, Javascript, and HTML .....
              </Text>
              <ButtonSubjects text="Learn More" />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

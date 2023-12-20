
import { View, StyleSheet, Text, Image } from "react-native";
import ButtonSubjects from "../../components/buttonSubjects";


export default function GeneralSubject() {
    return(
        
        

        <View style={styles.container}>
      <Text style={styles.header}>Programming Subjects</Text>

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
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
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

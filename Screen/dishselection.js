import React, { useState, useEffect} from "react";
import { Dimensions, Text, View, Image, StyleSheet, ScrollView, Alert } from "react-native";
import { FAB } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from '@rneui/themed';
import { Recipes } from "../database";
import * as SQLite from 'expo-sqlite';

const { width, height } = Dimensions.get("window");
export default function DishSelection({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const db = SQLite.openDatabase('recipeList.db');
  const [names, setNames] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS recipeSelection (id INTEGER PRIMARY KEY AUTOINCREMENT, name INTEGER)')
    });

    db.transaction(tx => {
      tx.executeSql('SELECT * FROM recipeSelection', null,
        (txObj, resultSet) => setNames(resultSet.rows._array),
        (txObj, error) => console.log(error)
      );
    });

  }, []);

const addName = (title) => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM recipeSelection WHERE name = ?', [title],
      (txObj, resultSet) => {
        if (resultSet.rows.length === 0) { // No existing name
          tx.executeSql('INSERT INTO recipeSelection (name) values (?)', [title],
            (txObj, resultSet) => {
               let existingNames = [...names];
            existingNames.push({ id: resultSet.insertId, name: title});
            setNames(existingNames);
            },
            (txObj, error) => console.log(error)
          );
        } else {
          // Handle the case where the name already exists
          Alert.alert(
          '',
          'Recipe is Already Added',
          [
            {
              text: 'OK',
            },
          ],
          {
            cancelable: true,
          },
        );
          // You might want to display a message to the user here
        }
      },
      (txObj, error) => console.log(error)
    );
  });
};
  

const deleteName = (id) => {
    db.transaction(tx => {
      tx.executeSql('DELETE FROM recipeSelection WHERE id = ?', [id],
        (txObj, resultSet) => {
          if (resultSet.rowsAffected > 0) {
            let existingNames = [...names].filter(name => name.id !== id);
            setNames(existingNames);
          }
        },
        (txObj, error) => console.log(error)
      );
    });
  };

const checkForExistingName = (title) => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM recipeSelection WHERE name = ?', [title],
      (txObj, resultSet) => {
        setIsButtonDisabled(resultSet.rows.length > 0);
      },
      (txObj, error) => console.log(error)
    );
  });
};
  const showRecipes = () => {
    return Recipes.map((obj, index) => {
      useEffect(() => {
        checkForExistingName(obj.title); // Call this inside your mapping function
      }, [obj.title]);
      return (
       <View key={index}>
          <View style={style.scrollView}>
          <View style={style.dishView}>
              <View style={style.iconView}>
                <MaterialCommunityIcons name="pot-mix" size={40} color="black"  />
              </View>
                <View style={style.dishTextContainer}>
                    <Text style={style.dishText}>
                        "{obj.title}"
                    </Text>
                    <Text style={style.dishText2}>
                       {obj.description}
                    </Text>
                </View>
              <View style={{alignItems: "center", justifyContent: "center"}}>
                <Button
                  title="Add Recipe"
                  loading={isLoading}
                  disabled={isButtonDisabled}
                  loadingProps={{ size: 'large', color: 'white' }}
                  buttonStyle={{
                  backgroundColor: '#179DBB',
                  borderRadius: 20,
                  }}
                  titleStyle={{ fontWeight: 'bold', fontSize: 15 }}
                  containerStyle={{
                  height: 50,
                  width: 97,
                  justifyContent: "center",
                  }}
                  onPress={()=> addName(obj.title)}
                />
            </View>
          </View>
        </View>
        
          </View>
      );
    });
  };


  return (
    <SafeAreaView>
      <View style={style.container}>
        <View style={style.header}>
          <View style={style.imageView}>
          </View>
          <View style={style.textContainer}> 
            <Text style={style.text}>
              YUMKIT
            </Text>
            <Text style={style.text2}>
              Make Cooking Easier
            </Text>
          </View>
          <View style={style.imageView}>
             <Image
            source={require("../assets/yumkit-favicon-color.png")}
            style={style.image}
          />
          </View>
        </View>
      <View style={style.container2}>
        <View style={style.listbanner}>
          <Text style={style.listbannerText}>
            RECIPE SELECTION
          </Text>
        </View>
        {/* {
        names.map((name, index) => <View key={index} style={style.row}>
          <Text>{name.name}</Text>
          <Button
                  title="delete"
                  loading={false}
                  disabled={false}
                  loadingProps={{ size: 'large', color: 'white' }}
                  buttonStyle={{
                  backgroundColor: '#179DBB',
                  borderRadius: 20,
                  }}
                  titleStyle={{ fontWeight: 'bold', fontSize: 15 }}
                  containerStyle={{
                  height: 50,
                  width: 97,
                  justifyContent: "center",
                  }}
                  onPress={() => deleteName(name.id)}
                />
        </View>)
      } */}
      
      </View>
      <ScrollView style={{marginVertical: 10}}>
        {showRecipes()}

      </ScrollView>
      
        <FAB
          icon="check"
          color="white"
          style={style.fab}
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    margin: 8
  },
  container:{
    height: height, 
    width: width,
    backgroundColor: "white",
  },
  container2: { 
    alignItems: "center", 
    marginTop: height*.02,
  },
  header:{
    height: '7.5%',
    width: '100%',
    backgroundColor: '#D3D3D3',
    flexDirection: 'row',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  textContainer:{
    alignItems: "center",
    justifyContent: 'center',
    flex: 8,
  },
  text:{
    fontWeight: "bold",
    fontSize: 30,
    letterSpacing: 3,
  },
  text2:{
    fontSize: 15,
  },
  image:{
    height: 45, 
    width: 45,
    backgroundColor: "white",
    borderRadius: 50,
  },
  imageView:{
    flex: 2,
    justifyContent: 'center',
    alignItems: "center",
  },
  listbanner: {
    width: width*.5,
    height: 42,
    backgroundColor: '#179DBB',
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  listbannerText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "white"
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 10 ,
    top: height*.85,
    backgroundColor: "#179DBB",
    borderRadius: 50,
  },
  scrollView:{
    alignItems: 'center'
  },
  dishView:{
    width: width*.90,
    height: 'auto',
    backgroundColor: '#D3D3D3',
    padding: 10,
    paddingBottom: 15,
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
    flexDirection: 'row'
  },
  iconView:{
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10
  },
  dishTextContainer: {
    width: '58%',
    paddingRight: 10
  },
  dishText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  dishText2: {
    fontSize: 13,
  }
})
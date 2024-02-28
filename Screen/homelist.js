import React, { useState, useEffect } from "react";
import { Dimensions, Text, View, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { FAB } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import { Recipes } from "../database";
import * as SQLite from 'expo-sqlite';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native-paper';

const { width, height } = Dimensions.get("window");
export default function Homelist({ navigation }) {
  const [names, setNames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(null);
  const db = SQLite.openDatabase('recipeList.db');
  const filteredRecipes = Recipes.filter(importedRecipe =>
    names.some(recipe => recipe.name === importedRecipe.title))

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM recipeSelection', null,
        (txObj, resultSet) => setNames(resultSet.rows._array),
        (txObj, error) => console.log(error)
      );
    });

  }, [db]);

  const deleteRecipe = (recipeTitle) => {
    setIsLoading(true);

    Alert.alert(
      'Confirm Deletion',
      `Are you sure you want to delete "${recipeTitle}"? This action cannot be undone.`,
      [
        { text: 'Cancel', onPress: () => setIsLoading(false), style: 'cancel' },
        {
          text: 'Delete',
          onPress: () => {
            db.transaction(tx => {
              tx.executeSql(
                'DELETE FROM recipeSelection WHERE name = ?', [recipeTitle],
                (txObj, resultSet) => {
                  if (resultSet.rowsAffected > 0) {
                    let existingNames = [...names].filter(name => name.name !== recipeTitle);
                    setNames(existingNames);
                  }
                  setIsLoading(false); // Update loading state after deletion
                },
                (txObj, error) => {
                  console.error('Error deleting recipe:', error);
                  setIsLoading(false); // Update loading state even on error
                }
              );
            });
          },
          style: 'destructive'
        }
      ],
    );
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer); // Clear timer on unmount
    };
  }, [timer]);

  const handleRecipeClick = (id) => {
    // setTokenId(id)
    navigation.navigate('specificrecipe', { id })
    console.log(id)
  }

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
              COOKING RECIPE LIST
            </Text>
          </View>
        </View>
        {filteredRecipes.map((recipe, index) => (
          <View key={index}>
            <View style={style.scrollView}>
              <View style={style.dishView}>
                <View style={style.iconView}>
                  <MaterialIcons name="restaurant-menu" size={40} color="black" />
                </View>
                <TouchableOpacity style={style.dishTextContainer} onPress={() => handleRecipeClick(recipe.id)}>
                  <Text style={style.dishText}>
                    "{recipe.title}"
                  </Text>
                  <Text style={style.dishText2}>
                    {recipe.description}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }} onPress={() => deleteRecipe(recipe.title)}>
                  <Ionicons name="trash-bin" size={24} color="red" />
                </TouchableOpacity>
              </View>
            </View>

          </View>
        ))}
        <FAB
          icon="plus"
          color="white"
          style={style.fab}
          onPress={() => navigation.navigate('dishselection')}
        />
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
            <Text style={{ fontSize: 20, marginVertical: 20 }}>Deleting Recipe.....</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: "white",
  },
  container2: {
    alignItems: "center",
    marginTop: height * .02,
  },
  header: {
    height: '7.5%',
    width: '100%',
    backgroundColor: '#D3D3D3',
    flexDirection: 'row',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  textContainer: {
    alignItems: "center",
    justifyContent: 'center',
    flex: 8,
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
    letterSpacing: 3,
  },
  text2: {
    fontSize: 15,
  },
  image: {
    height: 45,
    width: 45,
    backgroundColor: "white",
    borderRadius: 50,
  },
  imageView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: "center",
  },
  listbanner: {
    width: width * .5,
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
    right: 10,
    top: height * .85,
    backgroundColor: "#179DBB",
    borderRadius: 50,
  },
  scrollView: {
    alignItems: 'center'
  },
  dishView: {
    width: width * .90,
    height: 'auto',
    backgroundColor: '#D3D3D3',
    padding: 10,
    paddingBottom: 15,
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
    flexDirection: 'row'
  },
  iconView: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10
  },
  dishTextContainer: {
    width: '78%',
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
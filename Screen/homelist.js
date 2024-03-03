import React, { useState, useEffect } from "react";
import { Dimensions, Text, View, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { FAB } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import { Recipes } from "../database";
import { ActivityIndicator } from 'react-native-paper';
import { useSelector, useDispatch } from "react-redux";
import { DELETE } from "./reducer/storeSlice";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import * as Linking from 'expo-linking';
import { MaterialIcons, Ionicons, Entypo, AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");
export default function Homelist({ navigation }) {
  const RecipeId = useSelector((state) => state.store.Token);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(null);
  const filteredRecipes = Recipes.filter(recipe => RecipeId.includes(recipe.id));

  const deleteRecipe = (id, recipeTitle) => {

    Alert.alert(
      'Confirm Deletion',
      `Are you sure you want to delete "${recipeTitle}"? This action cannot be undone.`,
      [
        { text: 'Cancel', onPress: () => setIsLoading(false), style: 'cancel' },
        {
          text: 'Delete',
          onPress: () => {
            setIsLoading(true)
            setTimer(setTimeout(() => {
              dispatch(DELETE(id));
              setIsLoading(false);
            }, 2000));
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
            <Menu>
              <MenuTrigger>
                <Image
                  source={require("../assets/yumkit-favicon-color.png")}
                  style={style.image}
                />
              </MenuTrigger>
              <MenuOptions style={{ height: "auto", padding: 20, borderRadius: 50 }}>
                <Text>For TroubleShoot Please Contact</Text>
                <Text>This account:</Text>
                <MenuOption onSelect={() => Linking.openURL('https://www.facebook.com/JayceLagoTabobo')}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20, marginVertical: 10 }}> <Entypo name="facebook" size={25} color="black" /> Facebook</Text>
                </MenuOption>
                <MenuOption disabled={true} >
                  <Text style={{ fontWeight: 'bold', fontSize: 20, marginVertical: 10 }}> <Entypo name="phone" size={25} color="black" /> 09268889945</Text>
                </MenuOption>
                <MenuOption onSelect={() => Linking.openURL('https://www.linkedin.com/in/jaycetabobo?fbclid=IwAR2k2YX3oEgW9mTHXgSKN-N_9ut1bPSeQjCJQ-Z-MuuVAvELmpwBrOVWv1U')}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20, marginVertical: 10 }}> <AntDesign name="linkedin-square" size={25} color="black" /> LinkIn</Text>
                </MenuOption>
                <Text>User Guide Manual</Text>
                <MenuOption onSelect={() => Linking.openURL('https://mega.nz/file/L3wC0aTA#TRZh3V3kEwfUmeblxOBOq_Mg0MNWeZRTHID4slzTk0Y')}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20, marginVertical: 10 }}> <Entypo name="link" size={25} color="black" /> Manual</Text>
                </MenuOption>
              </MenuOptions>
            </Menu>

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
                <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }} onPress={() => deleteRecipe(recipe.id, recipe.title)}>
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
import React, { useState } from "react";
import {
  Dimensions, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, Alert,
  Modal, Pressable
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, AntDesign, Entypo } from '@expo/vector-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Recipes } from "../database";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import * as Linking from 'expo-linking';


const { width, height } = Dimensions.get("window");
export default function SpecificRecipe({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false);
  const tokenId = route.params.id;
  const matchRecipe = Recipes.find(recipe => recipe.id === tokenId)

  return (
    <SafeAreaView>
      <View style={style.container}>
        <View style={style.header}>
          <View style={style.imageView}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
        >
          <View style={style.centeredView}>
            <View style={style.modalView}>
              <View style={{ width: "100%", alignItems: 'flex-end' }}>
                <Pressable
                  style={[style.button, style.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <AntDesign name="close" size={18} color="white" />
                </Pressable>
              </View>
              <Text style={{ padding: 15 }}>
                {matchRecipe.nutritionInfo}
              </Text>
            </View>
          </View>
        </Modal>
        <View style={style.container2}>
          <View style={style.listbanner}>
            <Text style={style.listbannerText}>
              {matchRecipe.title} Recipe
            </Text>
          </View>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={style.container2Text}>
              Nutrition Information
            </Text>
          </TouchableOpacity>

          <ScrollView style={{ marginBottom: 10, height: height * .80 }}>
            <View style={style.container2GroupView}>
              <View >
                <MaterialCommunityIcons name="pot-steam-outline" size={80} color="black" />
              </View>
              <Text style={style.container2GroupText}>
                Recipe
              </Text>
              <Text style={style.container2GroupText2}>
                {matchRecipe.description}
              </Text>
              <View style={{ width: '100%', marginTop: 10, flexDirection: 'row' }}>
                <View style={style.container2GroupText3View}>
                  <Text style={style.container2GroupText3}>
                    Prep: {matchRecipe.prep}
                  </Text>
                  <Text style={style.container2GroupText3}>
                    Cook: {matchRecipe.cook}
                  </Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 20 }}>
                  <Text style={style.container2Text}>
                    For 3 People
                  </Text>
                </View>
              </View>
              <View style={{ width: "100%", padding: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 5 }}>
                  Ingredients
                </Text>
                {
                  matchRecipe.ingredients.map((obj, index) => <View key={index}>
                    <BouncyCheckbox
                      size={25}
                      fillColor="black"
                      unfillColor="#FFFFFF"
                      text={obj}
                      iconStyle={{ borderColor: "red" }}
                      innerIconStyle={{ borderWidth: 2 }}
                      textStyle={{ color: 'black' }}
                      style={{ marginTop: 10 }}
                    // onPress={(isChecked: boolean) => {}}
                    />
                  </View>)
                }
                <Text style={style.container2GroupText}>
                  Instructions
                </Text>
                {
                  matchRecipe.instructions.map((obj, index) => <View key={index} style={{ marginLeft: 10, marginBottom: 5 }}>
                    <Text style={style.text2}>
                      • {obj}
                    </Text>
                  </View>)
                }
                <Text style={style.container2GroupText}>
                  Notes
                </Text>
                {matchRecipe.notes ? (
                  matchRecipe.notes.map((obj, index) => {
                    // Add 1 to the index and store it in a new variable
                    const adjustedIndex = index + 1;

                    return (
                      <View key={adjustedIndex} style={{ marginLeft: 10, marginBottom: 5 }}>
                        <Text style={style.text2}>
                          {adjustedIndex}. {obj}
                        </Text>
                      </View>
                    );
                  })
                ) : (
                  <Text style={style.noNotesText}>No notes available.</Text>
                )}
              </View>
            </View>
          </ScrollView>
        </View>

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
    width: 'auto',
    height: 42,
    backgroundColor: '#179DBB',
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  listbannerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "white",
    marginHorizontal: 20
  },
  container2Text: {
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 10
  },
  container2GroupView: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#D3D3D3',
    width: width * .90,
    height: 'auto',
    alignItems: "center"
  },
  container2GroupText: {
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 3,
    marginVertical: 10,
  },
  container2GroupText2: {
    fontSize: 15,
    marginHorizontal: 10,
  },
  container2GroupText3View: {
    width: width * .5,
    height: "auto",
    backgroundColor: '#179DBB',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    paddingVertical: 10
  },
  container2GroupText3: {
    fontSize: 15,
    color: 'white',
  },
  centeredView: {
    flex: 1,
    marginTop: height * .1,
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 'auto',
    width: width * .8
  },
  button: {
    borderRadius: 20,
    padding: 8,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },

})
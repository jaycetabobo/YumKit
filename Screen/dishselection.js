import React, { useState, useEffect } from "react";
import { Dimensions, Text, View, Image, StyleSheet, ScrollView, Alert, TouchableOpacity } from "react-native";
import { FAB } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, AntDesign, Entypo } from '@expo/vector-icons';
import { Button } from '@rneui/themed';
import { Recipes } from "../database";
import { useSelector, useDispatch } from "react-redux";
import { ADD } from "./reducer/storeSlice";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import * as Linking from 'expo-linking';

const { width, height } = Dimensions.get("window");
export default function DishSelection({ navigation }) {
  const RecipeId = useSelector((state) => state.store.Token);
  const [dishId, setDishId] = useState({
    id: null
  });
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);


  const addId = (id) => {
    // setDishId({ ...dishId, id: id })
    dispatch(ADD(id))
    navigation.navigate('homelist')

    // if (!RecipeId.includes(id)) {
    //   dispatch(ADD(id));
    //   Alert.alert(
    //     '',
    //     'Sheeshh  Recipe Added',
    //     [
    //       {
    //         text: 'OK',
    //         onPress: () => navigation.navigate('homelist')
    //       },
    //     ],
    //   );
    // } else {
    //   Alert.alert(
    //     '',
    //     '⚠️ Warning!! Recipe is Already Added ⚠️',
    //     [
    //       { text: 'OK' },
    //     ],
    //   );
    // }
  };

  const showRecipes = () => {
    return Recipes.map((obj, index) => {
      return (
        <View key={index}>
          <View style={style.scrollView}>
            <View style={style.dishView}>
              <View style={style.iconView}>
                <MaterialCommunityIcons name="pot-mix" size={40} color="black" />
              </View>
              <View style={style.dishTextContainer}>
                <Text style={style.dishText}>
                  "{obj.title}"
                </Text>
                <Text style={style.dishText2}>
                  {obj.description}
                </Text>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Button
                  title="Add ➕"
                  loading={isLoading}
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
                  onPress={() => addId(obj.id)}
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
        <ScrollView style={{ marginVertical: 10 }}>
          {showRecipes()}

        </ScrollView>
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
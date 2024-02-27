import React from "react";
import { Dimensions, Text, View, Image,StyleSheet,StatusBar} from "react-native";
import { Button } from '@rneui/themed';
import { SafeAreaView } from "react-native-safe-area-context";
import { Recipes } from "../database";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const { width, height } = Dimensions.get("window");
export default function Landingpage({ navigation }) {
  const id = 1
  const desiredIds = [id]; // Replace with your desired IDs
  const filteredRecipes = Recipes.filter(recipe => desiredIds.includes(recipe.id));
  return (
    <SafeAreaView>
      <View style={style.container}>
      <View style={style.container2}>
        <Image
        source={require("../assets/yumkit-favicon-color.png")}
        style={style.image}
      />
      
      <Text style={style.text}>
        YUMKIT
      </Text>
      <Text style={style.text2}>
        Make Cooking Easier
      </Text>
      {filteredRecipes.map(recipe => (
        <View key={recipe.id}>
          {/* {recipe.ingredients.map((obj, index) => <View key={index}>
              <BouncyCheckbox
                        size={25}
                        fillColor="black"
                        unfillColor="#FFFFFF"
                        text={obj}
                        iconStyle={{ borderColor: "red" }}
                        innerIconStyle={{ borderWidth: 2 }}
                        textStyle={{ color: 'black'}}
                        style={{marginTop: 10}}
                        // onPress={(isChecked: boolean) => {}}
                    />
          </View>)} */}
        </View>
      ))}
      <Button
        title="Get Started"
        loading={false}
        loadingProps={{ size: 'large', color: 'white' }}
        buttonStyle={{
          backgroundColor: '#179DBB',
          borderRadius: 20,
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
        containerStyle={{
          marginHorizontal: 50,
          height: 50,
          width: 130,
          marginVertical: 10,
        }}
        onPress={() => navigation.navigate('homelist')}
            />
      </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container:{
    height: height, 
    width: width,
    backgroundColor: "white",
  },
  container2: { 
    alignItems: "center", 
    marginTop: height*.17,
  },
  image:{
    height: 70, 
    width: 85, 
    marginBottom: 30
  },
  text:{
    fontWeight: "bold",
    fontSize: 50,
    letterSpacing: 7,
  },
  text2:{
    fontSize: 15,
    marginBottom: 200,
  },
})
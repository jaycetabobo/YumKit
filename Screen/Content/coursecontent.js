import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { favInput } from "./reducer/storeFave";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");

export default function Coursecontent({ route }) {
  const { topicname, topicdescription, littleinformation } = route.params;
  const favorites = useSelector((state) => state.store.favorites)
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(
    favorites.subject === topicname // Check initial favorite state
  );
  // const matchingFav = favorites.find((favorites) => favorites.subject === subjectName);
  const handleAddFav = () => {
    // dispatch(favInput({...favorites, subject }))
    setIsFavorite(!isFavorite); // Toggle favorite state
  };

  return (
    <View style={{alignItems: "center", backgroundColor: "white", flex: 1}}>
      <View style={{ width: 375, alignItems: "center" }}>
        <ImageBackground
          source={require("../../assets/bannerimage2.png")}
          style={{
            width: 270,
            height: 120,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontFamily: "glacialindibold", fontSize: 30 }}>
            {topicname}
          </Text>
        </ImageBackground>
      </View>
      <View
        style={{ width: 375, alignItems: "center", justifyContent: "center" }}
      >
        <TouchableOpacity
          style={{
            width: 125,
             backgroundColor: isFavorite ? "#ffd54f" : "#D9D9D9", // Conditional color
            alignItems: "center",
            padding: 12,
            borderRadius: 25,
          }}
          onPress={handleAddFav}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign
              name={isFavorite ? "star" : "staro"} // Conditional icon
              size={24}
              color="black" // Conditional color
              
            />
            <Text style={{ marginLeft: 8 }}>Add Favorites</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Image
        style={{
          width: "97%",
          height: 180,
          backgroundColor: "black",
          alignSelf: "center",
          marginTop: 20,
          borderRadius: 10,
        }}
        source={require("../../assets/java2.jpg")}
      />
      <ScrollView style={{ height: 350 }}>
        <Text
          style={{
            width: 375,
            padding: 5,
            fontSize: 20,
            fontFamily: "glacialindi",
            marginTop: 5
          }}
        >
          {topicdescription}
        </Text>
        <Text
          style={{
            width: 375,
            padding: 5,
            fontSize: 20,
            fontFamily: "glacialindi",
          }}
        >
          {littleinformation}
        </Text>
      </ScrollView>
    </View>
  );
}

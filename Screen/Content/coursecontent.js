import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

export default function Coursecontent({ route }) {
  const { topicname, topicdescription, littleinformation } = route.params;
  const handleAddFav = () => {
    console.log(topicname)
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
            backgroundColor: "#D9D9D9",
            alignItems: "center",
            padding: 12,
            borderRadius: 25,
          }}
          onPress={handleAddFav}
        >
          <Text>Add Favorites</Text>
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

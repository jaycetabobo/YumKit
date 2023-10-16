// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import Login from "./Screen/Authentication/Login";

// export default function App() {
//   return (
//     <View>
//       <Login />
//       <StatusBar style="auto" />
//     </View>
//   );
// }
import * as React from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";
import Profile from "./Screen/Content/profile";
import ProfileRoutes from "./routes/profileRoutes";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./Screen/Authentication/Login";

export default function App() {
  const [loaded] = useFonts({
    boorsok: require("./assets/fonts/boorsok.ttf"),
    glacialindi: require("./assets/fonts/GlacialIndifference-Regular.otf"),
    anton: require("./assets/fonts/Anton-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <ProfileRoutes />
    </NavigationContainer>
  );
}

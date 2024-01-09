import * as React from "react";
import { useFonts } from "expo-font";
import ProfileRoutes from "./routes/profileRoutes";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  const [loaded] = useFonts({
    anton: require("./assets/fonts/Anton-Regular.ttf"),
    boorsok: require("./assets/fonts/boorsok.ttf"),
    glacialindi: require("./assets/fonts/GlacialIndifference-Regular.otf"),
    glacialindibold: require("./assets/fonts/GlacialIndifference-Bold.otf"),
    angelina: require("./assets/fonts/angelina.regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
<<<<<<< HEAD
=======
    <Provider store={store}>
>>>>>>> 2299f2d5b93ccfd704249b5a3c2ac136509e9101
    <NavigationContainer>
      <ProfileRoutes />
    </NavigationContainer>
    </Provider>
  );
}

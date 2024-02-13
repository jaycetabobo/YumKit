import * as React from "react";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import ProfileRoutes from "./routes/profileRoutes";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./store";
import AuthRoutes from "./routes/AuthRoutes";
import { useSelector } from "react-redux";
import * as Updates from 'expo-updates';

const RootNavigation = () => {
  const Tokens = useSelector((state) => state.auth.logInToken);
  return (
    <NavigationContainer>
      {Tokens === null ? <AuthRoutes /> : <ProfileRoutes />}
    </NavigationContainer>
  );
};

  

export default function App() {
   async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        alert("An update is available.Restart your app to see it.");
      }
    } catch (error) {
      // You can also add an alert() to see the error message in case of an error when fetching updates.
      alert(`Error fetching latest Expo update: ${error}`);
    }
  };
  
  useEffect(() => {
    onFetchUpdateAsync();
  }, []);

//  const reactToUpdates = async ()=>{
//   Updates.addListener((event) => {
//     if (event.type === Updates.UpdateEventType.UPDATE_AVAILABLE) {
//       alert("An update is available.Restart your app to see it.");
//     }
//   });
// };
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
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

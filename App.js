
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import Landingpage from './Screen/landingpage';
import { NavigationContainer } from "@react-navigation/native";
import Homelist from './Screen/homelist';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DishSelection from './Screen/dishselection';
import SpecificRecipe from './Screen/specificrecipe';
import { useEffect } from "react";
import * as Updates from 'expo-updates';

const Stack = createStackNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='landingpage'>
        <Stack.Screen
          name="landingpage"
          component={Landingpage}
          options={{ title: " ", headerShown: false }} />
        <Stack.Screen
          name="homelist"
          component={Homelist}
          options={{ title: " ", headerShown: false }} />
        <Stack.Screen
          name="dishselection"
          component={DishSelection}
          options={{ title: " ", headerShown: false }} />
        <Stack.Screen
          name="specificrecipe"
          component={SpecificRecipe}
          options={{ title: " ", headerShown: false }} />
      </Stack.Navigator>
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

  return (
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

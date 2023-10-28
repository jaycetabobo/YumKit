import * as React from 'react';
import { useFonts } from 'expo-font';
import ProfileRoutes from './routes/profileRoutes'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [loaded] = useFonts({
    anton: require('./assets/fonts/Anton-Regular.ttf'),
    boorsok: require('./assets/fonts/boorsok.ttf'),
    glacialindi: require("./assets/fonts/GlacialIndifference-Regular.otf"),
    glacialindibold: require("./assets/fonts/GlacialIndifference-Bold.otf"),
    angelina: require('./assets/fonts/angelina.regular.ttf'),
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
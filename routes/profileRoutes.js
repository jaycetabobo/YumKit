import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../Screen/Content/profile";
import Login from "../Screen/Authentication/Login";
import Signup from "../Screen/Authentication/signup";
import Signup2 from "../Screen/Authentication/signup2";
import { StyleSheet, Text } from "react-native";
import Forgotpage1 from "../Screen/ForgotPassword/forgotpage1";
import Forgotpage2 from "../Screen/ForgotPassword/forgotpage2";
import Landingpage from "../Screen/landingpage";
import Home from "../Screen/Content/home";
import Schools from "../Screen/Content/schools";
import Schools2 from "../Screen/Content/schools2";
import BottomTab from "../components/bottomtab";
import Favorites from "../Screen/Content/favorites";

const Stack = createStackNavigator();

export default function ProfileRoutes() {
  return (
    <Stack.Navigator initialRouteName="tabscreen">
      <Stack.Screen
        name="landingpage"
        component={Landingpage}
        options={{ title: " " }}
      />
      <Stack.Screen name="Signup" component={Signup} options={{ title: " " }} />
      <Stack.Screen
        name="Signup2"
        component={Signup2}
        options={{ title: " " }}
      />
      <Stack.Screen name="Login" component={Login} options={{ title: " " }} />
      <Stack.Screen
        name="Forgotpage1"
        component={Forgotpage1}
        options={{ title: " " }}
      />
      <Stack.Screen
        name="Forgotpage2"
        component={Forgotpage2}
        options={{ title: " " }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="tabscreen"
        component={BottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="favorites"
        component={Favorites}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Schools"
        component={Schools}
        options={{ title: " " }}
      />
      <Stack.Screen
        name="Schools2"
        component={Schools2}
        options={{ title: " " }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 0,
  },
  headerRightTitle: {
    marginRight: 10,
    fontFamily: "glacialindibold",
    fontSize: 20,
    color: "#fff",
  },
});

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
import Coursecontent from "../Screen/Content/coursecontent";

const Stack = createStackNavigator();

export default function ProfileRoutes() {
  return (
    <Stack.Navigator initialRouteName="tabscreen">
      <Stack.Screen
        name="Coursecontent"
        component={Coursecontent}
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

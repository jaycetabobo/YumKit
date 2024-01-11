import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../Screen/Content/profile";
import { StyleSheet, Text } from "react-native";
import Home from "../Screen/Content/home";
import Schools from "../Screen/Content/schools";
import Schools2 from "../Screen/Content/schools2";
import BottomTab from "../components/bottomtab";
import Favorites from "../Screen/Content/favorites";
import Coursecontent from "../Screen/Content/coursecontent";
import Notification from "../Screen/Content/notification";
import GeneralSubject from "../Screen/Content/generalsubject";

const Stack = createStackNavigator();

export default function ProfileRoutes() {
  return (
    <Stack.Navigator initialRouteName="tabscreen">
      <Stack.Screen
        name="tabscreen"
        component={BottomTab}
        options={{ headerShown: false }}
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
      <Stack.Screen
        name="Coursecontent"
        component={Coursecontent}
        options={{ title: " " }}
      />
      <Stack.Screen
        name="notification"
        component={Notification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="generalsubjects"
        component={GeneralSubject}
        options={{ headerShown: false }}
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

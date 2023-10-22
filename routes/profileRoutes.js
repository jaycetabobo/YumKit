import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../Screen/Content/profile";
import Login from "../Screen/Authentication/Login";
import Signup from "../Screen/Authentication/signup";
import Signup2 from "../Screen/Authentication/signup2";
import Forgotpage1 from "../Screen/ForgotPassword/forgotpage1";
import Forgotpage2 from "../Screen/ForgotPassword/forgotpage2";
import { StyleSheet } from "react-native";
import Landingpage from "../Screen/landingpage";

const Stack = createStackNavigator();

export default function ProfileRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LandingPage"
        component={Landingpage}
        style={styles.header}
        options={{ title: " " }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        style={styles.header}
        options={{ title: " " }}
      />
      <Stack.Screen
        name="Signup2"
        component={Signup2}
        style={styles.header}
        options={{ title: " " }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        style={styles.header}
        options={{ title: " " }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "My Profile",
        }}
      />
      <Stack.Screen
        name="Forgotpage2"
        component={Forgotpage2}
        style={styles.header}
        options={{ title: " " }}
      />
      <Stack.Screen
        name="Forgotpage1"
        component={Forgotpage1}
        style={styles.header}
        options={{ title: " " }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 0,
  },
});

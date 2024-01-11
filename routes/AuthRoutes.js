import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screen/Authentication/Login";
import Signup from "../Screen/Authentication/signup";
import Signup2 from "../Screen/Authentication/signup2";
import Forgotpage1 from "../Screen/ForgotPassword/forgotpage1";
import Forgotpage2 from "../Screen/ForgotPassword/forgotpage2";
import Landingpage from "../Screen/landingpage";

const Stack = createStackNavigator();
export default function AuthRoutes() {
  return (
    <Stack.Navigator initialRouteName="landingpage">
        <Stack.Screen
        name="landingpage"
        component={Landingpage}
        options={{ title: " ",headerShown: false }}
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
    </Stack.Navigator>
    );
}
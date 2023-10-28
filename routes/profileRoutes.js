
import { createStackNavigator } from '@react-navigation/stack';
import Profile from "../Screen/Content/profile";
import Login from '../Screen/Authentication/Login';
import Signup from '../Screen/Authentication/signup';
import Signup2 from '../Screen/Authentication/signup2';
import { StyleSheet, Text } from 'react-native';
import Forgotpage1 from '../Screen/ForgotPassword/forgotpage1';
import Forgotpage2 from '../Screen/ForgotPassword/forgotpage2';
import Landingpage from '../Screen/landingpage';

const Stack = createStackNavigator();

export default function ProfileRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="landingpage" component={Landingpage} options={{ title: ' ' }} />
      <Stack.Group>
        <Stack.Screen name="Signup" component={Signup} options={{ title: ' ' }} />
        <Stack.Screen name="Signup2" component={Signup2} options={{ title: ' ' }} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="Login" component={Login} options={{ title: ' ' }} />
        <Stack.Screen
          name="Forgotpage1"
          component={Forgotpage1}
          options={{ title: ' ' }}
        />
        <Stack.Screen
          name="Forgotpage2"
          component={Forgotpage2}
          options={{ title: ' ' }}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="Profile" component={Profile} options={{
          title: 'My Profile',
          headerTitleAlign: 'center',
          headerRight: () => (
            <Text onPress={() => alert('This is a button!')} style={styles.headerRightTitle}> Edit</Text>
          ),
          headerTitleStyle: {
            fontFamily: 'boorsok'
          },
          headerStyle: {
            backgroundColor: '#37A9D0'
          },
          headerTintColor: '#fff'
        }} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
    header:{
        height: 0
    },
    headerRightTitle:{
      marginRight: 10,
      fontFamily: 'glacialindibold',
      fontSize: 20,
      color: '#fff'
    }
})
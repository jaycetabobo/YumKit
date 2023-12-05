import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Icon, { Icons } from "../components/Icons";
import * as Animatable from "react-native-animatable";
import Home from "../Screen/Content/home";
import { Feather } from "@expo/vector-icons";
import Schools from "../Screen/Content/schools";
import Profile from "../Screen/Content/profile";
import Favorites from "../Screen/Content/favorites";

const TabArr = [
  {
    route: "SandySurf",
    label: "Home",
    type: Icons.Feather,
    icon: "home",
    component: Home,
  },
  {
    route: "Favorites",
    label: "Favorites",
    type: Icons.Feather,
    icon: "heart",
    component: Favorites,
  },
  {
    route: "School",
    label: "School",
    type: Icons.Ionicons,
    icon: "school-outline",
    component: Schools,
  },
  {
    route: "Profile",
    label: "Profile",
    type: Icons.FontAwesome,
    icon: "user-circle-o",
    component: Profile,
  },
];

const Tab = createBottomTabNavigator();

const animate1 = {
  0: { scale: 0.5, translateY: 7 },
  0.92: { translateY: -34 },
  1: { scale: 1.2, translateY: -24 },
};
const animate2 = {
  0: { scale: 1.2, translateY: -24 },
  1: { scale: 1, translateY: 7 },
};

const circle1 = {
  0: { scale: 0 },
  0.3: { scale: 0.9 },
  0.5: { scale: 0.2 },
  0.8: { scale: 0.7 },
  1: { scale: 1 },
};
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View ref={circleRef} style={styles.circle} />
          <Icon
            type={item.type}
            name={item.icon}
            color={focused ? "white" : "black"}
          />
        </View>
        <Animatable.Text ref={textRef} style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default function BottomTab({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontFamily: "boorsok",
                fontSize: 25,
                fontWeight: 400,
              },
              headerStyle: {
                height: 107,
                shadowColor: '#000',
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity:  0.4,
                shadowRadius: 3,
                elevation: 5,
                
              },
              headerLeft: () => (
                <Image
                  source={require("../assets/logo-no-background.png")}
                  style={styles.imageLogo}
                />
              ),
              headerRight: () => (
                <View style={styles.headerIcon}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Forgotpage1")}
                  >
                    <Feather name="bell" size={28} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Forgotpage1")}
                  >
                    <Feather name="search" size={28} color="black" />
                  </TouchableOpacity>
                </View>
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBar: {
    height: 70,
    position: "absolute",
    bottom: 16,
    right: 16,
    left: 16,
    borderRadius: 16,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: "white",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#78CFFE",
    borderRadius: 25,
  },
  text: {
    fontSize: 10,
    textAlign: "center",
    color: "black",
  },
  imageLogo: {
    width: 45,
    height: 45,
    marginTop: 9,
    marginLeft: 13,
    marginBottom: 9,
  },
  headerIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 70,
    marginRight: 11,
  },
});

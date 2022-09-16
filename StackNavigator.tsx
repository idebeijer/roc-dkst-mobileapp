import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import QrScreen from "./src/screens/QrScreen";
import LoginScreen from "./src/screens/LoginScreen";
import useAuth from "./src/hooks/useAuth";
import ProfileScreen from "./src/screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { user } = useAuth();
  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="QrScreen" component={QrScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;

import { View, Text, Button } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
  const { setUser } = useAuth();
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button
        title="login"
        onPress={() => {
          setUser({ name: "John" });
        }}
      ></Button>
    </View>
  );
};

export default LoginScreen;

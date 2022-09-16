import { View, Text, Button, TextInput } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";
import { styled } from "nativewind";

const StyledText = styled(Text);

const LoginScreen = () => {
  const { setUser } = useAuth();
  return (
    <View className="w-full mx-auto px-6">
      <View className=" ">
        <View className="bg-white rounded-md my-2 py-2 px-4 flex shadow-sm">
          <TextInput placeholder="Email" className="text-lg bg-white" />
        </View>
        <View className="bg-white rounded-md my-2 py-2 px-4 shadow-sm">
          <TextInput placeholder="Password" className="text-lg" />
        </View>
      </View>

      <View className="rounded bg-indigo-600">
        <StyledText
          onPress={() => {
            setUser({ name: "John" });
          }}
          className="inline-flex items-center text-center text-white text-lg px-5 py-2.5 rounded border border-transparent font-medium"
        >
          Login
        </StyledText>
      </View>
    </View>
  );
};

export default LoginScreen;

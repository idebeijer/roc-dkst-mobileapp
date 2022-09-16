import { View, Text, SafeAreaView, Button, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { styled } from "nativewind";

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const StyledButton = styled(Button);

  return (
    <SafeAreaView>
      <View>
        <Button title="Qr" onPress={() => navigation.navigate("QrScreen")} />
        <View className="w-full mx-auto px-6"></View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

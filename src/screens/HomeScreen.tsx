import { View, Text, SafeAreaView, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView>
      <View>
        <Text className="text-red-800">HomeScreen</Text>
        <Button title="Qr" onPress={() => navigation.navigate("QrScreen")} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

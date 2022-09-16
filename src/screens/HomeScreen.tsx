import { View, Text, SafeAreaView, Button, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { styled } from "nativewind";

const StyledText = styled(Text);

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  });

  const StyledButton = styled(Button);

  return (
    <SafeAreaView>
      <View>
        <View className="w-full mx-auto px-6">
          <View className="flex flex-col gap-4">
            <View className="rounded bg-indigo-600">
              <StyledText
                onPress={() => {
                  navigation.navigate("QrScreen");
                }}
                className="inline-flex items-center text-center text-white text-lg px-5 py-2.5 rounded border border-transparent font-medium"
              >
                Generate QR code
              </StyledText>
            </View>
            <View className="rounded bg-indigo-600">
              <StyledText
                onPress={() => {
                  navigation.navigate("ProfileScreen");
                }}
                className="inline-flex items-center text-center text-white text-lg px-5 py-2.5 rounded border border-transparent font-medium"
              >
                Go to profile
              </StyledText>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

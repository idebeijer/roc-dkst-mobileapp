import { View, Text, Button } from "react-native";
import React from "react";

const QrScreen = ({ navigation }) => {
  return (
    <View>
      <Text>QrScreen</Text>
      <Button title="Qr" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default QrScreen;

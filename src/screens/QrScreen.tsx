import { View, Text, Button } from "react-native";
import React from "react";
// import QRCode from "qrcode";
import QRCode from "react-native-qrcode-svg";
// import QRCode from "react-qr-code";

const QrScreen = ({ navigation }) => {
  const [width, setWidth] = React.useState(0);
  const onLayout = (event) => {
    const { x, y, height, width } = event.nativeEvent.layout;
    setWidth(width);
  };

  const x = true;

  return (
    <View>
      {/* <Text>QrScreen</Text>
      <Button title="Qr" onPress={() => navigation.navigate("Home")} /> */}
      <View
        onLayout={onLayout}
        className="flex items-center justify-center mt-[20px]"
      >
        {x ? (
          <QRCode size={width - 40} ecl="H" value="www.debeijer.io" />
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </View>
  );
};

export default QrScreen;

import { View, Text, Button } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";

const getUnixTimestamp = () => {
  return Math.round(new Date().getTime() / 1000).toString();
};

const QrScreen = ({ navigation }) => {
  const [width, setWidth] = React.useState(0);
  const onLayout = (event) => {
    const { x, y, height, width } = event.nativeEvent.layout;
    setWidth(width);
  };

  const x = true;

  const data = {
    userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    time: getUnixTimestamp(),
  };

  return (
    <View>
      {/* <Text>QrScreen</Text>
      <Button title="Qr" onPress={() => navigation.navigate("Home")} /> */}
      <View
        onLayout={onLayout}
        className="flex items-center justify-center mt-[20px]"
      >
        {x ? (
          <QRCode
            size={width - 40}
            ecl="H"
            value="3fa85f64-5717-4562-b3fc-2c963f66afa6"
          />
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </View>
  );
};

export default QrScreen;

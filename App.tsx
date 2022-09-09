import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackNavigator from "./StackNavigator";
import { AuthProvider } from "./src/hooks/useAuth";

const Stack = createNativeStackNavigator();

export default function App({ navigation }): JSX.Element {
  // const navigation = useNavigation();

  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";
import LearningScreen from "./screens/LearningFlagsScreen";
const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NativeBaseProvider>
      <StatusBar hidden={true} style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Game"
            component={GameScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Learn"
            component={LearningScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
export default Router;

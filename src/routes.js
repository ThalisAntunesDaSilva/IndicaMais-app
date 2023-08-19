import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
const Stack = createNativeStackNavigator();
import Home from "./pages/Home/index";
import LoginScreen from "./pages/LoginScreen/index";

export default function Routes() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
    </NavigationContainer>
  );
}

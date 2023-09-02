import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Home from "./pages/Home/index";
import LoginScreen from "./pages/LoginScreen/index";
import Register from "./pages/Register";
import Indication from "./pages/Indication";
import Indications from "./pages/Indications/index";

export default function Routes() {
    return (
      <NavigationContainer>     
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Indication" component={Indication} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Indications" component={Indications} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

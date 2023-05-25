import React from "react";

import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "../screens/auth/Welcome";
import Login from "../screens/auth/Login";
import {} from "react-navigation-stack";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Welcome"} component={Welcome} />
        <Stack.Screen name={"Login"} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;

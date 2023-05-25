import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard, Discover, Live, Glasses } from "./screens";
import Login from "./screens/auth/Login";
import React from "react";
import Welcome from "./screens/auth/Welcome";
import UserStack from "./navigation/UserStack";
import AuthStack from "./navigation/authStack";
import RootNavigation from "./navigation";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <RootNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

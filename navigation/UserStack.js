import React from "react";

import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Dashboard, Discover, Glasses, Live } from "../screens";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const UserStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={"Dash"} component={Dashboard} />
        <Tab.Screen name={"Discover"} component={Discover} />
        <Tab.Screen name={"Live"} component={Live} />
        <Tab.Screen name={"Glasses"} component={Glasses} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default UserStack;

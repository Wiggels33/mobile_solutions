import React from "react";

import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Dashboard, Discover, Glasses, Live } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../constants";
import HeaderLeftComponent from "../components/headerLeft/headerLeft.component";
import HeaderRight from "../components/headerRight/headerRight.component";

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: COLORS.primaryBg,
  },
  headerRight: () => <HeaderRight />,
  headerLeft: () => <HeaderLeftComponent />,
};

const tabOptions = { headerTintColor: COLORS.white };

const UserStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name={"Dash"} component={Dashboard} options={tabOptions} />
        <Tab.Screen
          name={"Discover"}
          component={Discover}
          options={tabOptions}
        />
        <Tab.Screen name={"Live"} component={Live} options={tabOptions} />
        <Tab.Screen name={"Glasses"} component={Glasses} options={tabOptions} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default UserStack;

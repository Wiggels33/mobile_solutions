import React from "react";
import { Text, View } from "react-native";
import Swiper from "react-native-swiper";
import { Dash1, Dash2, Dash3 } from "./dashParts";

const Dashboard = () => {
  return (
    <Swiper>
      <Dash1 />
      <Dash2 />
      <Dash3 />
    </Swiper>
  );
};

export default Dashboard;

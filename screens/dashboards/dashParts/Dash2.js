import React from "react";
import { Text, View } from "react-native";
import WeatherComponent from "../../../components/weatherComponant/WeatherComponent";
import styles from "./dash.styles";
const Dash2 = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text>Dash 2</Text>
      <WeatherComponent data={data} />
    </View>
  );
};

export default Dash2;

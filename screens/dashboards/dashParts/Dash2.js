import React from "react";
import { Text, View } from "react-native";
import WeatherComponent from "../../../components/weatherComponant/WeatherComponent";
import styles from "./dash.styles";
import News from "../../../components/news/News.component";
const Dash2 = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text>Dash 2</Text>
      <WeatherComponent data={data} />
      <News data={data} />
    </View>
  );
};

export default Dash2;

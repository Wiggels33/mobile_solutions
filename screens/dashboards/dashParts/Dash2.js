import React from "react";
import { Text, View, ScrollView } from "react-native";
import WeatherComponent from "../../../components/weatherComponant/WeatherComponent";
import styles from "./dash.styles";
import News from "../../../components/news/News.component";
import MapView from "react-native-maps";
const Dash2 = ({ data, region }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Dash 2</Text>
        <WeatherComponent data={data} />
        <News data={data} />
        <MapView style={styles.map} region={region} />
      </View>
    </ScrollView>
  );
};

export default Dash2;

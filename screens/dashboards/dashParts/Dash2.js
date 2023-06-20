import React from "react";
import { Text, View, ScrollView } from "react-native";
import WeatherComponent from "../../../components/weatherComponant/weather.component";
import styles from "./dash.styles";
import { NewsComponent } from "../../../components";
import MapView from "react-native-maps";
const Dash2 = ({ data, region }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Dash 2</Text>
        <WeatherComponent data={data} />
        <NewsComponent data={data} />
        <MapView style={styles.map} region={region} />
      </View>
    </ScrollView>
  );
};

export default Dash2;

import React from "react";
import { Image, StyleSheet } from "react-native";

import { Text, View } from "react-native";
import { COLORS, SIZES } from "../../constants";

const WeatherComponent = ({ data }) => {
  const weatherIcon = require("./../../constants/Images/icon_weather.png");
  const icon_wind = require("../../constants/Images/icon_wind.png");
  const temp =
    "temp: " +
    data.current.temp_c +
    " °C" +
    " | " +
    "feel: " +
    data.current.feelslike_c +
    " °C";
  let wind = "";
  const currWind = data.current.wind_kph;
  if (currWind < 10) {
    wind = "Low wind";
  } else if (currWind < 20) {
    wind = "Good wind";
  } else {
    wind = "Strong wind";
  }
  const windText =
    "windspeed: " +
    currWind +
    " | " +
    "visability: " +
    data.current.vis_km +
    " km";

  const windDir = "wind direction: " + data.current.wind_dir;
  return (
    <View style={styles.container}>
      <View style={styles.col}>
        <View style={styles.containerIcon}>
          <Image source={weatherIcon} />
          <Text style={styles.iconText}>{data.current.condition.text}</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>{temp}</Text>
          <Text style={styles.text}>{"UV Index:" + data.current.uv}</Text>
        </View>
      </View>
      <View style={styles.col}>
        <View style={styles.containerIcon}>
          <Image source={icon_wind} />
          <Text style={styles.iconText}>{wind}</Text>
        </View>
        <View>
          <Text style={styles.text}>{windText}</Text>
          <Text style={styles.text}>{windDir}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.xxSmall,
    backgroundColor: COLORS.gray,
    borderRadius: SIZES.medium,
    gap: SIZES.xxLarge,
    flexDirection: "row",
  },
  col: {
    gap: SIZES.xxSmall,
  },
  containerIcon: {
    flexDirection: "row",
    gap: SIZES.xxSmall,
    alignItems: "flex-end",
  },
  containerText: {
    gap: 4,
  },
  iconText: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontWeight: "bold",
  },
  text: {
    color: COLORS.white,
    fontSize: SIZES.xSmall,
  },
});
export default WeatherComponent;

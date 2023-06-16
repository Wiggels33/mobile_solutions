import React from "react";
import { Image } from "react-native";

import styles from "./WeatherComponent.styles";
import { Text, View } from "react-native";
import { BlurView } from "expo-blur";

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
      <BlurView style={styles.containerBlur}>
        <View style={styles.containerWeather}>
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
        <Image
          source={require("../../constants/Images/chart.png")}
          style={styles.image}
        />
      </BlurView>
    </View>
  );
};

export default WeatherComponent;

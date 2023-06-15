import React from "react";

import { Image, Text, View } from "react-native";
import styles from "./SessionSummary.styles";
const SessionSummary = ({ data }) => {
  const iconTime = require("../../constants/Images/icon_time.png");
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Session Summary</Text>
      <View style={styles.wrapper}>
        <View style={styles.col}>
          <Image style={styles.icon} source={iconTime} />
          <View style={styles.containerText}>
            <Text style={styles.text}>2h</Text>
            <Text style={styles.text}>total</Text>
          </View>
        </View>
        <View style={styles.col}>
          <Image style={styles.icon} source={iconTime} />
          <View style={styles.containerText}>
            <Text style={styles.text}>{data.current.wind_kph + " kmh"}</Text>
            <Text style={styles.text}>windspeed</Text>
          </View>
        </View>
        <View style={styles.col}>
          <Text style={styles.textWindDir}>{data.current.wind_dir}</Text>
          <View style={styles.containerText}>
            <Text style={styles.text}>wind</Text>
            <Text style={styles.text}>direction</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SessionSummary;

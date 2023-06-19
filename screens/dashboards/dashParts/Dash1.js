import React from "react";
import { Text, View } from "react-native";
import SessionSummary from "../../../components/sessionSummary/SessionSummary";
import styles from "./dash.styles";

const Dash1 = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text>Dash 1</Text>
      <SessionSummary data={data} />
    </View>
  );
};

export default Dash1;

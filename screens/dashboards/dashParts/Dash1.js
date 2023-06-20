import React from "react";
import { Text, View } from "react-native";
import { SessionSummeryComponent } from "../../../components";
import styles from "./dash.styles";

const Dash1 = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text>Dash 1</Text>
      <SessionSummeryComponent data={data} />
    </View>
  );
};

export default Dash1;

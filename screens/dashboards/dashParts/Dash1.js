import React from "react";
import { Text, View } from "react-native";
import SessionSummary from "../../../components/sessionSummary/SessionSummary";
import styles from "./dash.styles";
import News from "../../../components/news/News.component";

const Dash1 = ({ data }) => {
  console.log(data);
  return (
    <View style={styles.container}>
      <Text>Dash 1</Text>
      <SessionSummary data={data} />
    </View>
  );
};

export default Dash1;

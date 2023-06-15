import React from "react";
import { Text, View } from "react-native";
import fetchData from "../../../utils/hooks/fetch";

const Dash1 = ({ data }) => {
  console.log(data);
  return (
    <View>
      <Text>Dash 1</Text>
      <Text>{data.current.condition.text}</Text>
    </View>
  );
};

export default Dash1;

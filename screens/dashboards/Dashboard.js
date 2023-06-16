import React, { useEffect, useState } from "react";
import Swiper from "react-native-swiper";
import { Dash1, Dash2, Dash3 } from "./dashParts";
import { Text } from "react-native";
import fetchData from "../../utils/hooks/fetch";
import { StyleSheet, ImageBackground } from "react-native";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchData();
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <ImageBackground
      source={require("../../constants/Images/dashboard_background.png")}
      style={styles.imageBg}
    >
      <Swiper index={1} style={styles.container}>
        <Dash1 data={data} />
        <Dash2 data={data} />
        <Dash3 />
      </Swiper>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {},
  imageBg: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default Dashboard;

import React, { useEffect, useState } from "react";
import Swiper from "react-native-swiper";
import { Dash1, Dash2, Dash3 } from "./dashParts";
import { Button, Text, TextInput } from "react-native";
import fetchData from "../../utils/hooks/fetch";
import { StyleSheet, ImageBackground } from "react-native";
import { COLORS, SIZES } from "../../constants";
import { useAuthentication } from "../../utils/hooks/useAuthentication";
const Dashboard = () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("Sydney");
  const [region, setRegion] = useState({});

  const user = useAuthentication();
  console.log(user);

  const getData = async () => {
    try {
      const response = await fetchData(city);
      setData(response);
      setRegion({
        latitude: response.location.lat,
        longitude: response.location.lon,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      console.log("fetch Successful");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      getData();
    }
  }, []);

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <ImageBackground
      source={require("../../constants/images/dashboard_background.png")}
      style={styles.imageBg}
    >
      <TextInput
        style={styles.textInput}
        placeholder={"city"}
        value={city}
        onChangeText={(text) => setCity(text)}
      />
      <Button title={"Get Data"} onPress={getData} />
      <Swiper index={1} style={styles.container}>
        <Dash1 data={data} />
        <Dash2 data={data} region={region} />
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
  textInput: {
    paddingHorizontal: SIZES.xSmall,
    paddingVertical: SIZES.xxSmall,
    fontSize: SIZES.medium,
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.xSmall,
    borderRadius: SIZES.small,
  },
});

export default Dashboard;

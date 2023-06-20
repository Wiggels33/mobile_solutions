import React from "react";
import { Image, View } from "react-native";
import { icon_settings } from "../../constants";

const HeaderRight = () => {
  return (
    <View>
      <Image source={icon_settings} />
    </View>
  );
};

export default HeaderRight;

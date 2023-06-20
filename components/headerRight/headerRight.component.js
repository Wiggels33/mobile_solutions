import React from "react";

import { Image, Text, View } from "react-native";

const HeaderRight = () => {
  return (
    <View>
      <Image source={require("../../constants/Images/icon_settings.png")} />
    </View>
  );
};

export default HeaderRight;

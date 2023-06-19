import React from "react";
import { StyleSheet } from "react-native";
import { Image, Text, View } from "react-native";
import { auth } from "../../config/firebaseConfig";
import { COLORS, SIZES } from "../../constants";

const HeaderLeft = () => {
  const user = auth.currentUser;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: user.photoURL }} />
      <View>
        <Text style={styles.text}>Greetings,</Text>
        <Text style={styles.text}>{user.displayName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: SIZES.small,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  text: {
    color: COLORS.white,
  },
});

export default HeaderLeft;

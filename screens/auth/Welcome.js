import React from "react";
import { StyleSheet } from "react-native";

import { Text, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "../../constants";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Welcome</Text>
      <View style={styles.containerButtons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>LogIn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 40,
    paddingTop: 200,
  },

  containerButtons: {
    gap: 8,
    width: 300,
    alignItems: "center",
  },

  headline: {
    fontSize: SIZES.large,
  },

  button: {
    padding: SIZES.small,
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    borderRadius: 50,
    width: 100,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.white,
  },
});

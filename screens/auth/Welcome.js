import React from "react";

import { Text, TouchableOpacity, View } from "react-native";
import styles from "./Welcome.style";

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

import React from "react";
import { Image, Text, View } from "react-native";
import { auth } from "../../config/firebaseConfig";
import { styles } from "./headerLeft.style";

const HeaderLeftComponent = () => {
  const user = auth.currentUser;
  return user ? (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: user.photoURL }} />
      <View>
        <Text style={styles.text}>Greetings,</Text>
        <Text style={styles.text}>{user.displayName}</Text>
      </View>
    </View>
  ) : null;
};

export default HeaderLeftComponent;

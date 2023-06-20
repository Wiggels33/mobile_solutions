import React from "react";
import { Text, View } from "react-native";
import { BlurView } from "expo-blur";
import styles from "./news.style";

const NewsComponent = ({ data }) => {
  const updated = "updated: " + data.current.last_updated;
  return (
    <View style={styles.container}>
      <BlurView intensity={50} style={styles.containerBlur}>
        <View style={styles.containerHeader}>
          <Text style={styles.headline}>News</Text>
          <Text style={styles.textUpdated}>{updated}</Text>
        </View>
        <View>
          <View>
            <Text style={styles.text}>
              Tropical Storm heading towards your location. The officials are
              warning to watch out for crazy people flying with kites ...
            </Text>
          </View>
        </View>
      </BlurView>
    </View>
  );
};

export default NewsComponent;

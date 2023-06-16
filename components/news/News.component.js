import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { COLORS, SIZES } from "../../constants";
import { BlurView } from "expo-blur";

const News = ({ data }) => {
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

const styles = StyleSheet.create({
  container: {
    borderRadius: SIZES.medium,
    overflow: "hidden",
  },
  containerBlur: {
    gap: SIZES.large,
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.xxSmall,
    borderRadius: SIZES.medium,
  },

  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headline: {
    fontSize: SIZES.medium,
    fontWeight: "bold",
    color: COLORS.white,
    lineHeight: SIZES.xLarge,
  },
  text: {
    color: COLORS.white,
    paddingEnd: 100,
  },
  textUpdated: {
    fontWeight: 400,
    fontSize: SIZES.xSmall,
    color: "#a9a9a9",
  },
});

export default News;

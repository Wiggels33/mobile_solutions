import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

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

export default styles;

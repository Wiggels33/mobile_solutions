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
  containerWeather: {
    flexDirection: "row",
    gap: SIZES.large,
  },
  col: {
    gap: SIZES.xxSmall,
  },
  containerIcon: {
    flexDirection: "row",
    gap: SIZES.xxSmall,
    alignItems: "flex-end",
  },
  containerText: {
    gap: 4,
  },
  iconText: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontWeight: "bold",
  },
  text: {
    color: COLORS.white,
    fontSize: SIZES.xSmall,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.xxSmall,
    backgroundColor: COLORS.gray,
    borderRadius: SIZES.medium,
    gap: SIZES.medium,
  },
  containerText: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: SIZES.xxSmall,
  },
  icon: {
    width: 34,
    height: 34,
  },
  text: {
    color: COLORS.white,
    fontSize: SIZES.small,
  },
  textWindDir: {
    fontSize: SIZES.xLarge,
    color: COLORS.white,
    fontWeight: "bold",
  },
  headline: {
    fontSize: SIZES.medium,
    fontWeight: "bold",
    color: COLORS.white,
  },
  col: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});

export default styles;

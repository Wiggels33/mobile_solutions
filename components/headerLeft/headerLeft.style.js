import { COLORS, SIZES } from "../../constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: SIZES.small,
    paddingLeft: SIZES.small,
    paddingBottom: SIZES.small,
  },
  image: {
    width: 40,
    aspectRatio: 1 / 1,
    borderRadius: 100,
  },
  text: {
    color: COLORS.white,
  },
});

export { styles };

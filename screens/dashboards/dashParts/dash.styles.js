import { StyleSheet } from "react-native";
import { SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.small,
    gap: SIZES.medium,
  },
  map: {
    width: "100%",
    height: 200,
    borderRadius: SIZES.medium,
  },
});

export default styles;

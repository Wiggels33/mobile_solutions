import { COLORS, SIZES } from "../../constants";
import { StyleSheet } from "react-native";
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

export default styles;

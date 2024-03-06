import { StyleSheet } from "react-native";

export const newTaskInputStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "6.65%",
    width: "100%",
    position: "absolute",
    top: "17.49%",
  },
  barView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    width: "72.26%",
    height: "100%",
    backgroundColor: "#262626",
    borderWidth: 1,
    borderColor: "#0D0D0D",
    borderRadius: 6,
    padding: 16,
    fontFamily: "InterRegular",
    fontSize: 16,
    lineHeight: 16 * 1.4,
    color: "#F2F2F2",
  },
  inputOnFocus: {
    borderColor: "#5E60CE",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "13.87%",
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
    marginLeft: 4,
  },
  buttonOnHover: {
    backgroundColor: "#4EA8DE",
  },
});

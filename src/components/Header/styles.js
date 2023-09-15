import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12
  },
  icon: {
    height: 30,
    width: 30,
    marginHorizontal: 10
  },
  lives: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18
  },
  closeIcon: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 10,
    color: "#bfbfbf"
  }
});

export default styles;
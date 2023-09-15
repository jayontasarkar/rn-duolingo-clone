import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "stretch",
    marginBottom: 10
  },
  optionsContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "space-between",
    alignContent: "space-between"
  }
});

export default styles;
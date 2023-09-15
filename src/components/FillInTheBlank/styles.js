import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginVertical: 10,
    height: 60,
  },
  text: {
    alignSelf: "flex-end",
    fontSize: 18,
  },
  blank: {
    borderBottomWidth: 2,
    borderColor: "lightgray",
    width: 100,
  },
  optionsContainer: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default styles;

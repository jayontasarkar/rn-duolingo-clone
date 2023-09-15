import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#58cc02",
    height: 50,
    marginVertical: 10,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderBottomWidth: 5,
    borderColor: "#57a600"
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textDecorationLine: "underline",
    borderColor: "#fff",
    borderBottomWidth: 1.5
  },
  disabledBtn: {
    backgroundColor: "lightgrey",
    borderColor: "grey"
  }
});

export default styles;
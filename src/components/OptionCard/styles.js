import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: "lightgrey",
    borderRadius: 20,
    borderBottomWidth: 4,
    width: "48%",
    height: "48%",
    alignItems: "center",
    padding: 15
  },
  selectedCard: {
    backgroundColor: "#ddf4fe",
    borderColor: "#81d5fe"
  },
  cardImage: {
    width: "100%",
    flex: 1

  },
  cardText: {
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  selectedCardText: {
    color: "#40bef7"
  }
});

export default styles;
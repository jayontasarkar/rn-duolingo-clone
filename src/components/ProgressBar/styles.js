import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    backgroundColor: "lightgrey",
    height: 40,
    borderRadius: 15,
    flex: 1,
  },
  foreground: {
    flex: 1,
    backgroundColor: "#fac800",
    borderRadius: 15
  },
  highlight: {
    backgroundColor: "#fad131",
    width: "90%",
    height: 5,
    borderRadius: 5,
    marginTop: 5,
    alignSelf: "center"
  }
});

export default styles;
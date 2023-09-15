import React from 'react'
import { StyleSheet, Text, Pressable } from 'react-native';

function WordOption({ text, onPress, isSelected }) {
  return (
    <Pressable style={[styles.root, { backgroundColor: isSelected ? "lightgray" : "white" }]} onPress={onPress}>
      <Text style={[styles.text, {color: isSelected ? "lightgray" : "black"}]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  root: {
    borderWidth: 2,
    borderColor: "lightgray",
    padding: 10,
    paddingHorizontal: 15,
    margin: 10,
    borderRadius: 5,
    borderBottomWidth: 4
  },
  text: {}
});

export default WordOption;
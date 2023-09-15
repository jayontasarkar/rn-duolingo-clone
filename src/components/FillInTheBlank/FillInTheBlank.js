import React, { useState } from "react";
import { View, Text } from "react-native";
import Button from "../Button";
import WordOption from "./WordOption";
import styles from "./styles";

const FillInTheBlank = ({ question, onCorrect, onWrong }) => {
  const [parts, setParts] = useState(question.parts);

  const onButtonPress = () => {
    if (checkIfCorrect()) {
      onCorrect();
      const mappedParts = parts.map(p => {
        return {
          text: p.text,
          isBlank: p.isBlank || false
        }
      });
      setParts(mappedParts);
    } else {
      onWrong();
    }
  };

  const checkIfCorrect = () => {
    return (
      parts.filter((part) => part.isBlank && part.selected !== part.text)
        .length === 0
    );
  };

  const addOptionToSelected = (option) => {
    if (isSelected(option)) {
      return;
    }

    const newParts = [...parts];
    for (let i = 0; i < newParts.length; i++) {
      if (newParts[i].isBlank && !newParts[i].selected) {
        newParts[i].selected = option;
        break;
      }
    }
    setParts(newParts);
  };

  const removeSelectedAt = (index) => {
    const newParts = [...parts];
    newParts[index].selected = null;
    setParts(newParts);
  };

  const isSelected = (option) => {
    return (
      parts.filter((part) => part.isBlank && part.selected === option).length >
      0
    );
  };

  const isReadyToCheck = () => {
    return parts.filter((part) => part.isBlank && !part.selected).length > 0;
  };

  return (
    <>
      <Text style={styles.title}>Complete the sentence</Text>
      <View style={styles.row}>
        {parts.map((part, index) => {
          if (part.isBlank) {
            return (
              <View style={styles.blank} key={index}>
                {part.selected && (
                  <WordOption
                    text={part.selected}
                    onPress={() => removeSelectedAt(index)}
                  />
                )}
              </View>
            );
          } else {
            return <Text key={index} style={styles.text}>{part.text}</Text>;
          }
        })}
      </View>

      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <WordOption
            key={option}
            text={option}
            isSelected={isSelected(option)}
            onPress={() => addOptionToSelected(option)}
          />
        ))}
      </View>

      <Button
        text="Check"
        onPress={onButtonPress}
        disabled={isReadyToCheck()}
      />
    </>
  );
};

export default FillInTheBlank;

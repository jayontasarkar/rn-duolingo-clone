import React, { useState } from 'react'
import styles from './styles'
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import OptionCard from '../OptionCard';
import Button from '../Button';

function MultipleChoiceQuestion({ question, onCorrect, onWrong }) {
  const [selected, setSelected] = useState(null);

  const onButtonPress = () => {
    if (selected.correct) {
      onCorrect();
      setSelected(null);
    } else {
      onWrong();
    }
  };

  return (
    <>
      <Text style={styles.title}>
        {question.question}
      </Text>
      <View style={styles.optionsContainer}>
        {question.options.map(option => (
          <OptionCard
            key={option.id}
            image={option.image}
            text={option.text}
            isSelected={selected?.id === option.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>
      <Button text="Check" onPress={onButtonPress} disabled={!selected} />
    </>
  )
}

MultipleChoiceQuestion.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string,
        image: PropTypes.string,
        correct: PropTypes.bool
      })
    ).isRequired
  }).isRequired,
  onCorrect: PropTypes.func,
  onWrong: PropTypes.func,
}

export default MultipleChoiceQuestion;
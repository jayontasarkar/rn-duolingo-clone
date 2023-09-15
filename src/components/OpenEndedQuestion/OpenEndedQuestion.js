import React, { useState } from 'react'
import styles from './styles';
import { Image, Text, TextInput, View } from 'react-native';
import mascot from '../../../assets/images/mascot.png';
import Button from '../Button';

function OpenEndedQuestion({ question, onCorrect, onWrong }) {
  const [answer, setAnswer] = useState("");

  const onButtonPress = () => {
    if (question.answer.toLowerCase().trim() === answer.toLowerCase().trim()) {
      onCorrect();
      setAnswer("");
    } else {
      onWrong();
    }
  };

  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>
      <View style={styles.row}>
        <Image source={mascot} style={styles.mascot} resizeMode='contain' />
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>
      </View>
      <TextInput 
        placeholder='Type in English' 
        value={answer}  
        style={styles.textInput} 
        onChangeText={(value) => setAnswer(value)}
        textAlignVertical='top'
        multiline
      />

      <Button text="Check" onPress={onButtonPress} disabled={!answer} />
    </>
  )
}

export default OpenEndedQuestion;
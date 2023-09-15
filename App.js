import { Text, View, Alert, ActivityIndicator } from 'react-native';
import styles from './App.styles';
import questions from './assets/data/allQuestions';
import { useEffect, useState } from 'react';
import MultipleChoiceQuestion from './src/components/MultipleChoiceQuestion';
import OpenEndedQuestion from './src/components/OpenEndedQuestion';
import Header from './src/components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FillInTheBlank from './src/components/FillInTheBlank';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex]);
  const [lives, setLives] = useState(5);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (questions.length <= currentQuestionIndex) {
      Alert.alert("You won!");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const restart = () => {
    setLives(5);
    setCurrentQuestionIndex(0);
  };

  const onWrong = () => {
    if (lives <= 1) {
      Alert.alert('Game Over', 'Try again', [
        {
          text: 'Try again',
          onPress: restart
        }
      ]);
    } else {
      Alert.alert('Wrooooooong!');
      setLives(lives - 1);
    }
  };

  const saveData = async () => {
    await AsyncStorage.setItem('lives', lives.toString());
    await AsyncStorage.setItem('currentQuestionIndex', currentQuestionIndex.toString());
  };

  const loadData = async () => {
    const loadedLives = await AsyncStorage.getItem('lives');
    if (loadedLives) {
      setLives(parseInt(loadedLives));
    }
    const loadedCurrentQuestionIndex = await AsyncStorage.getItem('currentQuestionIndex');
    if (loadedCurrentQuestionIndex) {
      setCurrentQuestionIndex(parseInt(loadedCurrentQuestionIndex));
    }
    setHasLoaded(true);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      saveData();
    }
  }, [lives, currentQuestionIndex, hasLoaded]);

  if (!hasLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.root}>
      <Header progress={currentQuestionIndex / questions.length} lives={lives} onPress={restart} />

      {currentQuestion.type === 'IMAGE_MULTIPLE_CHOICE' && (
        <MultipleChoiceQuestion 
          question={currentQuestion} 
          onCorrect={onCorrect} 
          onWrong={onWrong}
        />
      )}

      {currentQuestion.type === 'OPEN_ENDED' && (  
        <OpenEndedQuestion 
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}

      {currentQuestion.type === 'FILL_IN_THE_BLANK' && (
        <FillInTheBlank
          question={currentQuestion} 
          onCorrect={onCorrect} 
          onWrong={onWrong}
        />
      )}
    </View>
  );
}

export default App;


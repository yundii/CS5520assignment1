import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Card from '../CommonComponents/Card';
import Colors from '../CommonComponents/Colors';
import RestartButton from '../CommonComponents/RestartButton';

const GuessWrong = ({ guessWrong, resetGame, setGuessWrong }) => {
  return (
    <View>
        <RestartButton resetGame={resetGame} />
    <Card style={styles.container}>
      <Text style={styles.text}>You did not guess correct!</Text>
      <Text style={styles.text}>You should guess {guessWrong}.</Text>
      
      <Button title="Try Again" onPress={() => setGuessWrong(null)} />
      <Button title="End the game" onPress={resetGame} />
    </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
});

export default GuessWrong;

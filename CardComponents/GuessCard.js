import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Card from '../CommonComponents/Card';
import Colors from '../CommonComponents/Colors';

const GuessCard = ({ guess, setGuess, timeLeft, attempts, handleGuess, handleHint, hintUsed, lastDigit }) => {
  return (
    <Card>
        <Text style={styles.text}>Guess a number between 1 & 100 that is multiply of {lastDigit}.</Text>
        <TextInput
        style={styles.input}
        placeholder="Enter your guess"
        value={guess}
        onChangeText={setGuess}
        keyboardType="numeric"
        />
        <Text style={styles.text}>Attempts Left: {attempts}</Text>
        <Text style={styles.text}>Timer: {timeLeft}s</Text>
        <Button title="Use a hint" onPress={handleHint} disabled={hintUsed} />
        <Button title="Submit guess" onPress={handleGuess} />
    </Card>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 5,
    width: '100%',
    alignSelf: 'center',

  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
});

export default GuessCard;

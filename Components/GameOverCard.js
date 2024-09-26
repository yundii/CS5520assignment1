import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const GameOverCard = ({ timeLeft, resetGame }) => {
  return (
    <View>
        <View style={styles.ButtonContainer}>
        <Button title="Restart" onPress={resetGame} style={styles.restartButton} />
        </View>
    <View style={styles.container}>
      <Text>The game is over</Text>
      <Image source={require('../sad_smiley.png')} style={styles.image} />
      <Text>{timeLeft === 0 ? 'You are out of time' : 'You are out of attempts'}</Text>
      <Button title="New Game" onPress={resetGame} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C9C9E3',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  restartButton: {
    top: 40, 
    right: 200, 
  },
  ButtonContainer: {
    width: '100%',
    paddingRight: 10,
    marginBottom: 30,
    marginLeft: 320,
  },
});

export default GameOverCard;

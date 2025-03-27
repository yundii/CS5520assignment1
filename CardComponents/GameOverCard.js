import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import Card from '../CommonComponents/Card';
import Colors from '../CommonComponents/Colors';
import RestartButton from '../CommonComponents/RestartButton';

const GameOverCard = ({ chosenNumber, attempts, resetGame, gameWon, timeLeft }) => {
  return (
    <View >
        <RestartButton resetGame={resetGame}/>
    <Card style={styles.container}>
    {gameWon ? (
          <View>
            <Text style={styles.text}>Congratulations! You guessed the number in {attempts} attempts.</Text>
            <Image style={styles.image} source={{ uri: `https://picsum.photos/id/${chosenNumber}/100/100`} } />
          </View>
        ) : (
          <View>
            <Text style={styles.text}>The game is over</Text>
            <Image source={require('../sad_smiley.png')} style={styles.image} />
            <Text style={styles.text}>{timeLeft === 0 ? 'You are out of time' : 'You are out of attempts'}</Text>
          </View>
        )}
      <Button title="New Game" onPress={resetGame} />
    </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    margin: 10,
    alignSelf: 'center',
  },
  container: {
    width: '95%',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
});

export default GameOverCard;

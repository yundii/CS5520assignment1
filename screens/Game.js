import React, { useState, useEffect } from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
import StartCard from '../Components/StartCard';
import GuessCard from '../Components/GuessCard';
import GameOverCard from '../Components/GameOverCard';
import SuccessCard from '../Components/SuccessCard';
import WrongGuessCard from '../Components/WrongGuessCard';

const GameScreen = ({ phone, resetGame }) => {
  const [chosenNumber, setChosenNumber] = useState(null);
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(4);
  const [timeLeft, setTimeLeft] = useState(60);
  const [timerStarted, setTimerStarted] = useState(false);
  const [hintUsed, setHintUsed] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [guessWrong, setGuessWrong] = useState(null);

  const lastDigit = parseInt(phone[9]);

  useEffect(() => {
    if (!chosenNumber) {
      // Generate the chosen number based on the last digit of the phone number
      const possibleNumbers = [];
      for (let i = 1; i <= 100; i++) {
        if (i % lastDigit === 0) possibleNumbers.push(i);
      }
      setChosenNumber(possibleNumbers[Math.floor(Math.random() * possibleNumbers.length)]);
    }
  }, [lastDigit]);

  useEffect(() => {
    // Countdown timer
    if (timerStarted && timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
    }
  }, [timeLeft, gameOver, timerStarted]);

  const handleGuess = () => {
    const guessedNumber = parseInt(guess);
    if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
      alert('Invalid Guess. Please enter a number between 1 and 100.');
      return;
    }
    setAttempts(attempts - 1);
    if (guessedNumber === chosenNumber) {
      setGameWon(true);
      setGameOver(true);
    } else {
      // setAttempts(attempts - 1);
      setGuessWrong(guessedNumber < chosenNumber ? 'higher' : 'lower');
      if (attempts === 1) {
        setGameOver(true);
      }
    }
  };

  const handleHint = () => {
    if (!hintUsed) {
      const lowerBound = Math.max(1, chosenNumber - 10);
      const upperBound = Math.min(100, chosenNumber + 10);
      alert(`Hint: The number is between ${lowerBound} and ${upperBound}.`);
      setHintUsed(true);
    }
  };

  if (gameOver) {
    return gameWon ? (
      <SuccessCard chosenNumber={chosenNumber} attempts={4 - attempts} resetGame={resetGame} />
    ) : (
      <GameOverCard timeLeft={timeLeft} resetGame={resetGame} />
    );
  }

  if (guessWrong) {
    // If guess was wrong, show GuessWrong component
    return <WrongGuessCard guessWrong={guessWrong} resetGame={resetGame} setGuessWrong={setGuessWrong} />;
  }

  const startGame = () => {
    setShowModal(true);
    setTimerStarted(true); // Start the timer when user presses start
  };

  return (
    <View>
    <View style={styles.ButtonContainer}>
        <Button title="Restart" onPress={resetGame} style={styles.restartButton} />
    </View>

    <View style={styles.container}>
      {showModal ? (
        <GuessCard
          guess={guess}
          setGuess={setGuess}
          timeLeft={timeLeft}
          attempts={attempts}
          handleGuess={handleGuess}
          handleHint={handleHint}
          hintUsed={hintUsed}
          lastDigit={lastDigit}
        />
      ) : (
        <StartCard onStart={() => startGame()} lastDigit={lastDigit} />
      )}
      
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default GameScreen;

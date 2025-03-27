import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Card from '../CommonComponents/Card';
import Colors from '../CommonComponents/Colors';

const StartCard = ({ onStart, lastDigit }) => {
  return (
    <Card style={styles.container}>
      <Text style={styles.text}>Guess a number between 1 & 100 that is multiply of {lastDigit}.</Text>
      <Button title="Start" onPress={onStart} />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#C9C9E3',
    // padding: 20,
    // borderRadius: 10,
    width: '90%',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
});

export default StartCard;

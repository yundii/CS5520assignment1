import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RestartButton = ({ resetGame }) => {
  return (
    <View style={styles.ButtonContainer}>
      <Button title="Restart" onPress={resetGame} style={styles.restartButton} />
    </View>
  );
}

const styles = StyleSheet.create({
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

export default RestartButton;
import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Colors from './Colors';

const InputField = ({ label, value, onChangeText, isValid, errorMessage }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={label}
        placeholderTextColor={Colors.placeholder}
      />
      {value.length > 0 && !isValid && (
        <Text>{errorMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
    padding: 8,
    marginTop: 5,
  },
  label: {
    fontSize: 18,
    color: Colors.primary,
  },
});

export default InputField;
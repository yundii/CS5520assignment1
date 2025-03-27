import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from './Colors';

const Checkbox = ({ isChecked, setIsChecked }) => {
  return (
    <TouchableOpacity onPress={() => setIsChecked(!isChecked)} style={styles.checkboxContainer}>
      <View style={[styles.checkbox, isChecked && styles.checked]} />
      <Text style={styles.label}>I agree to the terms and conditions</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    marginRight: 10,
  },
  checked: {
    backgroundColor: Colors.primary,
  },
  label: {
    fontSize: 16,
    color: Colors.primary,
  },
});

export default Checkbox;

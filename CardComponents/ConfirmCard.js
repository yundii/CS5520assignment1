import React from 'react';
import { View, Text, Button, StyleSheet, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../CommonComponents/Colors';
import Card from '../CommonComponents/Card';


const Confirm = ({ name, email, phone, modalVisible, goBack, continue: proceed }) => {
  return (
    <Modal transparent={true} animationType="slide" visible={modalVisible}>
      <LinearGradient
        colors={['rgba(173,216,230,0.85)', 'rgba(133,115,199,0.85)']} 
        style={styles.modalBackground}
      >
          <Card style={styles.card}>
            <Text style={styles.greeting}>Hello {name}</Text>
            <Text style={styles.infoText}>Here is the information you entered:</Text>
            <Text style={styles.infoText}>{email}</Text>
            <Text style={styles.infoText}>{phone}</Text>
            <Text style={styles.infoText}>
              If it is not correct, please go back and edit them.
            </Text>

            <View style={styles.buttonContainer}>
              <Button title="Go back" onPress={goBack} color={Colors.redButton} />
              <Button title="Continue" onPress={proceed} color={Colors.primary} />
            </View>
          </Card>
      </LinearGradient>
    </Modal>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    width: '85%',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: Colors.textPrimary,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default Confirm;

import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import InputField from '../CommonComponents/InputField';
import Checkbox from '../CommonComponents/Checkbox';
import Confirm from '../CardComponents/ConfirmCard';
import Colors from '../CommonComponents/Colors';
import Card from '../CommonComponents/Card';

const StartScreen = ({
    name, setName, email, setEmail, phone, setPhone, isCheckboxChecked, setIsCheckboxChecked,
    isValidName, isValidEmail, isValidPhone, handleRegister, handleReset, modalVisible, setModalVisible, setCurrentScreen
  }) => {
    return (
      <View>
        <Text style= {styles.title}>Welcome</Text>
        <Card style={styles.card}>
        <InputField
          label="Name"
          value={name}
          onChangeText={setName}
          isValid={isValidName}
          errorMessage="Name must be longer than 1 character and non-numeric"
        />
        <InputField
          label="Email"
          value={email}
          onChangeText={setEmail}
          isValid={isValidEmail}
          errorMessage="Enter a valid email"
        />
        <InputField
          label="Phone"
          value={phone}
          onChangeText={setPhone}
          isValid={isValidPhone}
          errorMessage="Enter a valid phone number (10 digits, last digit not 0 or 1)"
        />
        <Checkbox
        isChecked={isCheckboxChecked}
        setIsChecked={setIsCheckboxChecked}
        />

        <View style={styles.buttonContainer}>
        <Button title="Reset" onPress={handleReset} color={Colors.redButton}/>
        <Button
          title="Register"
          onPress={handleRegister}
          disabled={!isCheckboxChecked}
          color={isCheckboxChecked ? Colors.primary : Colors.disabled}
        />
        </View>

        </Card>
        <Confirm
            name={name}
            email={email}
            phone={phone}
            modalVisible={modalVisible}
            goBack={() => {setCurrentScreen('start'); setModalVisible(false);}}
            continue={() => {
              setModalVisible(false);
              setCurrentScreen('game');
            }}
          />
      </View>
        
    );
  };
  
  const styles = StyleSheet.create({
    card: {
        padding: 20,
        width: '90%',
        height: '70%',
        
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      },
      title: {
        fontSize: 30,
        padding: 40,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 60,
        marginLeft: 55,
      },
  });
  
  export default StartScreen;
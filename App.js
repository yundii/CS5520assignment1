import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert} from 'react-native';
import React, {useState} from 'react';
import Start from './screens/Start';
import Game from './screens/Game';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('start');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const isValidName = name.length > 1 && isNaN(name);
  const isValidEmail = email.includes('@') && email.includes('.') &&
    email.indexOf('@') > 0 && email.indexOf('.') > email.indexOf('@') + 1 && 
    email.indexOf('.') < email.length - 1;
  const isValidPhone = phone.length === 10 && !isNaN(phone) && phone[9] !== '0' && phone[9] !== '1';

  const handleRegister = () => {
    if (isValidName && isValidEmail && isValidPhone) {
      setModalVisible(true);
    } else {
      Alert.alert('Invalid Input', 'Check the input values');
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setIsCheckboxChecked(false);
  };

  const handleRestartGame = () => {
    handleReset();
    setCurrentScreen('start');
  };

  return (
    <LinearGradient
      colors={['lightblue', '#8573C7']} 
      style={styles.background}
    >
   
    <View style={styles.container}>
    {currentScreen === 'start' ? (
      
      <Start
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          isValidName={isValidName}
          isValidEmail={isValidEmail}
          isValidPhone={isValidPhone}
          isCheckboxChecked={isCheckboxChecked}
          setIsCheckboxChecked={setIsCheckboxChecked}
          handleRegister={handleRegister}
          handleReset={handleReset}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setCurrentScreen={setCurrentScreen}
          
        />)
      : currentScreen === 'game' ? (<Game phone={phone} resetGame={handleRestartGame} />) : null} 
      <StatusBar style="auto" />
    </View>
    
  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    // justifyContent: 'center',
  },
});

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('')

  const handleChangeInput = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const handleAddGoalClick = () => {
    console.log(enteredGoal)
    setEnteredGoal('')
  }

  return (
    //Container
    <View style={styles.screen}>
      {/* Input Area*/}
      <View style={styles.inputContainer}>
        <TextInput placeholder="Set Goal . . ." style={styles.inputField} onChangeText={handleChangeInput} value={enteredGoal} />
        <Button title="+" onPress={handleAddGoalClick} />
      </View>
      {/* Display Goals */}
      <View>
    
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  inputField: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 5,
    flex: 4
  }
});

import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Set Goal . . ." style={styles.inputField}/>
        <Button title="+" style={{
          flex: 1
        }} />
      </View>
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

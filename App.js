import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from './components/ListItem';
import ListInput from './components/ListInput';

export default function App() {

  const [goals, setGoals] = useState([])

  const handleAddGoalClick = (inputText) => {
    setGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: inputText }])
  }

  return (
    //Container
    <View style={styles.screen}>
      {/* Input Area*/}
      <ListInput handleSubmit={handleAddGoalClick} />
      {/* Display Goals */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={itemData => {
        return (
              <ListItem goal={itemData.item} title={itemData.item.value} />
            )
          }
      } />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

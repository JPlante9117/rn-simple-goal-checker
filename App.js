import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import ListItem from './components/ListItem';
import ListInput from './components/ListInput';

export default function App() {

  const [goals, setGoals] = useState([])
  const [checkedOffGoals, setCheckedOffGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const handleAddGoalClick = (inputText) => {
    setGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: inputText, completed: false }])
  }

  const handleCompleteToggle = (goal) => {
    if(goal.completed){
      setGoals(currentGoals => [...currentGoals, Object.assign({}, goal, {completed: false})])
      setCheckedOffGoals(checkedGoals => checkedGoals.filter(checked => checked !== goal))
    } else {
      setCheckedOffGoals(checkedGoals => [...checkedGoals, Object.assign({}, goal, {completed: true})])
      setGoals(currentGoals => currentGoals.filter(current => current !== goal))
    }
  }

  const handleDelete = (deletedGoal) => {
    setGoals(currentGoals => currentGoals.filter(goal => goal !== deletedGoal))
  }

  const toggleModal = () => {
    setIsAddMode(!isAddMode)
  }

  return (
    //Container
    <View style={styles.screen}>
      <Button title="Add to Checklist" onPress={toggleModal} />
      {/* Input Area*/}
      <ListInput modalVisibility={isAddMode} toggleModal={toggleModal} handleSubmit={handleAddGoalClick} />
      {/* Display Goals */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={itemData => {
        return (
              <ListItem handleOnDelete={handleDelete} goal={itemData.item} title={itemData.item.value} handleOnCompletePress={handleCompleteToggle} />
            )
          }
      } />
      {checkedOffGoals.length > 0 ? <View style={{borderBottomWidth: 1, borderBottomColor: 'black'}} /> : null }
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={checkedOffGoals}
        renderItem={itemData => {
        return (
              <ListItem handleOnDelete={handleDelete} goal={itemData.item} title={itemData.item.value} handleOnCompletePress={handleCompleteToggle} />
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

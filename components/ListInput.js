import React, { useState } from 'react'

import { StyleSheet, View, TextInput, Button } from 'react-native'

const ListInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('')

    const handleChangeInput = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    const handleGoalSubmission = (inputText) => {
        props.handleSubmit(inputText)
        setEnteredGoal('')
    }


    return(
        <View style={styles.inputContainer}>
            <TextInput placeholder="Set Goal . . ." style={styles.inputField} onChangeText={handleChangeInput} value={enteredGoal} />
            <Button title="+" onPress={() => handleGoalSubmission(enteredGoal)} />
        </View>
    )
}

const styles = StyleSheet.create({
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
})

export default ListInput
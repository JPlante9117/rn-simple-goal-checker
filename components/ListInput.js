import React, { useState } from 'react'

import { StyleSheet, View, TextInput, Button, TouchableOpacity, Modal, Icon } from 'react-native'

const ListInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('')

    const handleChangeInput = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    const handleGoalSubmission = (inputText) => {
        props.handleSubmit(inputText)
        setEnteredGoal('')
        props.toggleModal()
    }


    return(
        <Modal visible={props.modalVisibility} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Set Goal . . ." style={styles.inputField} onChangeText={handleChangeInput} value={enteredGoal} />
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.button}>
                        <Button
                            disabled={enteredGoal === "" ? true : false}
                            title="add"
                            onPress={() => handleGoalSubmission(enteredGoal)}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Button
                            color="red"
                            title="cancel"
                            onPress={props.toggleModal}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 1
      },
      inputField: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 5,
        width: '80%'
      },
      button: {
          width: '35%',
          margin: 10
      }
    
})

export default ListInput
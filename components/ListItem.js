import React, { useState } from 'react'

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const ListItem = props => {

    let { goal, title } = props
    return(
        <TouchableOpacity  onLongPress={() => props.handleOnDelete(goal)} onPress={() => props.handleOnCompletePress(goal)}>
            <View style={props.goal.completed ? styles.listItemComplete : styles.listItem} >
                <Text key={goal.id} style={props.goal.completed ? styles.strikethrough : null }>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: '#b3d9ff',
    },
    listItemComplete: {
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: '#b3ffcc',
    },
    strikethrough: {
        textDecorationLine: 'line-through'
    }

})

export default ListItem
import React from 'react'

import { StyleSheet, View, Text } from 'react-native'

const ListItem = props => {

    let { goal, title } = props
    return(
        <View style={styles.listItem}>
            <Text key={goal}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'green',
        borderColor: 'black',
        borderWidth: 2,
        color: 'white'
      }
})

export default ListItem
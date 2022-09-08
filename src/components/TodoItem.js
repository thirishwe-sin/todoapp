import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from "@react-native-material/core";

const TodoItem = ({item, removeItems}) => {
  return (
    <View style={styles.itemContainer}>
        <Text style={styles.text}>{item.text}</Text>
        <TouchableOpacity 
        onPress={()=>{removeItems(item.id)}}
        style={styles.removebtn}>
            <Text style={styles.closeText}>X</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        // paddingTop: 10,
        // backgroundColor: 'red',
        paddingLeft: 20,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(33,33,33,0.2)',

    },
    removebtn: {
        position: 'absolute',
        right: 30,

    },
    text: {
        fontWeight: '400',
        color: 'black'
    },
    closeText:{
        color: 'red',
        fontSize: 20
    }
})

export default TodoItem
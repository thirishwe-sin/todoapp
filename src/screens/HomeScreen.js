import React, { useState } from "react";
import { Text, View , StyleSheet, FlatList, TextInput, TouchableOpacity} from "react-native";
import TodoItem from "../components/TodoItem";
import uuid from 'react-native-uuid';

const HomeScreen = () => {

    const [items, setItems] = useState([
        {
            id: uuid.v4(),
            text: 'Buy milk'
        },
        {
            id: uuid.v4(),
            text: 'Eat breakfast'
        },
        {
            id: uuid.v4(),
            text: 'Go to office'
        },
        {
            id: uuid.v4(),
            text: 'Finish homework'
        },
        {
            id: uuid.v4(),
            text: 'Iron clothes'
        },
    ]);
    const [enteredText, setEnteredText] = useState('')

    const removeItems = (id) => {
        setItems(oldItems => {
            return oldItems.filter(item => item.id != id);
        })
    }

    const addItems = (text) => {
        setItems(oldItems => {
            return [{id: uuid.v4(),text}, ...oldItems]
        })
    }

    return(
        <View style= {styles.parentContainer}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Todo Items</Text>
            </View>
            <View style={styles.bodyContainer}>
                <FlatList 
                data={items}
                renderItem={({item})=> <TodoItem item={item} removeItems={removeItems}/>}
                />
            </View>
            <View style={styles.footerContainer}>
                <TextInput 
                    value={enteredText}
                    placeholder={"Add item"}
                    style={styles.textInput}
                    onChangeText={(text)=>setEnteredText(text)}
                />
                <TouchableOpacity
                style={styles.addBtn}
                onPress={()=> {addItems(enteredText)}}
                >
                    <Text style={styles.btnText}>Add Item</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parentContainer: {
        // flex: 1,
        flexDirection: 'column'
    },
    header: {
        // backgroundColor: 'red',
        width: '100%',
        height: '12%',
        paddingLeft: 20
    },
    headerText: {
        color: 'black',
        fontWeight: '600',
        fontSize: 25,
        marginTop: 15
    },
    bodyContainer: {
        // backgroundColor: 'blue',
        width: '100%',
        height: '60%'
    },
    footerContainer: {
        paddingLeft: 20,
        width: '100%',
        height: '20%',

    },
    textInput:{
        borderColor: 'rgba(255,0,0,0.2',
        borderWidth: 1,
        width: '90%',
        padding: 15,
        marginBottom: 10
    },
    btnText: {
        backgroundColor: 'orange',
        padding: 15,
        width: '90%',
        color: 'white',
        alignItems: 'center',
        textAlign: 'center'
    },
    addBtn: {
        fontWeight: '600',
    }

});

export default HomeScreen;
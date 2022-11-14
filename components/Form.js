import { View, TextInput, StyleSheet, Button } from 'react-native'
import React from 'react'

const Form = ({todo, setTodo, handleSubmit}) => {

  return (
    <View>
        <TextInput 
        style={styles.input}
        placeholder='New Todo'
        value={todo}
        onChangeText={val => setTodo(val)}/>
        <Button title='Submit' onPress={() => handleSubmit(todo)} color="#f7eb39"/>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderColor: "#ddd"
    }
})
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import React from 'react'

const TodoItem = ({handleDelete, item}) => {
  return (
    
        <View style={styles.item}>
          <Text>{item.todo}</Text>
          <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <MaterialIcons name="delete" size={18} color="red" />
          </TouchableOpacity>
        </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: '#f7eb39',
  },
  text: {
    color: "#fff"
  }
})
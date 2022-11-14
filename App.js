import React, { useEffect, useState } from 'react';
import {FlatList, StyleSheet, View, Text, Alert, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import Form from './components/Form';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import { collection, addDoc, deleteDoc, doc, getDocs} from 'firebase/firestore';
import {db} from './firebase'
import BottomBar from './components/BottomBar';

export default function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const todoCollection =  collection(db, 'todos')

  useEffect(() => {
    const getTodo = async () => {
      const data = await getDocs(todoCollection)
      console.log(data)
      setTodos(data.docs.map(doc => ({...doc.data(), id: doc.id})))  
    }
    getTodo()
  }, [])

  const handleDelete = async (id) => {
    Alert.alert("DELETE ITEM", "Do you want to delete this todo?", [
      {text: "No", onPress: () => console.log("no")},
      {text: "Yes", onPress: async () => {
        await deleteDoc(doc(db, 'todos', id))
        setTodos(prev => {
          prev.filter(item => item.id !== id)
        })
      }}
    ])
  }

  const handleSubmit = async (todo) => {
    if (!todo) {
      Alert.alert("OPPS", "New Todo must be filled to be added", [
      {text: "OK", onPress: () => {console.log("ok")}}])
    }else {
      try {
        const data = await addDoc(todoCollection, {todo})
        Alert.alert("DONE", "Successfully added", [{text: "OK"}])
        setTodos(prev => {[{id: todo.id, data}, ...prev]})
      } catch (error) {
        console.log(error)
        alert(error)
      }
      setTodo('')
    }
    }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
        <Image source = {require('./assets/reach.jpg')}  style={styles.img} />
        <Text style={styles.logo}>Code With Reach</Text>
          <Form handleSubmit={handleSubmit} todo={todo} setTodo={setTodo}/>
          <View style={styles.list}>
            <FlatList
            keyExtractor={item => item.id}
            data={todos} 
            renderItem = {({item}) =>(
                <TodoItem handleDelete={handleDelete} item={item}/>
              )}
            />
          </View>
        </View>
        <BottomBar/>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    color: '#333'
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  img: {
    width: 200,
    height: 200,
    marginLeft: 60,
    marginBottom: 40,
    borderRadius: 100
  },
  logo: {
    fontSize: 30,
    textAlign: "center",
    letterSpacing: 1,
    marginBottom: 10,
  }
})
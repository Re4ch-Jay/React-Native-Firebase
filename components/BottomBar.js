import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import React from 'react'

const BottomBar = () => {
  return (
    <View style={styles.bottomBar}>
        <View style ={styles.bottomList}>
            <Text style={styles.text}>Home</Text>
            <MaterialIcons name='home' size={18}/>
        </View>

        <View style ={styles.bottomList}>
            <Text style={styles.text}>Contact</Text>
            <MaterialIcons name='call' size={18}/>
        </View>

        <View style ={styles.bottomList}>
            <Text style={styles.text}>Settings</Text>
            <MaterialIcons name='settings' size={18}/>
        </View>
      
    </View>
  )
}

export default BottomBar

const styles = StyleSheet.create({
    bottomBar: {
        backgroundColor: "#f7eb39",
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    bottomList: {
        flexDirection: "row"
    },
    text: {
        marginRight: 4
    }
})
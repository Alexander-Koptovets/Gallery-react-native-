import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ArrPics } from './src/ArrPics'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>
        Gallary
      </Text>
          <ScrollView>
            <ArrPics />
          </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    color: "#fff", 
    fontSize: 80,
    borderBottomWidth: 5,
    borderBottomColor: '#fff', 
    padding: 10,  
    margin: 30, 
  }
});

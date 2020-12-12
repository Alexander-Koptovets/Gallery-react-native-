import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Pic } from './src/image.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>
        Gallary
      </Text>
      <ScrollView>
        <View style={styles.pictures}>
          <View><Pic /></View>
          <View><Pic /></View>
          <View><Pic /></View>
          <View><Pic /></View>
          <View><Pic /></View>
          <View><Pic /></View>
          <View><Pic /></View>
          <View><Pic /></View>
        </View>
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
  pictures: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
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

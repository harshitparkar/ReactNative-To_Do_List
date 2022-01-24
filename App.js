import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { TaskMaker } from './assets/component/Task';

export default function App() {
  return (
    <SafeAreaView style={[styles.mainContainer]}>
        <Text style={[styles.headerTitle]}>Today's Task</Text>
        <TaskMaker/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:'#e5e7ea'
  },
  headerTitle:{
    fontFamily:'AAntiCorona',
    fontSize:25,
    color:'black',
    margin:"5%"
  },
});

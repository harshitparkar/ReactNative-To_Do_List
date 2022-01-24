import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

export const TaskMaker = () => {
  return (
    <View style={[styles.taskContainer]}>
      <View style={[styles.itemLeft]}>
        <View style={[styles.tickView]}>
          <Icons name="minus-box" size={18} style={[styles.tickIcon]} />
        </View>
        <Text style={[styles.taskText]}>this is the task</Text>
      </View>
      <TouchableOpacity onPress={()=>console.log('Deleted')}>
        <Icons name="delete-forever" size={22} style={[styles.deleteIcon]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '7%',
    backgroundColor: '#ffffff',
    marginHorizontal: '2%',
    borderRadius: 5,
    justifyContent: 'space-between',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tickView: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tickIcon: {
    color: 'green',
  },
  taskText: {
    color: 'black',
    flexWrap: 'wrap',
  },
  deleteIcon: {
    margin: 10,
    color: 'red',
  },
});

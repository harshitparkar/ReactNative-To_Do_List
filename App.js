import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {TaskMaker} from './assets/component/Task';
import Icons from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handelTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const complete = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <SafeAreaView style={[styles.mainContainer]}>
      <Text style={[styles.headerTitle]}>Today's Task</Text>
      <ScrollView style={{marginBottom:"20%"}}>
        {taskItems.map((item, index) => {
          return (
              <TaskMaker text={item} key={index} deleteLink={() => complete(index)}/>
          );
        })}
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          placeholder="Type New Task"
          style={[styles.inputArea]}
          onChangeText={text => setTask(text)}
          value={task}
        />
        <TouchableOpacity onPress={() => handelTask()}>
          <Icons name="add-circle" size={50} style={[styles.enterIcon]} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#e5e7ea',
  },
  headerTitle: {
    fontFamily: 'AAntiCorona',
    fontSize: 25,
    color: 'black',
    margin: '5%',
  },
  writeTaskWrapper: {
    width: Dimensions.get('screen').width,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '3%',
  },
  inputArea: {
    backgroundColor: 'white',
    width: Dimensions.get('screen').width - 60,
    borderRadius: 60,
    borderColor: 'black',
    borderWidth: 0.3,
    paddingHorizontal: 15,
    elevation: 2,
  },
  enterIcon: {
    color: '#398db7',
    elevation: 2,
  },
});

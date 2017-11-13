import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Constants } from 'expo';

var question = 'How was your day ?';
var answer = 'It _ awesome.';
var anspart = answer.split('_');
var current_ans = '_____';
var ops = ['is','was','were','where'];

export default class App extends Component {
  
  constructor(props) {
  super(props);
  this.state = {
    current_ans: current_ans,
  };
}
  
  _handleButtonPress = (ans) => {
    this.setState({ current_ans:ans });
  };

  render() {
    
    return (
      <View style={styles.container}>
          <View style={styles.questBox}>
            <Text style={{fontSize:20}}>{question}</Text>
          </View>
          
          <View style={styles.ansBox}>
            <View style={styles.ansLine}>
              <Text style={{fontSize:20}}>{anspart[0]}</Text>
              <Text style={{fontSize:20, fontWeight:'bold'}}>{this.state.current_ans}</Text>
              <Text style={{fontSize:20}}>{anspart[1]}</Text>
            </View>
          </View>
          
          <View style={styles.opsBox}>
            
            <View style={styles.buttonLine}>
              <TouchableOpacity onPress={() => this._handleButtonPress(ops[0])}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>{ops[0]}</Text>
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => this._handleButtonPress(ops[1])}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>{ops[1]}</Text>
                </View>
              </TouchableOpacity>
            </View>
            
            <View style={styles.buttonLine}>
              <TouchableOpacity onPress={() => this._handleButtonPress(ops[2])}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>{ops[2]}</Text>
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => this._handleButtonPress(ops[3])}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>{ops[3]}</Text>
                </View>
              </TouchableOpacity>
            </View>
                          
          </View>
        
          <View style={styles.subBox}>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text style={{fontSize:20, fontWeight:'bold', color:'#ffffff'}}>SUBMIT</Text>
              </View>
          </TouchableOpacity>
          </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#34495e',
  },
  
  questBox: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#9FA8DA',
  },
  
  ansBox: {
    flex: 2,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7986CB',
  },
  
  ansLine: {
    flexDirection:'row', 
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  
  opsBox: {
    flex: 3,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#5C6BC0',
  },
  
  subBox: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#3F51B5',
  },
  
  buttonLine: {
    flexDirection:'row', 
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  
  button: {
    margin: 30,
    width: 100,
    alignItems: 'center',
    backgroundColor: '#3F51B5'
  },
  
  buttonText: {
    padding: 20,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  }
});

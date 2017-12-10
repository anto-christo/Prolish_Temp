import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';
import { Constants } from 'expo';

var para = '_ earth we live in _ our only home.';
var words = para.split(" ");
var len = words.length;
var i;
var element = [];

export default class Activity4 extends Component {

  render() {
    
    for( i=0 ; i<len; i++){
      
        if(words[i]=='_'){
            element.push(
              <TextInput
                style={{ width: 100, height: 44, padding: 8, textAlign: 'center', fontSize:20}}
              />
            );
        }
        
        else{
          element.push(
              <Text style={{fontSize:20}}>{words[i]+" "}</Text>
          );
        }
    }
    
    return (
      <View style={styles.container}>
          <View style={styles.questBox}>
            {element}
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
    flex: 2,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#9FA8DA',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  
  subBox: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#3F51B5',
  },
  
  button: {
    margin: 30,
    width: 100,
    alignItems: 'center',
    backgroundColor: '#3F51B5',
    borderRadius: 50
  },

});

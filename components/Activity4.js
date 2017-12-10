import React, { Component } from 'react';
<<<<<<< HEAD
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
        
=======
import { Text, View, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';

var received_comp = new Array();
var received_supp = new Array();
received_comp = 'apple ate';
received_supp = 'I had an was';
var comp_words = new Array();
var supp_words = new Array();
var answer = '';
var message1 = 'Compulsary words';
var message2 = 'Supplementary words';

export default class Activity4 extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      answer: answer,
    };
  }

  _handleButtonPress = ans => {
    answer = answer + ' ' + ans;
    this.setState({ answer: answer });
  };
  
  _clear = () => {
    answer = " ";
    this.setState({ answer: answer });
  };
  
  
  render() {

  comp_words = received_comp.split(" ");
  
  var buttons1 = [];
  var len1 = comp_words.length;
	for(let i = 0; i < len1; i++){

      		buttons1.push(
	        <TouchableOpacity onPress={() => this._handleButtonPress(comp_words[i])}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>{comp_words[i]}</Text>
              </View>
          </TouchableOpacity>
		    )

	}
	
	supp_words = received_supp.split(" ");
  
  var buttons2 = [];
  var len2 = supp_words.length;
	for(let i = 0; i < len2; i++){

      		buttons2.push(
	        <TouchableOpacity onPress={() => this._handleButtonPress(supp_words[i])}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>{supp_words[i]}</Text>
              </View>
          </TouchableOpacity>
		    )

	}
      
    return (

      <View style={styles.container}>

        <View style={styles.compBox}>
          <Text style={styles.text}>
            {message1}
          </Text>
          <View style={styles.grid}>
      			{ buttons1 }
      		</View>
        </View>
        <View style={styles.supBox}>
          <Text style={styles.text}>
            {message2}
          </Text>
          <View style={styles.grid}>
      			{ buttons2 }
      		</View>
        </View>
        <View style={styles.hint}>
          <Text style={{ color: 'white' }}>
            Your answer...
          </Text>
        </View>
        <View style={styles.opsBox} >
          <Text style={{fontSize:20}}>
            {answer}
          </Text>
        </View>
        <View style={styles.subBox}>
            <TouchableOpacity onPress={() => this._clear()}>
              <View style={styles.button}>
                <Text style={{fontSize:20, fontWeight:'bold', color:'#BB0000'}}>CLEAR</Text>
              </View>
          </TouchableOpacity>
        </View>
        <View style={styles.subBox}>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text style={{fontSize:20, fontWeight:'bold', color:'#00DD00'}}>SUBMIT</Text>
              </View>
          </TouchableOpacity>
          </View>
      
>>>>>>> d51f3c7183236cad226ca0739d4bc1333c9bf5b2
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
<<<<<<< HEAD
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
  
=======
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#34495e',
  },
  button: {
    margin: 5,
    width: Dimensions.get('window').width/3 - 20,
    alignItems: 'center',
    backgroundColor: '#3F51B5',
  },
  buttonText: {
    padding: 5,
  },
    opsBox: {
    flexDirection: 'row',
    fontSize: 25,
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#5C6BC0',
  },
  hint: {
    padding: 15,
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#5C6BC0',
  },
  supBox: {
    flex: 4,
    alignSelf: 'stretch',
    backgroundColor: '#7986CB',
  },
  compBox: {
    flex: 4,
    alignSelf: 'stretch',
    backgroundColor: '#9FA8DA',
  },
>>>>>>> d51f3c7183236cad226ca0739d4bc1333c9bf5b2
  subBox: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#3F51B5',
  },
<<<<<<< HEAD
  
  button: {
    margin: 30,
    width: 100,
    alignItems: 'center',
    backgroundColor: '#3F51B5',
    borderRadius: 50
  },

=======
  text: {
    padding: 10,
    fontSize: 18,
  },
  grid: {

    flexDirection: 'row',
    flexWrap: 'wrap'
  },
>>>>>>> d51f3c7183236cad226ca0739d4bc1333c9bf5b2
});

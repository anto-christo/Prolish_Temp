import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';

var received_comp = new Array();
received_comp = 'apple ate';
var comp_words = new Array();
var answer = '';
var message1 = 'Compulsary words';
var word = '';

export default class Activity6 extends Component {
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

  _addWord = () => {
    answer = answer + ' ' + word;
    this.setState({ answer: answer });
    this.textInput.clear();
  };

  _clear = () => {
    answer = ' ';
    this.setState({ answer: answer });
  };

  render() {
    comp_words = received_comp.split(' ');

    var buttons1 = [];
    var len1 = comp_words.length;
    for (let i = 0; i < len1; i++) {
      buttons1.push(
        <TouchableOpacity
          onPress={() => this._handleButtonPress(comp_words[i])}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{comp_words[i]}</Text>
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.container}>

        <View style={styles.compBox}>
          <Text style={styles.text}>
            {message1}
          </Text>
          <View style={styles.grid}>
            {buttons1}
          </View>
        </View>
        <View style={styles.supBox}>
          <Text style={styles.text}>
            Your answer..
          </Text>

          <View style={styles.grid}>
            <Text style={styles.input}>{answer}</Text>
          </View>

          <Text style={styles.text}>
            Type here
          </Text>

          <View style={styles.grid}>
            <TextInput
              ref={input => {
                this.textInput = input;
              }}
              style={styles.input}
              placeholder="Answer"
              onChangeText={text => {
                word = text;
              }}
            />
            <TouchableOpacity onPress={() => this._addWord()}>
              <View style={styles.add}>
                <Text style={styles.buttonText}>Go</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
        <View style={styles.hint}>
          <View style={styles.hintt}>
            <Text style={{ color: 'white' }}>
              HINT!
            </Text>
            <Text style={{ color: 'white' }}>
              Chose compulsary words from above and put your own supplementary words to make a meaningful sentence!
            </Text>
          </View>
        </View>
        <View style={styles.subBox}>
          <TouchableOpacity onPress={() => this._clear()}>
            <View style={styles.button}>
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', color: '#BB0000' }}>
                CLEAR
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.subBox}>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', color: '#00DD00' }}>
                SUBMIT
              </Text>
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
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#34495e',
  },
  input: {
    margin: 5,
    marginLeft: 15,
    height: 40,
    flex: 0.9,
  },
  button: {
    margin: 5,
    width: Dimensions.get('window').width / 3 - 20,
    alignItems: 'center',
    backgroundColor: '#3F51B5',
  },
  add: {
    margin: 5,
    width: 50,
    alignItems: 'center',
    backgroundColor: '#3F51B5',
  },
  buttonText: {
    padding: 5,
  },
  hint: {
    padding: 15,
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#5C6BC0',
  },
  hintt: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  supBox: {
    flex: 4,
    alignSelf: 'stretch',
    backgroundColor: '#7986CB',
  },
  compBox: {
    flex: 2,
    alignSelf: 'stretch',
    backgroundColor: '#9FA8DA',
  },
  subBox: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#3F51B5',
  },
  text: {
    padding: 10,
    fontSize: 18,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

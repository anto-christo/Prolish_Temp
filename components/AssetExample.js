import React, { Component } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';

export default class AssetExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder = "Username"
          placeholderTextColor = "rgba(255,255,255,0.7)"
          underlineColorAndroid = "transparent"
          style = {styles.input}
        />
        
        <TextInput
          placeholder = "Password"
          placeholderTextColor = "rgba(255,255,255,0.7)"
          underlineColorAndroid = "transparent"
          secureTextEntry
          style = {styles.input}
        />
        
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  
  input: {
    height: 40,
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255,255,255,0.2)'
  },
  
  buttonStyle: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
  },
  
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF'
  }
});

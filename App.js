import React, { Component } from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.17.0

export default class App extends Component {
  render() {
    return (
            <KeyboardAvoidingView behavior = "padding" style={styles.container}>
      <View style={styles.container}>
          <AssetExample />
      </View>
            </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03A9F4',
    justifyContent: 'center'
  },
});

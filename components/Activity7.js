import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Constants } from 'expo';

var para = '_ earth we live in _ our only home.';
var words = para.split(" ");
var len = words.length;
var element =  new Array();
var received_supp = new Array();
received_supp = 'An The am is nice at';
var supp_words = new Array();
var ans = new Array();
var i,j=0,k=0,l=0;
ans[0]= '____ ';
ans[1]= '____ ';
ans[2]= '____ ';
ans[3]= '____ ';
ans[4]= '____ ';


export default class Activity4 extends Component {

  _handleButtonPress = key => {
    ans[l] = key+' ';
    this.setState({ element: element });
    l++;
  };
  
  render() {
    
    
    if(k==0)
    {
        element = [];
        j = 0;
        for( i=0 ; i<len; i++){
      
          if(words[i]=='_'){
              element.push(
                <Text style={{fontSize:20}}>
                  {ans[j]}
                </Text>
              );
             j++;
          }
          
          else{
            element.push(
                <Text style={{fontSize:20}}>{words[i]+" "}</Text>
            );
          }
      }
      
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
          <View style={styles.questBox}>
            {element}

          </View>
          <View style={styles.hint}>
          <View style={styles.hintt}>
          
            <Text style={{ color: 'white' }}>
               Chose words to fill in the blanks.
            </Text>
            
          </View>
          <View style={styles.grid}>
      			{ buttons2 }
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
    flex: 2,
    padding: 5,
    alignItems: 'center',
    alignSelf: 'stretch',
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
  buttonText: {
    padding: 5,
  },
  hint: {
    flex: 2,
    padding: 15,
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#5C6BC0',
  },
  button: {
    margin: 5,
    width: Dimensions.get('window').width/3 - 20,
    alignItems: 'center',
    backgroundColor: '#3F51B5',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

});

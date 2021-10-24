import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';
import dictionary from '../database';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      "word":word,
      "lexicalCategory":lexicalCategory,
      "definition":definition
    };
    var word= dictionary[text]["word"]
    var lexicalCategory= dictionary[text]["lexicalCategory"]
    var definition = dictionary[text]["definition"]
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'green'}
          centerComponent={{ text: 'Pocket Dictionary', style: { color: '#fff' } }}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({
              "word":word,
              "lexicalCategory":lexicalCategory,
              "definition":definition
            });
          }}
          value={this.state.text}></TextInput>
        <TouchableOpacity style={styles.button}
        onPress = {()=>{
          this.setState({displayText:this.state.text})
        }}>
        <Text> Go </Text>
        </TouchableOpacity>
        <Text style={styles.buttonText}>{this.state.displayText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 170,
    height: 40,
    margin: 12,
    borderWidth: 1,
    textAlign: 'center'
  },
  button: {
    marginTop: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 100,
    width: 150,
    height: 50,
    borderRadius: 20,
    backgroundColor: 'white',
    textShadowColor: 'black',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: ' Helvetica',
    fontSize: 20,
    marginLeft: 150, 
    marginTop: 50
  },
  
});

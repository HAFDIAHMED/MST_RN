import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import ListItems from './Components/listItems'
import AddItems from './Components/addItems'

export default class App extends Component {
  render () {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps='always'
      >
        <Text style={styles.welcome}>
          Welcome to MobX
        </Text>
        
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert
} from 'react-native';
export default class AppReactPertama extends Component {

  render() {
    const img = require('./img/me.jpg')
    const changeMe = () => {
      Alert.alert('Button has been pressed!')
    }
    return (
      <View style={styles.container}>
        <Image source={img} style={styles.img}/>
        <Text style={styles.name}>
          {profile.name}
        </Text>
        <Button onPress={changeMe} style={styles.instructions} title={profile.refactory} />
      </View>
    );
  }
}

const profile = {
  name: 'Ogi Gina Permana',
  refactory: 'Refactory Batch#1',
  team: 'Cammora'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#263238',
  },
  img: {
    width: 120,
    height: 160,
    borderRadius: 5,
  },
  name: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AppReactPertama', () => AppReactPertama);

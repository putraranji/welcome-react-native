/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
export default class AppReactPertama extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Image style={styles.image} source={{uri: "https://photos.google.com/photo/AF1QipNoXegimDfw_4zvaln8Qt1b8xwFpVjZ1FhP5Vuf"}} />
        <Text style={styles.profile}>
          Nama : OGI GINA PERMANA
        </Text>
        <Text style={styles.profile}>
          Batch Refactory
        </Text>

        <Text style={styles.welcome}>
          Selamat datang di React Native!
        </Text>
        <Text style={styles.instructions}>
          Untuk memulai, modifiasi index.android.js
        </Text>
        <Text style={styles.instructions}>
          Tekan tombol R dua kali untuk me reload aplikasi,{'\n'}
          Goncangkan atau tekan button menu untuk kembali ke menu dev
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
   image:{
    width: 100,
    height: 100,
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#33691E',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'#fff',
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
  },
  profile: {
    textAlign: 'left',
    margin: 5,
    color: '#fff',
  }
});

AppRegistry.registerComponent('AppReactPertama', () => AppReactPertama);

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
import { Container, Content, Header, Title, Thumbnail } from 'native-base';
export default class AppReactPertama extends Component {

  render() {
    const img = require('./img/me.jpg')
    const changeMe = () => {
      Alert.alert('Button has been pressed!')
    }
    return (
      <Container>
                <Header>
                    <Title>Profile Picture</Title>
                </Header>
                  <View style={styles.container}>
                    <Thumbnail style={styles.img} size={150} source={require('./img/person.png')} />
                    <Text style={styles.name}>
                      {profile.name}
                    </Text>
                    <Text style={styles.name}>
                      {profile.team}
                    </Text>
                    <Button onPress={changeMe} style={styles.instructions} title={profile.refactory} />
                  </View>
            </Container>
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
    backgroundColor: '#B71C1C',
  },
  img: {
    borderWidth: 1,
    borderColor:'#FFF',
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

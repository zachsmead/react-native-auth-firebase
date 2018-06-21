import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCDeADETnWAMNTeYkzdmBzWy3G8I9L8irI',
      authDomain: 'authentication-fdddb.firebaseapp.com',
      databaseURL: 'https://authentication-fdddb.firebaseio.com',
      projectId: 'authentication-fdddb',
      storageBucket: 'authentication-fdddb.appspot.com',
      messagingSenderId: '143323193780'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        // <LoginForm />
      </View>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCDeADETnWAMNTeYkzdmBzWy3G8I9L8irI',
      authDomain: 'authentication-fdddb.firebaseapp.com',
      databaseURL: 'https://authentication-fdddb.firebaseio.com',
      projectId: 'authentication-fdddb',
      storageBucket: 'authentication-fdddb.appspot.com',
      messagingSenderId: '143323193780'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View>
            <Spinner size='large'/>
          </View>
        );
    }

    if (this.state.loggedIn) {
      return (
        <Button>
          Log Out
        </Button>
      );
    }

    return <LoginForm />;
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

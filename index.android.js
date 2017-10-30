// index.io.js - place code in here for IOS!!!

// import a librat ro help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AllButton from './src/components/AllButton';

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'SMART HOME'} />
    <AllButton />
  </View>
);


// Render it to the device
AppRegistry.registerComponent('albums', () => App);

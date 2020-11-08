/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import Header from './src/components/Header';
import DashBoard from './src/screens/DashBoard';

const App = () => {
  return (
    <SafeAreaView>
      <Header />
      <DashBoard />
    </SafeAreaView>
  )
}


export default App;

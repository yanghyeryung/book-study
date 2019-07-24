import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Newsflash from './Newsflash';

export default function App() {
  return (
      <Newsflash/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

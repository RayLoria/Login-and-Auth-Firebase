import React from 'react'
import { ThemeProvider } from 'react-native-elements';
import './config/firebase';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './navigation';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigation></RootNavigation>
    </ThemeProvider>
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

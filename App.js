import React from 'react';
import {Home_page} from './screens/Home_page'
import { View, StyleSheet } from 'react-native';

export default function App()
 {
  return (
  
    <View style={styles.container}>
        <Home_page/>
    </View>

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


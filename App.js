import React from 'react';
import {Home_page} from './screens/Home_page'
import { View, StyleSheet } from 'react-native';
import {Upload_image_scan} from './screens/Upload_image_scan'

export default function App()
 {
  return (
  
    <View style={styles.container}>
        {/* <Home_page/> */}
        <Upload_image_scan/>
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


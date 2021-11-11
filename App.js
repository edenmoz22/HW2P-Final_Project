import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App()
 {
   const [outputText,setOutputText]=useState('test');
  return (
    <View style={{padding:50,width:'80%',height:300,justifyContent:'space-between',alignItems:'center'}}>
      <Text>HW2P-ברוכים הבאים ל</Text>
      <Button title="צפייה בתיקיות" onPress={()=> setOutputText("כפתור 0 עובד")}/>
      <Button title="העלאת תמונה לסריקה" onPress={()=> setOutputText("כפתור 2 עובד")}/>
      <Button title="אימון בסיס נתונים" onPress={()=> setOutputText("כפתור 3 עובד")}/>
      <Text>{outputText}</Text>
      <StatusBar style="auto" />
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

import React,{useState} from 'react';
import { View, Image } from 'react-native'
import {Main_button} from '../components/Main_button'
import Styles from '../Styles';


export const Home_page = () =>
 {
   const [outputText,setOutputText]=useState('test');
  
  return (
    <View style={Styles.container}>
        <Image 
        source={require('../assets/logo_final.png')} 
        style={Styles.image} 
        resizeMode="cover"/>
      <View style={Styles.containerButtons}>
        <Main_button onPress={()=> setOutputText("כפתור 0 עובד")}>
            צפייה בתיקיות 
            </Main_button>

            <Main_button  onPress={()=> setOutputText("כפתור 2 עובד")}>
                העלאת קובץ לסריקה
            </Main_button>

            <Main_button  onPress={()=> setOutputText("כפתור 3 עובד")}>
                אימון בסיס נתונים
            </Main_button>

      </View>
    

    </View>

  );
}



export default Home_page

import React,{useState} from 'react';
import { View, Image } from 'react-native'
import {Main_button} from '../components/Main_button'
import Styles from '../Styles';


export const Home_page = () =>
 {
  
  return (
    <View style={Styles.container}>
        <Image 
        source={require('../assets/logo_final.png')} 
        style={Styles.image} 
        resizeMode="contain"/>
        <Main_button >
            צפייה בתיקיות 
            </Main_button>

            <Main_button >
                העלאת קובץ לסריקה
            </Main_button>


      
    

    </View>

  );
}

export default Home_page

import React from "react";
import { View,Text } from "react-native";
import Styles from "../Styles";
import  {Select_Box } from "../components/Select_Box";
import {Main_button} from "../components/Main_button";


export const Upload_image_scan =() =>{
    return(
        <View style={Styles.container}>
            <View style={Styles.SelectContainer}>
             <Text style={Styles.textstyle} >
                ?האם תרצה לעלות תמונה מהגלריה או לצלם במצלמה
                </Text>
                <Main_button style={Styles.SelectContainer_buttons}>
                     מצלמה
                </Main_button>
                <Main_button style={Styles.SelectContainer_buttons}>
                     גלריה
                </Main_button>
                </View>
        </View>
        

    );
};

export default Upload_image_scan
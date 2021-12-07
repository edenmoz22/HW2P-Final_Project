import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Styles from '../Styles';



export const Select_Box = (props) =>
 {
  return (
        <View style={{...Styles.SelectContainer, ...props.style}}>{props.children} </View>
      
  );
}
export default Select_Box
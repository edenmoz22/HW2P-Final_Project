import React from 'react';
import {  TouchableOpacity, View, Text } from 'react-native';
import Styles from '../Styles';

export const Main_button = (props) =>
 {
  return (
      <TouchableOpacity activeOpacity={0.6} style={{...Styles.containerButtons , ...props.style}} onPress={props.onPress}>
        <View style={Styles.containerButton}>
            <Text style={Styles.textstyle}>{props.children}</Text>
        </View>
      </TouchableOpacity>

  );
}



export default Main_button


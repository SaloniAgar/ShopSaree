import React from 'react';
import {
    Pressable,
    Text,
    View,
} from 'react-native';

import styles from './styles';

const StyleButton = (props) =>{

  const {type,text,onPress} = props;
  const backgroundColor = type=='primary'?'#040D57':'#ffeffe';
  const textColor = type=='primary'?'#ffeffe':'#040D57';
  return (
    <View style={styles.container}>
    <Pressable 
    style= {[styles.button,{backgroundColor:backgroundColor}]}
    onPress={()=>onPress()}
    >
        <Text style={[styles.text,{color:textColor}]}>{text}</Text>
    </Pressable>
  </View>
  );
}
export default StyleButton;
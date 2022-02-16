import React from 'react';
import {
  ImageBackground,
  Text,
  View,
} from 'react-native';
import StyleButton from '../StyleButton';
import styles from './styles';

const SareeItem = (props) =>{

  const {name,price,image} = props.saree;

  return (
    <View style={styles.memesContainer}>
      <ImageBackground 
      source={image} 
      style={styles.image}
    />
    <View style={styles.titles}>
      <Text style={styles.title}>
      {name}
      </Text>
      <Text style={styles.subtitle}>
        INR Rs {price}/-
      </Text>
    </View>
    <View style={styles.buttonContainer}>
      <StyleButton type = 'primary'
      text = 'Buy'
      onPress= {()=>{
        console.warn('Buy Saree Clicked');
    }}/>
     <StyleButton type = 'secondary'
      text = 'Share' 
      onPress= {()=>{
        console.warn('Share Saree Clicked');
    }}/>
    </View>
    
  </View>
  );
}
export default SareeItem;
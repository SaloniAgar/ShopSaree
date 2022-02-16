import React from 'react';
import {
    FlatList,
    View,
    Dimensions
} from 'react-native';

import styles from './styles';
import sarees from './sarees';
import SareeItem from '../SareeItem';

const SareeList = (props) =>{

  return (

    <View style={styles.container}>
        <FlatList 
        data={sarees}
        renderItem={({item})=><SareeItem saree={item}/>}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicator={false}
        />
  </View>
  );
}
export default SareeList;
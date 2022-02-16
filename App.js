
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import SareeList from './components/SareeList';

function App(){

  return (
    <View style={styles.container}>

      <SareeList/>
      <StatusBar style="auto"/>
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

export default App;

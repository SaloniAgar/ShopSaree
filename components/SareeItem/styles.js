import { StyleSheet,Dimensions } from "react-native";

const styles = StyleSheet.create({
    memesContainer: {
      width: '100%',
      height: Dimensions.get('window').height,
    },
    titles: {
      marginTop: '10%',
      marginEnd: '5%',
      alignItems: 'flex-end',
    },
    title: {
      fontSize: 20,
      fontWeight: '600',
      color:'#581845'
    },
    subtitle: {
      fontSize: 15,
      color: '#581845',
    },
    image: {
      width: '100%',
      height:'100%',
      resizeMode: 'contain',
      position:'absolute'
    },
    buttonContainer: {
      flexDirection:'row',
      width:'100%',
      position:'absolute',
      bottom:50,
    }
  });

  export default styles;
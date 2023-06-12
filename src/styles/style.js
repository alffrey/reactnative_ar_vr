import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5F5F5',
    },
    mainview:{
      flex:1,
    },
    button: {
      marginVertical: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 8,
      backgroundColor: '#2196F3',
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  textStyle: {
    color: '#ffffff',
    fontSize: 24,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  controlsview:{
    width:'100%',
    height:100,
    backgroundColor:'#ffffff',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    margin:10,
    padding:10,
  },
  Buttext:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
  }
  });
 export {styles};



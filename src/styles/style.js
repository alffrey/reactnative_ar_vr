import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5F5F5',
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
  
  Buttext:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
  },
  mainview: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  controlsview: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10, // Add marginBottom to create a gap
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', // Set background color to transparent
  },
  circleImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#EE82EE',
    borderRadius: 5,
    padding: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  changeObjectButton: {
    backgroundColor: '#4B0082',
    borderRadius: 5,
    padding: 10,
    alignSelf: 'center',
    marginTop: 10, // Add marginTop to create a gap
  },
  changeObjectButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  });
 export {styles};



import { StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height


export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  image: {
    width: windowWidth,
    height: 300,

  },
  containerButtons:{
      flex: 1,
      borderRadius: 12,
      borderColor: '#AD67EA',
      justifyContent: 'space-evenly',
      width: '80%',
      height: '60%'

  
  },
  containerButton:{
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#AD67EA',
    width:windowWidth/2,
    height:windowHeight/10,
    justifyContent:'space-evenly',
    textAlign:'center',

},
buttonstyle: {
  width: '100%',
  color: '#fff',
  backgroundColor: 'red',
},
textstyle: {
    color: '#AD67EA',
    fontSize: 16,
    textAlign:'center',
},
  });
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
    height: 400,
    padding:100,


  },
  containerButtons:{
      flex: 1,
      borderRadius: 12,
      borderColor: '#AD67EA',
      justifyContent: 'space-evenly',
      width: '80%',
      height: '60%',

  
  },
  //הגדרות של הכפתור והמסגרת ביחס למסך
  containerButton:{
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#AD67EA',
    width:windowWidth/2,
    height:windowHeight/10,
    justifyContent:'space-evenly',
    textAlign:'center',
    padding:'200',


},
//Body text 
textstyle: {
    color: '#AD67EA',
    fontSize: 18,
    textAlign:'center',
},
SelectContainer:
{
  width:300,
  maxWidth:'80%',
  alignItems:'center',
  shadowColor:'black',
  shadowOffset:{width:0,height:2},
  shadowRadius:6,
  shadowOpacity:0.26,
  elevation:8,
  backgroundColor:'white',
  padding:20,
  borderRadius:10
},
SelectContainer_buttons:{
  flexDirection:'row',
  width:'100%',
  borderColor:'#AD67EA',
  justifyContent:'space-between',
  paddingHorizontal:15

},
inputText:{
  height:30,
  width:50,
  borderBottomColor:'grey',
  borderBottomWidth: 1,
  marginVertical:10,
  textAlign:'center',

},


  });
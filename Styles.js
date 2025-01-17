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
      // justifyContent: 'space-evenly',
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
    // justifyContent:'space-evenly',
    textAlign:'center',

},
smallbuttonupload:
{
  width:windowWidth/2.5,
},

//Body text 
textstyle: {


    color: '#AD67EA',
    fontSize: 18,
    textAlign:'center',
},
SelectContainer:
{
  width:400,
  height:600,
  maxWidth:'80%',
  shadowColor:'black',
  shadowOffset:{width:2,height:2},
  shadowRadius:10,
  shadowOpacity:0.26,
  elevation:8,
  backgroundColor:'white',
  borderRadius:70,
  alignItems:'center',
  justifyContent:'center',
  marginTop:10,

},
SelectContainer_buttons:
{
  flexDirection:'column',
  width:'100%',
  borderColor:'#AD67EA',
  justifyContent:'center',

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
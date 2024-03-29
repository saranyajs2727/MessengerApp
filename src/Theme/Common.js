/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native'
import buttonStyles from './components/Buttons'
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ Colors, ...args }) {
  return {
    button: buttonStyles({ Colors, ...args }),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.blue,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      textInput: {
        borderWidth: 1,
        borderColor: Colors.text,
        backgroundColor: Colors.inputBackground,
        color: Colors.text,
        minHeight: 50,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
      },
      container: {
        padding:15,
        marginTop:10,
      },
      image:{
        height:50,
        width:50,
        borderRadius:50,
        marginRight:10,
        marginLeft:9,
      },
      name :{
           fontWeight:'bold',
           fontSize:18,
           marginBottom:3,

      },
      rightCointainer:{
         justifyContent:"center",
      },
      row:{
        
      },
      text:{
  
        
      },
      notify:{
        backgroundColor:Colors.blue,
        borderRadius:10,
        height:20,
        width:20,
        marginRight:15,
        justifyContent:"center",
        alignItems:"center",


      },
      badgeText:{
        color:Colors.white,
        fontSize:12,
        fontWeight:"bold",
        
      },
      img:{
        alignItems: "center",
        justifyContent:"center",
        height:300,
        width:400,
        marginTop:30,
     },
      screen:{
      
      },
     title :{
       fontWeight:"bold",
       fontSize:50,
       color:Colors.white,
       marginLeft:20,
       letterSpacing:5,
      },
      talk :{
        color:Colors.white,
        marginLeft:20,
        fontSize:15,
        letterSpacing:2,
        marginTop:10,
      },
      btn :{
        marginTop:20,
        color:"black"
      },
      button:{
       color:"black"
      },
      page:{
        backgroundColor:Colors.white,
         
      },
      Message:{
         color:Colors.white,
      },
      ChatScreen:{
  
         padding:10,
         margin:10,
         borderRadius:10,
        maxWidth:"75%",
      },
      leftContainer: {
        backgroundColor: Colors.blue,
        marginLeft: 10,
        marginRight: "auto",
      },
      rightContainer: {
        backgroundColor: Colors.grey,
        marginLeft: "auto",
        marginRight: 10,
        alignItems: "flex-end",
      },
      root:{
       padding:10,
       flexDirection:"row"
      },
      inputContainer:{
        backgroundColor: "#f2f2f2",
        flex: 1,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#dedede",
        alignItems: "center",
        flexDirection: "row",
        padding: 5,
      },
      buttonContainer :{
        width: 50,
        height: 50,
        backgroundColor: "#3777f0",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
      },
    }),
  }
}

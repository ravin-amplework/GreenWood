import React from  'react';
import {Text,View,StyleSheet,Image,TouchableOpacity, Alert,Dimensions} from 'react-native';
import logo from '../assets/logo.png';
//import Icon from 'react-native-vector-icons';
import facebook from '../assets/facebook.png';
import google from '../assets/google.png';
import GreenButton from  '../components/Button';
import ButtonComponent from '../components/ButtonComponent'
import google1 from '../assets/google1.png';
import google2 from '../assets/google2.png';
import  MainButton from "../components/MainButton";


 export default class Home extends React.Component{
     
     constructor(props){
           super(props)
      }
     

      render(){
         
        
       
           return(
                <View style = {styles.container}>
           <Image   style={styles.img}  source = {logo} />  
                 
           <View style={{marginTop:height/18}}>
                <MainButton width={width/1.1} fontSize={21}  backgroundColor='#19d191'   color='white' borderRadius={10}  onPress={()=> this.props.navigation.navigate('login')} name='Sign in With  Email'  />
          </View> 
          <View  style={styles.btnsm}>
           <ButtonComponent   imageUri={facebook}  fontSize={21}  backgroundColor='#114e9a'   color='white' borderRadius={10}   name='Facebook'  />
           <ButtonComponent   imageUri={google1} fontSize={21} backgroundColor='tomato'   color='white' borderRadius={10}  name='Google'  />
         </View>
              
       <View style={styles.crAcc} >
            
        <Text style={{fontSize:20,color:'#4a4a4a'}}>Don't have an account? </Text> 
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('signup')}>
         <Text style={{fontSize:21,color:'#19d191'}}> Sign up</Text>
        </TouchableOpacity>
     
      </View> 

  


                </View>   
           )
      }
 }

 const width = Dimensions.get('window').width;
 const height=Dimensions.get('window').height;
 const styles = StyleSheet.create({
     container:{
          flex:1,
          flexDirection:'column',
          justifyContent:'flex-start',
          alignItems:'center',
          marginTop:height/7
     },
     img:{
         width:221,
         height:207,
         resizeMode:'contain'
         },
    btnLg:{
        marginTop:60,
         backgroundColor:'#19d191',
         height:50,
         width: 350,
         marginLeft:8,
         borderRadius:8
          },
    btntxt:{
      justifyContent:'center',
      alignSelf:'center',
      color:'white',
      fontSize:20,
      marginTop:16,
     // flexDirection:'row'

     },
     btnsm:{
          display:'flex',
         marginTop:27,
        
         
         flexDirection:'row',
         justifyContent:'space-evenly',
         alignItems:'center',
         borderRadius:10,
         width:450

     },
     btnFb:{
         backgroundColor:'#114e9a',
        width:160,height:60,
          borderRadius:8,
        // flexDirection:'row',
       
        

     },
     btnG:{
        backgroundColor:'tomato',
        width:160,height:60,
        borderRadius:8
     
        

     },
     crAcc:{
             flexDirection:'row',
           alignSelf:'flex-start',
          position:'absolute',
          bottom:height/20,
          left:width/7.7
          

     }


 });

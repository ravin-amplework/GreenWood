import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
//import Test from '../components/Test';
import GreenButton from '../components/Button'


export default class Splash extends React.Component{
   
  render(){ 
     
    console.log("slash called");

       return(
        <View>
        <GreenButton  title="Custom button"  type= 'outlined'  size='small'  borderd />
          </View>
       )
   }





};

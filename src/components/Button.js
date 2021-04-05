import React from 'react';
import {Text,TouchableOpacity,StyleSheet,Dimensions,View} from 'react-native';
 const width = Dimensions.get('window').width;
 const height = Dimensions.get('window').height;
const  small = width/1.3;
const  large = width/1;
   console.log(" button componentb called "+height);
  console.log(width);
const GreenButton = ({onPress,text , type ='filled', borderd = false, size = 'large'}) => {
  const btnsize = size ===  'large' ?  large : small;
  const btnbgcolor =  type === 'filled' ? '#3f51b5' : 'transparent';
  const btnTextColor = type === 'filled' ? '#ffffff' : '#6371c2';
   const borderRadius = borderd ? 20:7;
   const border = type === 'outlined' && { borderColor: '#e7e7e7', borderWidth: 10};
   const containerCommonStyle = {
    backgroundColor: btnbgcolor,
    paddingVertical: 8,
    width: btnsize,
    borderRadius: borderRadius
  }
   const textCommonStyle = {
    color: 'orange',
    paddingVertical: 8,
    width: btnsize,
    fontSize:16,
    textAlign:'center',
    borderRadius: borderRadius
   }
  


      return(
        <TouchableOpacity onPress={onPress}>
        <View style={[containerCommonStyle,border]}>
          <Text style={[textCommonStyle]}> {text} </Text>
        </View>
      </TouchableOpacity>
      );
     };
    
   
export default GreenButton;
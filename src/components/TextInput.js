
import React from "react";
import {Text,StyleSheet,View,TouchableOpacity,Dimensions} from 'react-native';
import { TextInput ,IconButton,Colors,Icon} from 'react-native-paper';

export default class InputText extends React.Component{
       constructor(props){
           super(props)
       }
       state= {
     isHidden:true
       }
   render(){
     //  console.log(this.props);
       return(
        <View style={styles.textInput} > 
         <TextInput  maxLength={this.props.maxLength} keyboardType={this.props.keyboardType} onBlur={this.props.onBlur} secureTextEntry={this.props.secureTextEntry} defaultValue={this.props.defaultValue}  value={this.props.value}  label={this.props.label} mode={this.props.mode} onChangeText={this.props.onChangeText} > 
       
         </TextInput>
         {/* <IconButton
          icon="eye"
          color={Colors.red500}
          size={20}
          onPress={() => console.log('Pressed')}
         /> */}
        
        </View>
       )
        
       
   }



};
 const width = Dimensions.get('window').width;
 const height = Dimensions.get('window').height;
 console.log("width is "+width);
   const small = width/1.1;
const styles = StyleSheet.create({
    textInput:{
     
   
        borderBottomColor:'#d8d8d8',
        width:small,
        height:height/9,
        marginTop:5,
    
        
    },
    
        
});

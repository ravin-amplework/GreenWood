import React from "react";
import {Text,StyleSheet,View,TouchableOpacity,Dimensions,Image} from 'react-native';
import google1 from "../assets/google1.png";

export default class ListItems extends React.Component{
       constructor(props){
           super(props)
            }
   render(){
    
       return(

             <View style={
            [styles.container, 
             {marginLeft:10,
             backgroundColor:this.props.backgroundColor 
             ,width:this.props.width,
             height:this.props.height}]} >
            
             <Image style={{ 
                width:this.props.imagesize,
                height:35,
               resizeMode:'contain',
        
               }} 
               source={this.props.imageUri } />
                   <Text style={{color:'white',padding:3,fontWeight:'bold',fontSize:15}}>{this.props.name}</Text>
             </View>
       )    
   }

};
 const width = Dimensions.get('window').width;
 const height = Dimensions.get('window').height;
 console.log("width is "+width);
   
const styles = StyleSheet.create({
    container:{
        
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        flexDirection:'column',
         
        
    
    },
    
        
});

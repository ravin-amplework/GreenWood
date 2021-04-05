import React from "react";
import {Text,StyleSheet,View,TouchableOpacity,Dimensions,Image} from 'react-native';


export default class ButtonComponent extends React.Component{
       constructor(props){
           super(props)
       }
   render(){
     //  console.log(this.props);
       return(
        <TouchableOpacity onPress={this.props.onPress}>
            <View style={styles.container}   backgroundColor={this.props.backgroundColor}  borderRadius={this.props.borderRadius}  >
            <View style={{flexDirection:'row'}}>
            <Image style={{ 
                width:25,
                height:'100%',
               resizeMode:'contain',
        
               }} 
               source={this.props.imageUri } />
         <Text   style={{color:this.props.color,fontSize:this.props.fontSize}}  color={this.props.color}  >  
                         {this.props.name}
        </Text> 
            </View>
            <View style={{marginLeft:16}}>
          
            </View>
            
            </View>
        </TouchableOpacity> 
       )
        
       
   }



};
 const width = Dimensions.get('window').width;
 const height = Dimensions.get('window').height;
 console.log("width is "+width);
   const small = width/2.7;
const styles = StyleSheet.create({
    container:{
        width:small,
        
         height:height/13,
        
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
      

        
    
    },
    
        
});

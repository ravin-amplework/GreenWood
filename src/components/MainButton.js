import React from "react";
import {Text,StyleSheet,View,TouchableOpacity,Dimensions,Image} from 'react-native';


export default class MainButton extends React.Component{
       constructor(props){
           super(props)
       }

   render(){
     //  console.log(this.props);
       return(
        <TouchableOpacity disabled={this.props.disabled}  onPress={this.props.onPress} activeOpacity={0.8}>
            <View style={styles.container}   width={this.props.width} backgroundColor={this.props.backgroundColor}  borderRadius={this.props.borderRadius}  >
         {/* <View style={{flexDirection:'row'}}> */}
           
         <Text style={{color:this.props.color,fontSize:this.props.fontSize}}  color={this.props.color}  >  
                         {this.props.name}</Text> 
            {/* </View> */}
            {/* <View style={{marginLeft:16}}>
          
            </View>
             */}
            </View>
        </TouchableOpacity> 
       )
        
       
   }



};

 const width = Dimensions.get('window').width;
 const height = Dimensions.get('window').height;
 console.log("width is " +width);
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

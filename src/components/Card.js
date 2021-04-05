import React from "react";
import {Text,StyleSheet,View,TouchableOpacity,Dimensions,Image} from 'react-native';
import google from "../assets/google.png";
import food from "../assets/food.jpeg";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export default class Card extends React.Component {
        constructor(props){
            super(props);
        }
  render(){
        
    
      return(
        //    <TouchableOpacity  style={{height:height/6}} sactiveOpacity={0.8}>
        //      <View style={[styles.container,{height:10}]}> 
        //           <View style={{flex:1,flexDirection:'row'}}>
        //             <Image style={{flex:1,height:'100%'}} resizeMode='cover' source={this.props.imageurl} />
        //             {/* position */}
        //             <View style={{position:'absolute',left:width/7,padding:8,width:40,height:height/15,top:width/30,  
        //                   backgroundColor:'rgba(0, 0, 0, 0.6)',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        //                 <Text style={{fontSize:15,color:'white'}} >jul</Text>
        //                 <Text style={{fontSize:20,color:'white'}} >13</Text>
        //             </View>
        //             <View  style={{flex:2}}>

        //              <Text style={{fontWeight:'bold',fontSize:16,left:6}}>LOVE + PROPAGANDA SATURDAY'S (seriesgrp)</Text>
        //              <Text style={{fontSize:15,color:'rgb 118 118 118',padding: 5,}} >Davies Symphony Hall, San Francisco, CA</Text>
        //             <View style={{top:-6.5,left:6}} >
        //             <Text style={{fontWeight:'bold'}} >Starts at $809.10</Text>

        //             </View>
        //            </View>
        //       </View>
 
        //     </View>
        //       </TouchableOpacity>
       
           <TouchableOpacity style={styles.container} activeOpacity={0.8}>
               <Image style={{flex:0.35,height:'100%'}} resizeMode='cover' source={this.props.imageurl} />
             
             <View style={{position:'absolute',left:width/6.5,padding:8,width:40,height:50,top:width/30,  
             backgroundColor:'rgba(0, 0, 0, 0.6)',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                 <Text style={{fontSize:15,color:'white'}} >jul</Text>
                 <Text style={{fontSize:20,color:'white'}} >13</Text>
             
             </View>
          
             <View style={{flex:0.65,paddingTop:6,paddingLeft:7}}>
               <Text style={styles.cardHeading}>
                   {this.props.Heading}
               </Text>
               <Text style={styles.cardContent} > 
                {this.props.Content}

               </Text>
               <View style={{height:9}}></View>
               <Text style={{color:'black',bottom:0}} >
               {this.props.Footer}
               </Text>
               </View>
               
           </TouchableOpacity>
    
      )
  }





}

const styles = StyleSheet.create({
     container:{
         flex:1,
         left:0,
         backgroundColor:'white',
       
         flexDirection:'row',
         width:width/1.2,
         height:height/6,
         margin:7,
         shadowColor: '#000',
         shadowOffset: { width: 0, height: 2 },
         shadowOpacity: 0.3,
         shadowRadius: 2,
        
    
     },
     cardHeading:{
        fontSize:16,
        color:'black'
     },
     cardContent:{
       marginTop:5,
       fontSize:13,
       color:'grey'
     }
     
     
})
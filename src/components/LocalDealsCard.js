import React from "react";
import {Text,StyleSheet,View,TouchableOpacity,Dimensions,Image} from 'react-native';
import google from "../assets/google.png";
import food from "../assets/food.jpeg";


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class Card extends React.Component {
        constructor(props){
            super(props);
           
        }
  render(){
      return(
        <View style={styles.container}>
              <View>
                 <TouchableOpacity style={[styles.Card,{width:this.props.width}]} activeOpacity={0.8} >
                  <Image style={{height:this.props.height,width:'100%'}} resizeMode='cover' source={this.props.ImageUrl} />
                  {/* bottom fixed */}
                  <View style={{position:'absolute', width:'100%', height:height/20,top:height/8.5,
                        backgroundColor:'rgba(0, 0, 0, 0.3)',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                   <View style={styles.categoryContainer}>
                           <Text style={styles.categoryText} >Gold’s gym</Text>
                        <View style={styles.textstyle} >
                           <Text style={{color:'white'}}>Exp. 15 Jun 2019 </Text>
                        </View>
                   </View>
              
                  </View>

           
                   <View style={{marginTop:10}}></View>   
                   <View style={{justifyContent:'center',alignItems:'flex-start'}}>
                       <Text style={{fontSize:16,fontWeight:'bold',left:5}}>{this.props.title}</Text>
                       <Text style={{fontSize:15,color:'#555555',left:6,top:5}}>on Yearly Subscription</Text>
                       </View>
                   
                 
                 
                </TouchableOpacity>

           </View>
          
          </View>
          
      )
  }





}

const styles = StyleSheet.create({
     container:{
       
           flex:1,
           justifyContent: 'center',
           alignItems:'center',
        //  backgroundColor:'green',
        //  height:100,
        //  flexDirection:'column',
        //  width:width/1.2,
        //  margin:10,
       
     },
     Card:{
          margin:7,
          paddingBottom:20,
          margin:8,
          backgroundColor:'white',
          borderRadius:7,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 2,
     },
     cardHeading:{
        fontSize:18,
        color:'black',
        marginBottom:10,
     },
     cardContent:{
       marginTop:10,
       fontSize:16,
       color:'grey'
     },
     categoryContainer:{
       
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
 
     
     
  },
  categoryText:{
      fontSize:16,
       color:'white',
       paddingHorizontal:10,
    
  }

     
     
})
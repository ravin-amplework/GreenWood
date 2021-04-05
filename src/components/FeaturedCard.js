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
                 {/* top Position */}
                  <View style={{position:'absolute',right:width/28,width:50,height:20,top:height/30,  
                        backgroundColor:this.props.RatingColor,flexDirection:'row',justifyContent:'center',alignItems:'flex-start'}}>
                  <Text style={{fontSize:20,color:'white'}} >{this.props.Star}</Text>
                  <Text style={{fontSize:14,color:'white'}} > {this.props.Rating}</Text>
                  </View>
                  {/* bottom fixed  */}
                  <View style={{position:'absolute',right:0,width:50,height:20,left:5,top:height/6.5, width:width/2.9, height:height/27,
                        backgroundColor:this.props.aligncolor,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                  <Text style={{fontSize:17, color:'white'}} > {this.props.alignText}</Text>
                  </View>
                  {/* first row text */}
                  <View  style={styles.categoryContainer}>
                            <Text style={[styles.categoryText,{fontWeight:'bold'}]} >{this.props.Heading}</Text>
                            <Text style={{color:'grey'}}>{this.props.Distance}</Text>
                  </View>  
                  {/* second row text */}
                  <View style={styles.categoryContainer}>
                       
                          <Text style={[styles.categoryText,{color:this.props.TypeColor,}]} >{this.props.Type}</Text>
                          <Text style={[styles.categoryText,{color:'#555555',marginRight:width/16}]} >{this.props.Price}</Text>

                          <Text style={{color:this.props.OfferColor,fontWeight:'bold'}}>{this.props.Offer}</Text>
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
      marginRight:20,
      marginTop:7
     
  },
  categoryText:{
      fontSize:16,
   
       paddingHorizontal:10,
    
  }

     
     
})
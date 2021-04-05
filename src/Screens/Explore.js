import React from 'react';
import { Text,View,StyleSheet,SafeAreaView,Dimensions,Button, FlatList, ScrollView} from 'react-native';
import { TextInput,IconButton,Colors } from 'react-native-paper';
import ListItems from "../components/ListItems";
import Icon from 'react-native-vector-icons/FontAwesome5';
import dining from "../assets/dining.png";
import entertainmentlogo from "../assets/entertainmentlogo.png";
import medical from "../assets/medical.png";
import dental from "../assets/dental.png";
import technology from "../assets/technology.png";
import Card from "../components/Card";
import food from "../assets/food.jpeg";
import eventImage from "../assets/eventImage.jpeg";
import eventImage2 from "../assets/eventImage2.jpeg";
import FeaturedCard from "../components/FeaturedCard";
import gym from '../assets/gym.jpeg';
import gym2 from "../assets/gym2.jpeg";
import LocalDealsCard  from "../components/LocalDealsCard";
import gym3 from "../assets/gym3.jpeg";
import CardData from "../assets/CardData";





const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

 const list = [''];


function ExampleView(props) {
    return ;
  }

const Explore = ({navigation}) =>{
 return(  
    
        <View style={styles.container}>
               <SafeAreaView style={styles.SafeAreaView}>
                  <Text style={styles.textstyle} >Explorer</Text>
                     <View style={styles.textstyle} >
                     <Icon onPress={() => navigation.navigate('search')} name="search" size={27} color="#4f4f4f" />
                     </View>
               </SafeAreaView>
           <ScrollView showsVerticalScrollIndicator={false}
                   showsHorizontalScrollIndicator={false} 
                    style={{backgroundColor:'#f6f6f6'}}>
       
               <FlatList 
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={list}
                  renderItem={() =>{
                  return(
                   <View style={styles.flatlist}>
                         <ListItems  imagesize={50} name='Dining' imageUri={dining} backgroundColor= '#ff7181'   width={width * 0.4} height={height * 0.233} />
                     <View style={{flexDirection:'column'}}>
                        <View style={{flexDirection:'row'}}>
                          <ListItems imagesize={40} name='Entertainment' imageUri={entertainmentlogo} backgroundColor= '#19d191' width={width * 0.4} height={height * 0.11} />
                          <ListItems imagesize={40} name='Medical' imageUri={medical} backgroundColor= '#50c9de' width={width * 0.4} height={height * 0.11} />
                          <ListItems imagesize={40} name='Dining' imageUri={dental} backgroundColor= '#ff7181'   width={width * 0.4} height={height * 0.11} />
                          <ListItems  imagesize={40} name='Dining' imageUri={dining} backgroundColor= '#ff7181'  width={width * 0.4} height={height * 0.11} />
                        </View>
                        <View style={{flexDirection:'row' ,marginTop:width/34}}>
                          <ListItems imagesize={40} name='Technology' imageUri={technology} backgroundColor= '#fe7a44'   width={width * 0.4} height={height * 0.11} />
                          <ListItems imagesize={40} name='Dental' imageUri={dental} backgroundColor= '#f3b163'    width={width * 0.4} height={height * 0.11} />
                          <ListItems  imagesize={40}  name='Dining' imageUri={entertainmentlogo} backgroundColor= '#ff7181'    width={width * 0.4} height={height * 0.11} />
                          <ListItems  imagesize={40}  name='Dining' imageUri={dining} backgroundColor= '#ff7181'   width={width * 0.4} height={height * 0.11} />
                       </View>
                    </View>
                
                  </View>
                  )
              }}
            />
              
      
          
            {/* Event Section */}
                  <View style={styles.categoryContainer}>
                      <Text style={styles.categoryText} >Events</Text>
                     <View style={styles.textstyle} >
                        <Text style={{color:'#19d191'}}>VIEW ALL</Text>
                     </View>
                </View>
          <View style={{height:height/5}} >
             <FlatList 
                   showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={CardData.Events}
                  renderItem={({item,index}) =>{
                  return(
                    <View style={styles.flatlist}>
                     <Card  imageurl={item.image}
                     Heading={item.title}
                     Content={item.content}
                     Footer={item.footer}/>
                      </View>
                     )
                  }}
               />  
          </View>
          {/* Nearby Store Section */}
         <View style={styles.categoryContainer}>
                     <Text style={styles.categoryText} >Nearby Stores</Text>
                  <View style={styles.textstyle} >
                     <Text style={{color:'#19d191'}}>VIEW ALL</Text>
                  </View>
         </View>

       <View style={{width:400,height:height/3.5}}  >
          <FlatList 
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={CardData.NearByStore}
            renderItem={({item,index}) =>{
           return(
               <View style={styles.flatlist}>
                     <FeaturedCard  
                     ImageUrl={item.image}
                     Heading={item.title}
                     Distance="3.7kM" 
                     Type="Fitness & Training"
                     TypeColor='#555555'
                     Offer="3 Offers" 
                     OfferColor='green'
                     Rating={4.8}
                     Star="*"
                     RatingColor='#56980a'
                     height={height/6}
                     width={width/1.4}/>
                   
               </View>
            )
            }}
          />  
    </View> 
           {/* Local Deals  */}
                <View style={styles.categoryContainer}>
                           <Text style={styles.categoryText} >Local Deals</Text>
                        <View style={styles.textstyle} >
                           <Text style={{color:'#19d191',fontWeight:'bold'}}>VIEW ALL</Text>
                        </View>
               </View>

               <View style={{width:400,height:height/3.5}}  >
             <FlatList 
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={CardData.LocalDeals}
            renderItem={({item,index}) =>{
           return(
               <View style={styles.flatlist}>
                   <LocalDealsCard
                     title={item.title}
                     ImageUrl={item.image}  
                     height={height/6}
                     width={width/1.7}
                     />
               </View>
            )
            }}
          />  
    </View> 

          {/*Latest Products   Deals   */}

             <View style={styles.categoryContainer}>
                     <Text style={styles.categoryText} >Latest Products</Text>
                  <View style={styles.textstyle} >
                     <Text style={{color:'#19d191',fontWeight:'bold'}}>VIEW ALL</Text>
                  </View>
             </View>

             <View style={{width:400,height:height/3}}  >
             <FlatList 
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={CardData.LatestProduct}
            renderItem={({item,index}) =>{
           return(
               <View style={styles.flatlist}>
                     <FeaturedCard  
                     ImageUrl={item.image}
                     Heading={item.title}
                     Offer="Save $301 (68% off)"
                     OfferColor='grey'
                     Price="($4545)"
                     Type="$455"
                     TypeColor='green'
                     height={height/5}
                     width={width/1.2}
                     aligncolor='rgba(0, 0, 0, 0.8)'
                     alignText='By Woodsworth'                     
                  
                    />
                    
               </View>
            )
            }}
          />  
    </View> 
         
             </ScrollView>
   
    </View>

    
 );
}
const styles = StyleSheet.create({
 container:{
    flex:1
     },
    SafeAreaView:{
         width:'100%',      
        flexDirection:'row',
        justifyContent:'space-between',
      
    },
    textstyle:{
         fontSize:30,
        alignItems: 'center',
        paddingVertical:20,
        paddingHorizontal:20,
        color:'#4f4f4f'

    },
    flatlist:{
        flexDirection:'row',
        marginVertical: 8,
        marginHorizontal: 12,
        height:height/4.2,
    
   
    },
    categoryContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
       
    },
    categoryText:{
        fontSize:18,
        alignItems: 'center',
        paddingVertical:20,
        paddingHorizontal:20,
        color:'#4f4f4f',
        fontWeight:'bold'
      
    }

       
  


})


export default Explore;
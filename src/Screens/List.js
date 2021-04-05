import React, {useState} from 'react';
import {View,Text,StyleSheet,TextInput,SafeAreaView, FlatList,TouchableOpacity,Dimensions, ScrollView} from 'react-native'

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;



var i,j;
const data=[1,2,3,4,5,6,7,8];

const  List = () => {
    
    const renderItem = ({item, index }) => {
      let list =[];
      for ( j = 1; j<=(Math.pow(2, index)); j++) {
              
              
        list.push(j);
     // setList([...List,j]);
   
         
        } 
            return (
              <FlatList 
                      //   horizontal={true}
                        data ={list}
                        keyExtractor={(index) => index.toString()}
                        renderItem={rendercomponent}
             />
            );    
           
         
      };

 
    const rendercomponent = ({item,index}) => {
      return(
        <View  style={{height:150,width:360,backgroundColor:'red',margin:1}}>
          <Text>{item}</Text>
     </View>
      );
    }
     return(
         
        <ScrollView contentContainerStyle={{marginVertical:40}}>
         
                      <FlatList
                         
                        horizontal={true}
                        data ={data}
                        keyExtractor={(index) => index.toString()}
                        renderItem={renderItem}
                      />
             
        </ScrollView>
       
     )

}

const styles = StyleSheet.create({


});

export default List;
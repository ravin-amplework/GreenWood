import React from 'react';
import axios from "axios";
import {View,Text ,FlatList,SafeAreaView,StyleSheet } from "react-native";

export default class Api extends React.Component {
    
constructor(){
    super();
    this.state={
        data:[]
    }
}

   componentDidMount()
   {
      this.getApiData()
   }
  async getApiData(){

    let resp = await axios.get('https://api.github.com/repos/ravin-amplework/GreenWood/commits');
      //console.log(resp);
    console.log(resp.data);
     this.setState({
         data:resp.data
     })
  
   }
     render(){
        const {data} = this.state;
        console.log(data,"data--------");
         return(
            <SafeAreaView style={styles.container}>
            <FlatList  
               data={data}
               keyExtractor={item => item.sha}
               renderItem={({item,index}) =>{
                return(
                    <View style={styles.item}>
                     {/* <Text>{item.node_id}</Text> */}
                       <Text  style={styles.title} >{item.commit.author.name}</Text>
                       {/* <Text>Commit message: {item.node_id}</Text> */}

                      <Text>Commit message: {item.commit.message}</Text>
                         <Text>Commit date: {item.commit.author.date}</Text>
                    </View>
                    
                 )
                 }}
             />
             </SafeAreaView>
           
         )
     }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  item: {
    backgroundColor: 'lightgrey',
    padding: 16,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 25,
  },
});
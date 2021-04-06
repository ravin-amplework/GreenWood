import React from 'react';
import axios from "axios";
import {View,Text ,FlatList,SafeAreaView,StyleSheet } from "react-native";
var array =[];
export default class Api extends React.Component {
 
constructor(){
    super();
    this.state={
        data:[]
    }
}

//   componentDidMount(){
//     axios.get('https://api.github.com/repos/ravin-amplework/GreenWood/commits/main').then(response => {
//      console.log(resp.data);
//         this.state({
//          data:response.data
//         })
//         console.log("data ",data);
//     });  
// }

   componentDidMount()
   {
      this.getApiData()
   }
  async getApiData(){

   
   await  axios.get('https://api.github.com/repos/ravin-amplework/GreenWood/commits/main')
    .then((response) => {
      //console.log(response.data, "Data ======");
      
   console.log("data ------ ",response.data);
      this.setState({
        data:response.data
       
    });
    console.log(data,"resp Data ");
       
         
    });
    
   
    
   
   }
     render(){
        const {data} = this.state;
       
         return(
            <SafeAreaView style={styles.container}>
            <FlatList  
               data={data.commit}
            //    keyExtractor={item => item.node_id}
               renderItem={({item,index}) =>{
               console.log("item=========",item);
                return(
                    <View style={styles.itemStyle}>
                     {/* <Text>{item.node_id}</Text> */}
                       <Text  style={styles.title} >{item.commit.author.name}</Text>
                       <Text  style={styles.title} >{item.commit.author.date}</Text>

                      {/* <Text>Commit message: {item.commit.message}</Text>
                         <Text>Commit date: {item.commit.author.date}</Text> */}
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
  itemStyle: {
    backgroundColor: 'lightgrey',
    padding: 16,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 25,
  },
});
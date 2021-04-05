import React,{useState} from "react";
import { View,Text,StyleSheet,Dimensions,Image,TouchableOpacity,Alert,FlatList,Button, LogBox} from "react-native";
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card from "../components/Card";
import eventImage from "../assets/eventImage.jpeg";
import eventImage2 from "../assets/eventImage2.jpeg";
import CardData from "../assets/CardData";


 let n = 5;
 for (let i = 0; i < n; i++) 
  {
     for (let j = 1; j <= n; j++) 
     {
        console.log(i+ '');
       
     }

   
  }





const height = Dimensions.get('window').height;

let list = [''];
let data =[''];
let array =[''];
  const searchdata = [
    {title:'LOVE + PROPAGANDASATURDAY'},
    {title:'Gold’s gym'},
    {title:'15% OFF on Cardio & Yoga on Yearly Subscription'},
    {title:'Roger Solid Wood One Seater Sofa'}
    
  ]
  const Search = () =>{
   const [DealsData,setDealsData] = useState(['']);
    const [text,settext] = useState('');
    const [History,setHistory] = useState(['']);
    const [filteredData,setfilteredData] = useState(['']);
    const [savedata,setSavedata] = useState([''])
   
  //  console.log(JSON.stringify(CardData.Events),"card data ");
    //  let Events = JSON.stringify(CardData.Deals);
    //  setDealsData(Events);
   
     
    const updateSearch = () => {
           data.push(text);
           console.log(data,"------DATA PUSHED---------");  
     
      
         storeData();
         console.log(filteredData,"filterrrr");
            if (text.length > 0) {

            let lowertext = text.toLowerCase();
            let filteredData = CardData.Events.filter(function (item) {
            
                return item.title.toLowerCase().includes(lowertext);
            }); 

         
           console.log(filteredData,"-----------");


           if(filteredData && filteredData.length){
            setfilteredData(filteredData);
            console.log("filterdata set");
           }else{
             console.log("set Searched data");
            setfilteredData({searchdata})
           }
          }
       
      };
     const storeData = async () => {
        try { 
        
       
          await AsyncStorage.setItem('UserInput',JSON.stringify(data));
            console.log("saved data");
        } 
        catch (error) {
          console.log("error block called",error);
        }
      };
      
  
     const  showHistory = async () => {
        try {
          const user = await AsyncStorage.getItem('UserInput');
          if (user !== null ) {
          console.log("retrive data ",JSON.parse(user));     
          }
          return (
            <View  style={{justifyContent:'center',alignItems:'center'}}>
           <Text style={{fontSize:20}}>
             No Data Found
           </Text>
            </View>
         
         );  
        } catch (error) {
        console.log("Error block  called",error);
        }
      };
    
     const clearAll = async () => { 
     
        try {
        const empty = await AsyncStorage.removeItem('UserInput');
        data.pop();
        console.log(empty,"=========");
        } catch (error) {
        console.log(error);
        }
        }; 
      const cleardata = () =>  {
        clearAll();
      }
    const  EmptyListMessage = () => {
       
         console.log('-----------------',filteredData)
        if(!filteredData.length > 0 ){
          return (
             <View  style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20}}>
              No Data Found
            </Text>
             </View>
          
          );
        }
       
      }; 
        return(
            <View >
                <SearchBar
                        placeholder="Type Here...."
                        onChangeText={(text) => settext(text)}
                        value={text}
                        onClear={() => {showHistory()}}
                        platform="ios"
                        cancelButtonTitle={'cancle'}
                        cancelButton={true}
                        onSubmitEditing={()=> updateSearch() }
                        onCancel={() => {
                           console.log("history",History);
                            showHistory()
                          }}
                        lightTheme={true}
                        containerStyle={{ backgroundColor:'white',width:'100%',}}
                        // style={{height:200,width:300}}
                    />
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:30,alignSelf:'center'}}>{History}</Text>
                      <Button title='clear' onPress={cleardata} />

                    </View>
                    <FlatList 
                   showsHorizontalScrollIndicator={false}
                   horizontal={false}
                   data={filteredData}
                  
                   ListEmptyComponent={EmptyListMessage}
                  renderItem={({item,index}) =>{
                  //   {CardData.map((data,index)=>{
                      
                      return(
                    
                        <View  style={styles.items}>
                        <Card  imageurl={item.image}
                        Heading={item.title}
                        Content={item.Content}
                        Footer={item.footer}/>
                       </View>
                        )
                //  }
                //  )}
                 
                  }}
               />  
            </View>
        )


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  items: {
  
    padding: 7,
    marginVertical: 2,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  flatlist:{
    flexDirection:'row',
    marginVertical: 8,
    marginHorizontal: 12,
    height:height/4.2,


},
});

export default Search;
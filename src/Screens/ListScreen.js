import React from 'react';
import {View,Text,StyleSheet,TextInput,SafeAreaView, FlatList,TouchableOpacity,Dimensions} from 'react-native'
import ButtonComponent from "../components/ButtonComponent";  
import MainButton from "../components/MainButton";
const  reanderData =[
  {name:'Ravin'},
  {name:'Ravin kumar'},
  {name:'Ravin k'},
  {name:'Eric'},
  {name:'Ramdas'},
  {name:'John' },
  {name:'Ronmen'},
  {name:'Thor'},
  {name:'Caption'},
  {name:'Hulk'},
  {name:'Buster'},
]
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class List extends React.Component{
  

  constructor (props){
    super(props)
   this.state = {
      
       query:"",
       data: [],
      filteredData: [],
      noData:false,
      isHidden: true


   }



 } 
 componentDidMount()  {
  let arr = reanderData.map((item,index)=>{
       item.isSelected = false 
       return {...item}
  })
  console.log(arr);
  this.setState({filteredData: arr})
  
  }

  changeText = (ind,selected) => {
      
      let arr =  reanderData.map((item,index) =>{
             
           if(ind == index && !selected){
          
               item.isSelected = true 
               isHidden = true
           }
           else if(ind == index && selected){
             item.isSelected = false
             isHidden = true
           }
           
           return {...item}
       })
       console.log(arr);
       this.setState({filteredData: arr})
  }
   handleSearch = (text) =>{
    
      if (text.length > 0) {
        let lowertext = text.toLowerCase();
        let filteredData = reanderData.filter(function (item) {
            return item.name.toLowerCase().includes(lowertext);
        });   
        
       if(filteredData && filteredData.length){
        this.setState({
          filteredData:filteredData
      }) 
       }else{
        this.setState({filteredData:[]})
       }
      }else {
        this.setState({filteredData: reanderData});
      
      }

         }

       EmptyListMessage = () => {
        const {filteredData} = this.state;
         console.log('-----------------',filteredData)
        if(!this.state.filteredData.length > 0 ){
          return (
             <View  style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20}}>
              No  Matched  Data Found
            </Text>
             </View>
          
          );
        }
       
      }; 
 
   render(){
     let {filteredData, reanderData,name} = this.state
    
    return(
      <View>
     <SafeAreaView>
      
       {/* <Text style={{ alignSelf:'center' ,fontSize:20}}>Select Catogery</Text> */}
        <TextInput  style={{
          marginTop:10,
          marginLeft:20,
          paddingLeft:20,
          height:50,
          
          marginRight:20,
          backgroundColor:'lightgrey',
          fontSize:20,
        borderRadius:20
             
         }}
      
         onChangeText={text => this.handleSearch(text)}
       
         
         
        placeholder="enter text "/>
      </SafeAreaView>

     <View>
      <FlatList  style={{marginTop:20}}
                 keyExtractor = {reanderData => reanderData.name }
                 data={filteredData}
                 ListEmptyComponent={this.EmptyListMessage}
                 // data={this.state.reanderData}
                 renderItem={({item, index}) =>{
                    return(
                        <TouchableOpacity 
                        onPress={() => this.changeText(index,item.isSelected)} >
                        <Text style={
                             item.isSelected == true
                             ? 
                             {
                                marginVertical :5,
                                paddingLeft: 10,
                                padding:12,
                                backgroundColor:"#E8E8E8",
                                fontSize:17.6,
                                width:380,
                                left:10,
                                marginRight:10,
                                color:'blue'
                              
                             }
                             :
                             {
                                marginVertical :3,
                                paddingLeft: 10,
                                padding:12,
                                backgroundColor:"white",
                                fontSize:17.6,
                                width:360,
                                left:10,
                                color:'black'
                              
                             }
                            }
                            >
                              
                         {item.name}
                         {/* { 
                           this.state.isHidden == true ?  
                   
                            <Text >show</Text>
                    
                         : null
                          }  */}
                        
         
                        </Text>
                        </TouchableOpacity>
                        
                    )
         
                 }}
              
              
              
              />
     </View>
     <View style={{bottom:-80,left:20,position:'absolute',justifyContent:'flex-start',alignItems:'stretch'}}>
          <MainButton width={width/1.1} fontSize={21}  backgroundColor='#19d191'   color='white' borderRadius={10}  onPress={()=> this.props.navigation.navigate('home')} name='Continue'  />
          </View> 
  </View>
    )
   }
 

}

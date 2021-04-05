import React, {useState} from 'react';
import {TextInput,Text,StyleSheet, View,Image,label,TouchableOpacity,Alert,Dimensions} from 'react-native';
import logo from '../assets/logo.png';
import  InputText from "../components/TextInput";
import  MainButton from "../components/MainButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import { Bracket, RoundProps } from 'react-brackets';
//console.log("RoundProps");
const  SingIn = ({navigation}) =>{
     const[email,setEmail] = useState();
     const[password,setPassword] = useState();
    // console.log("retrive");
    retrieveData = async () => {
      try {
        const user = await AsyncStorage.getItem('username');
       const pass = await AsyncStorage.getItem('password');
      //  const parsed = JSON.parse(pass);
      //  console.log("parsed------",parsed); 
     
        if (user !== null  && pass !== null) {
          // We have data!!
          setEmail(user);
          setPassword(pass);
       //  alert(email,password);
          console.log(password,"--------------  passsoerd ")
       //   console.log("Value is ",user);
          console.log("password is ",pass);
        }
      } catch (error) {
      console.log("Error block  called",error);
      }
    };
    retrieveData();

     return(
       <View style={styles.container}>
         <Image 
          source ={logo}/>
         <View style={{marginTop:height/20.7}}>
         <InputText defaultValue={email}  />
         <InputText  defaultValue={password} />
         
         </View>
         
         <View style={styles.sinInForgetbtn}>
         <View style={{marginTop:height/27}}>
         <MainButton    width={width/2.6} fontSize={21}  backgroundColor='#19d191' onPress={()=> navigation.navigate('home')}  color='white' borderRadius={10}  name='Sign In'  />
         </View> 
             {/* <TouchableOpacity style={styles.LoginBtn} onPress={() =>Alert.alert("Login Pressed")}  >
                 <Text style={{color:'white',fontSize:20}}>Sign In</Text>
             </TouchableOpacity> */}
             <TouchableOpacity style={styles.ForgetBtn} onPress={()=> Alert.alert("forget pressed!")} >
               <Text style={{color:'#d84859',fontSize:18}}>Forget Password?</Text></TouchableOpacity>
         </View>

         <View style={styles.Backbtn}>
         <TouchableOpacity  onPress={()=>  navigation.navigate('home')}>
          <Text style={{fontSize:20,color:'#4a4a4a'}}>
         {'<< Go back'}  
          </Text>

       </TouchableOpacity>

         </View>
         
       </View>
  
        );
     
};
 const height = Dimensions.get('window').height;
 const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:100
   },
   img:{
       width:221,
       height:207,
       resizeMode:'contain'
       },
    textInput:{
     marginTop:3,
        borderBottomWidth:1,
        borderBottomColor:'#d8d8d8',
        width:360,
        height:60,
        
    },
    sinInForgetbtn:{
        display:'flex',
    
         
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderRadius:10,
        
        
       

    },
    LoginBtn:{

        
        backgroundColor:'#19d191',
        fontSize:20,
        width:180,
        height:70,
        justifyContent:'center',
         marginTop:17,
       alignItems:'center',
       borderRadius:10,
       color:'white'
        
       
    },
    ForgetBtn:{
        
        width:180,
        height:30,
        justifyContent:'center',
         marginTop:20,
       alignItems:'center',
       
       
    },
    Backbtn:{
         justifyContent:'flex-end',
        alignSelf:'center',
        flexDirection:'column-reverse',
         position: 'absolute',
         bottom:height/30.8
       
    
        
    }



});

export default SingIn;
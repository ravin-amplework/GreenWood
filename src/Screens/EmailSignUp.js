import React, {useState} from 'react';
import {TextInput,
    Text,StyleSheet,
     View,Image,
     label,
     TouchableOpacity,
     Alert
     ,Dimensions,
     ScrollView, 
     Modal,
     
    } from 'react-native';
import logo from '../assets/logo.png';
import InputText from '../components/TextInput';

import MainButton from "../components/MainButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SimpleModal from "../components/Modal";
import Toast ,{ BaseToast }  from 'react-native-toast-message';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { IconButton, Colors } from "react-native-paper";

const  SingUp = ({navigation}) =>{
  
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [isModalVisible,setisModalVisible] = useState(false);
    const [isDisabled,setisDisabled] = useState(false);
    const [number,setNumber] = useState();
    const [isVisible,setIsVisible] = useState(false);
    const [Lock,setLock] = useState(true);
  
    const toastConfig = {
      success: ({ text1,text2, ...rest }) => (
        <BaseToast
          {...rest}
           style={{ borderLeftColor: 'red' }}
          
          contentContainerStyle={{ paddingHorizontal: 7 }}
          text1Style={{
         
            fontSize:17,
            fontWeight: 'bold'
          }}
          text2Style={{
            fontSize: 13,
             
            fontWeight: 'bold'
          }}
          text1={text1}
          text2={null}
         
        />
      )
    };

  const validate = ()  => {
    
   
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      let num = /^[0-9]+$/;
      if( email === ''){
        Toast.show({
          visibilityTime: 100,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 30,
          position:'bottom',
          text1:' Email is Requried',
          text2:'password is not matched try again'
          
        });
      }
     else  if (reg.test(email) === false ) {
  
        Toast.show({
          visibilityTime: 100,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 30,
          position:'bottom',
          text1:'Enter Email in Correct Format',
          text2:'Email is Not Correct'
        
        });
    
       
      console.log("Email is Not Correct");
     
    }
    else if( password === ''){
      Toast.show({
        visibilityTime: 100,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 30,
        position:'bottom',
        text1:' Password is Requried',
        text2:'password is not matched try again'
        
      });
    }
    else if(password.length < 6 ){
        console.log("password is shorter");
       
        Toast.show({
          visibilityTime: 100,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 30,
          position:'bottom',
          text1:'password must be more then 6 characters',
          text2:'password must be more then 6 characters'
          
        });
     // return alert("password must be more then 6 characters");
    
    }
    else if( confirmPassword === ''){
      Toast.show({
        visibilityTime: 100,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 30,
        position:'bottom',
        text1:' Enter Confirm Password',
        text2:'password is not matched try again'
        
      });
    }
    else if(password.length !== confirmPassword.length ){
      console.log("not equal");
      Toast.show({
        visibilityTime: 100,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 30,
        position:'bottom',
        text1:'Password Not Matched',
        text2:'password is not matched try again'
        
      });
    //  return alert("password is not matched try again");
    }
   
    else if( number === ''  ){
      Toast.show({
        visibilityTime: 100,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 30,
        position:'bottom',
        text1:' Enter Mobile Number',
       
        
      });
    }
    else if (num.test(number) === false || number.length < 10) {
      Toast.show({
        visibilityTime: 100,
         autoHide: true,
        topOffset: 30,
        bottomOffset: 30,
        position:'bottom',
        text1:'Enter Correct mobile ',
       
        
      });
           //return alert("number must be Digit")
    } 
    else if (email === '' || password === '' || confirmPassword === '' || number === ''){
      return alert("any of field must be not empty !!")
    }

    else {
     console.log("email is correct");
    // setEmail(text);
       setisDisabled(false)
       storeData();
    }
   
  }
  
  



 const   storeData = async () => {
    try { console.log(email,"-------------");
    console.log(password,"=================");
         await AsyncStorage.setItem('username',email);
      const pass =  await AsyncStorage.setItem('password',password);
  
        changemodeVIsible(true)
        // navigation.navigate('login');
         
    } catch (error) {
      console.log("error block called",error);
    }
  };
  
  const  changemodeVIsible = (bool) => {
    setisModalVisible(bool)
   }

   const handlenavigation =()=>{
     console.log("navigation");
     navigation.navigate('login');
     setisModalVisible(false)
   }
   
   
   
   const handleChange = () => {
   
    setLock(Lock ? false : true);
  
  };


     return(
       
   <View style={styles.container}>
     
        <Image source ={logo}/>
        
   <KeyboardAwareScrollView  showsVerticalScrollIndicator={false} > 
       
  
    <View style={{marginTop:10}}>
   

 
  <InputText label="EMAIL ADDRESS" 
      onChangeText={(text) => setEmail(text)} />
  <InputText label="PASSWORD" secureTextEntry={Lock} 
    onChangeText={(text) => setPassword(text)} />
  <InputText label="CONFIRM PASSWORD" 
    onChangeText={(text) => setConfirmPassword(text)}  />
    <InputText maxLength={11} label="MOBILE"   keyboardType='numeric'
     onChangeText={(text) => setNumber(text)}/>
   
   </View>
   {/* <View style={{margintrueTop:height/27}}> */}
   <MainButton   disabled={isDisabled} width={width/2.6} fontSize={21}  backgroundColor='#19d191'   color='white' borderRadius={10} onPress={validate}  name='Sign Up'  />
   {/* <MainButton   disabled={isDisabled} width={width/3.6} fontSize={21}  backgroundColor='red'   color='white' borderRadius={10} onPress={handleChange}  name='pass lock check'  /> */}

   {/* </View>  */}
   
   <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => changemodeVIsible(false) }
   >
     <SimpleModal 
     changemodeVIsible={changemodeVIsible}
     navigateToScreen={handlenavigation}
     />


   </Modal>
   
   <View style={styles.Backbtn} > 
       {/* <mainButton  fontSize={21} backgroundColor='greeen'   color='white' borderRadius={10}  name='Sign'  /> */}

       <TouchableOpacity  onPress={()=>  navigation.navigate('home')}>
          <Text style={{fontSize:20,color:'#4a4a4a'}}>
         {'<< Go back'}  
          </Text>

       </TouchableOpacity>
       
   </View>
   </KeyboardAwareScrollView>
   
       
      
      
   <Toast visible={isVisible} position='bottom' config={toastConfig} ref={(ref) => Toast.setRef(ref)} />

   </View>
        
   
      
       
      
  
        );
     
};
const height=Dimensions.get('window').height;
 const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
      marginTop:height/12
   },
   img:{
       width:221,
       height:207,
       resizeMode:'contain'
       },
    textInput:{
     
        borderBottomWidth:1,
        borderBottomColor:'#d8d8d8',
        width:360,
        height:50,
        
    },
    sinInForgetbtn:{
        display:'flex',
   
       
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        borderRadius:10,
        width:300,
    },
       

  
    view:{
  
        backgroundColor:'#19d191',
        top:height/27,
        width:width/2.6,
        height:height/14,
        flexDirection:'row',
        justifyContent:'center',
         
       alignItems:'center',
       borderRadius:10,
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
        bottom:height/46
       
    
    
        
    }



});

export default SingUp;
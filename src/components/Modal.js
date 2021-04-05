import React ,{ useState } from "react";
import { Text,View,TouchableOpacity,Dimensions,StyleSheet } from "react-native";

const width = Dimensions.get('window').width;
 const ModalHeight = 160;

const SimpleModal = (props) =>{
     console.log(props);
    const closeModel = (bool)  => {
         props.changemodeVIsible(bool);
    }

     return(
         <TouchableOpacity
          disabled={true}
          style={styles.container}
          >
          <View style={styles.modal}>
              <View style={styles.viewtext}>
                  <Text style={styles.textstyle}>
                     Signup Successfull !!
                  </Text>
                  <Text style={[styles.textstyle, {fontSize:14,color:'grey'}]}>
                      
                        press Yes to  go on Login page
                  </Text>
              </View>
              <View style={styles.buttonsView}>
                  <TouchableOpacity style={styles.touchableOpacity} onPress={() => closeModel(false)}>
                   <Text style={[styles.textstyle, {color:'red'}]} >Cancle</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.touchableOpacity} onPress={props.navigateToScreen} >
                   <Text style={[styles.textstyle, {color:'blue'}]}>Yes</Text>
                  </TouchableOpacity>

              </View>
          </View>

         </TouchableOpacity>
     )


}
const styles = StyleSheet.create({
    container:{
        flex:1,
         justifyContent:'center',
         alignItems:'center'
    },
    modal:{
        height:ModalHeight,
        backgroundColor:'white',
        paddingTop:14,
        borderRadius:12,
        width:width- 80
    },
    viewtext:{
        flex:1,
        alignItems:'center'
    },
    textstyle:{
        margin:8,
        fontSize:19,
        fontWeight:'bold'
    },
    buttonsView:{
         width:'100%',
         flexDirection:'row'
    },
    touchableOpacity:{
        flex:1,
        alignItems: 'center',
        paddingVertical:20,
        
    }

})

export default SimpleModal;
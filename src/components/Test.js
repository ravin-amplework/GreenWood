import React from 'react';
import {Text,StyleSheet, View,Dimensions,TouchableOpacity} from 'react-native';
import { color } from 'react-native-reanimated';

export default class Test extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
      //  const width = Dimensions.get('window').width;
    //console.log(width);
        return(  
        
        
        <TouchableOpacity>
             <View style={styles.container} backgroundColor={this.props.backgroundColor}>
             <Text color={this.props.color} >Demo Component {this.props.name}</Text>
             </View>
          </TouchableOpacity>
           
            
                     
        );
    }




};

const styles = StyleSheet.create({
    container:{
        backgroundColor:backgroundColor,
        width:100,
        height:100,
      alignItems:'center',
      justifyContent:'center'

    },
    txt:{
       color:color,
       
    }
})

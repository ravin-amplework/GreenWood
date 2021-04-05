import * as React from 'react';
import { Text, View ,Button,Image,color,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from "@react-navigation/stack";
import Home  from "./src/Screens/Home";
import SingIn from "./src/Screens/EmailSignIn";
import  SignUp from "./src/Screens/EmailSignUp";
import  List from "./src/Screens/ListScreen";
import Explore from './src/Screens/Explore';
import dental from "./src/assets/dental.png";
import Icon from 'react-native-vector-icons/FontAwesome5';
import exploreImage from "./src/assets/exploreImage.png";
import eventtabimage from "./src/assets/eventtabimage.png";
import producttabimage from "./src/assets/producttabimage.png";
import moretabimage from "./src/assets/moretabimage.png";
import dealtabimage from "./src/assets/dealtabimage.png";
import Search from "./src/Screens/SearchScreen";
function Detail() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}


const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="home" component={Home} options={{headerShown:false}} />
      <HomeStack.Screen name="login" component={SingIn} options={{headerShown:false}} />
      <HomeStack.Screen name="signup" component={SignUp} options={{headerShown:false}} />
    </HomeStack.Navigator>
  );
}
const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={Detail} />
    </SettingsStack.Navigator>
  );
}
const ExploreStack = createStackNavigator();
function ExploreStackScreen() {
  return (
    <ExploreStack.Navigator>
       <ExploreStack.Screen name="Explore" component={Explore} />
      <ExploreStack.Screen name="search" component={Search} />
    
    </ExploreStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const labelStyle ={
 style:{
  backgroundColor:'red'
 }
}
const customTabBarStyle = {
  activeTintColor: 'green',
  // showLabel: false,
  shifting: true,
  inactiveTintColor: 'gray',
  activeBackgroundColor: '#d4d4d4',
  activeTabIndicator: {
    visible: true,  // Means that when that bottom tab is active the indicator will or not appear
    style: 'line', 
    
  },
  style: {
    borderTopWidth: 0,
    
    paddingBottom: 25,
    height: 90,
    
  
  
   
    
  },
  
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
  
        style={styles.tabbar}
        initialRouteName="Explorer"
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            if (route.name === 'Event') {
              return (<Image source={eventtabimage} style={{resizeMode:'contain',width:32,height:40}}></Image>);
            } else if (route.name === 'Deals') {
              return (<Image source={dealtabimage} style={{resizeMode:'contain',width:30,height:40}}></Image>);
            } else if (route.name === 'Explorer') {
              return (<Image source={exploreImage} style={{resizeMode:'contain',width:50,height:40}}></Image>);
            } else if (route.name === 'Product') {
              return (<Image source={producttabimage} style={{resizeMode:'contain',width:25,height:40}}></Image>);
            } else if (route.name === 'More') {
              return (<Image source={moretabimage} style={{resizeMode:'contain',width:30,height:40}}></Image>);
            }
          },
          tabBarLabel: ({ focused,color}) => {
            let label;
            switch (route.name) {
              case 'Event':
                return label = focused ? <Text style={{ color }} >Event</Text> : <Text style={{ color }}  >Event</Text>
              case 'Deals':
                return label = focused ? <Text style={{ color }}>Deals</Text> : <Text style={{ color }}>Deals</Text>
              case 'Explorer':
                return label = focused ? <Text style={{ color }}>Explore</Text> : <Text style={{ color }}>Explore</Text> 
              case 'Product':
                return label = focused ? <Text style={{ color }}>Product</Text> : <Text style={{ color }}>Product</Text>
              case 'More':
                return label = focused ? <Text style={{ color }}>More</Text> : <Text style={{ color }}>More</Text> 
            }
            return label
          },
         
        })}
        tabBarOptions={customTabBarStyle}
      >
        <Tab.Screen name="Event" component={HomeStackScreen} 
        
    
        />
        <Tab.Screen name="Deals" component={SettingsStackScreen}  />
        <Tab.Screen name="Explorer" component={ExploreStackScreen} />
        <Tab.Screen name="Product" component={HomeStackScreen} />
        <Tab.Screen name="More" component={HomeStackScreen} />
      </Tab.Navigator>
</NavigationContainer >
  );
}
const styles = StyleSheet.create({
   text:{
   //  backgroundColor:'red',
     borderTopWidth:2,
     marginBottom:5,
     borderBottomColor:'green'
   },
   tabBarStyle:{
     
   }
})
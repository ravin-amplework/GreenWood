/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SignUp from './src/Screens/EmailSignUp'
import Explore from './src/Screens/Explore';
//import App from './src/Screens/Home'
import ListItems from "./src/components/ListItems";
import Card from "./src/components/Card";
import FeaturedCard from "./src/components/FeaturedCard";
import ListScreen from "./src/Screens/ListScreen";
import List from "./src/Screens/List";


AppRegistry.registerComponent(appName, () => App);

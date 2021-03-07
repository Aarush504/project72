import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import ReadStoryScr from './screens/ReadStoryScr';
import WriteStoryScr from './screens/WriteStoryScr';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';



export default class App extends React.Component{
   render(){
    return (
    
      <AppContainer/>
    
   );
  }
  
}

const TabNavigator = createBottomTabNavigator({
  ReadStory:{screen:ReadStoryScr},
  WriteStory:{screen:WriteStoryScr},
});
const AppContainer = createAppContainer(TabNavigator);

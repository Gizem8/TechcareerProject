import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import UserList from './src/UserList';
import PostList from './src/PostList';
import UserStack from './src/UserStack';
import PostStack from './src/PostStack';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen  name="UserList" component={UserStack}
        options={{
          headerShown:false,
          tabBarIcon:()=>(<MaterialCommunityIcons  name="home-alert-outline" size={30} color="#000" />)
      }}/>
        <Tab.Screen name="PostList" component={PostStack} 
        options={{
          headerShown:false,
          tabBarBadge:2,
          tabBarIcon:()=>(<MaterialCommunityIcons  name="home-alert-outline" size={30} color="#000" />)
      }}
        />
       

      </Tab.Navigator>
        </NavigationContainer>
  )
}

export default App
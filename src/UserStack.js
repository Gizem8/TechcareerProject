import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserList from './UserList';
import UserDetail from './UserDetail';

const UserPageStack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <UserPageStack.Navigator>
      <UserPageStack.Screen name="UserList" component={UserList} />
      <UserPageStack.Screen name="UserDetail" component={UserDetail} />
    </UserPageStack.Navigator>
  )
}

export default UserStack
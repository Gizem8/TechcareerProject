import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostList from './PostList';
import PostDetail from './PostDetail';

const PostPageStack = createNativeStackNavigator();

const PostStack = () => {
  return (
    <PostPageStack.Navigator>
      <PostPageStack.Screen name="PostList" component={PostList} />
      <PostPageStack.Screen name="PostDetail" component={PostDetail} />
    </PostPageStack.Navigator>
  )
}

export default PostStack
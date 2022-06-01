import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Pressable,StyleSheet } from 'react-native'

const PostList = ({ navigation }) => {
  const [post, setPost] = useState([]);


  useEffect(() => {
     
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then((data) => {
        setPost(data);
      });

  }, [])


  const renderPost = ({item}) => {
     return <Pressable onPress={() => navigation.navigate("PostDetail",{id: item.id})}><Text style={styles.post}>{item.title}</Text></Pressable> 
  }
  return (
      <View style={{flex:1, padding:10}}>
          <FlatList
          data={post.slice(0,20)}
          renderItem={renderPost}>

          </FlatList>
      </View>
  )
}

const styles = StyleSheet.create ({
  post:{
      flex:1,
      marginTop:20,
      fontSize:20,
      fontWeight: "bold",
      backgroundColor:'#fff',
      
  }

});

export default PostList
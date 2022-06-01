import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator,StyleSheet } from 'react-native'

const PostDetail = ({ route }) => {


    const { id } = route.params;

    const [posts, setPosts] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts/" + id)
            .then(res => res.json())
            .then((data) => {
                setLoading(false);
                setPosts(data);
            })

    }, [])

    return (
        <>
            {

                loading == true ? <ActivityIndicator size="large" color="#0000ff" /> : 
                <View style={{flex:1, padding:10}}>
                    <Text style={styles.postDetails}>Id: {posts.id}</Text>
                    <Text style={styles.postDetails}>UserId: {posts.userId}</Text>
                    <Text style={styles.postDetails}>Title: {posts.title}</Text>
                    <Text style={styles.postDetails}>Body: {posts.body}</Text>
                   
                   

                </View>
            }
        </>
    )
}

const styles = StyleSheet.create ({
    postDetails:{
        margin:10,
        fontSize:15,
        fontWeight:'bold',
        backgroundColor:'#fff'


    }

})

export default PostDetail
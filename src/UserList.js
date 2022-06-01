import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Pressable,StyleSheet } from 'react-native'

const UserList = ({ navigation }) => {

    const [user, setUser] = useState([]);


    useEffect(() => {
       
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then((data) => {
            setUser(data);
        });

    }, [])


    const renderUser = ({item}) => {
       return <Pressable onPress={() => navigation.navigate("UserDetail",{id: item.id})}><Text style={styles.user}>{item.name},{item.username}</Text></Pressable> 
    }
    return (
        <View style={{flex:1, padding:10}}>
            <FlatList
            data={user}
            renderItem={renderUser}>

            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create ({
    user:{
        flex:1,
        marginTop:20,
        fontSize:20,
        fontWeight: "bold",
        backgroundColor:'#fff',
        
    }

});

export default UserList
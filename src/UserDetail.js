import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet} from 'react-native'

const UserDetail = ({ route }) => {


    const { id } = route.params;

    const [supplier, setSupplier] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users/" + id)
            .then(res => res.json())
            .then((data) => {
                setLoading(false);
                setSupplier(data);
            })

    }, [])

    return (
        <>
            {

                loading == true ? <ActivityIndicator size="large" color="#0000ff" /> : 
                <View style={{flex:1, padding:10}}>
                    <Text style={styles.userDetails}>Id: {supplier.id}</Text>
                    <Text style={styles.userDetails}>Name: {supplier.name}</Text>
                    <Text style={styles.userDetails}>UserName: {supplier.username}</Text>
                    <Text style={styles.userDetails}>Email: {supplier.email}</Text>
                   
                   

                </View>
            }
        </>

    )
}

const styles = StyleSheet.create ({
    userDetails:{
        margin:10,
        fontSize:15,
        fontWeight:'bold',
        backgroundColor:'#fff'


    }

})

export default UserDetail
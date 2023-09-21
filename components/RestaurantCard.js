import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    genre,
    rating,
    address,
    short_description,
    dishes,
    long,
    lat
}) => {
  return (
    <TouchableOpacity style = {styles.container}>
        <Image
            source={{
                uri: imgUrl
            }}
            style={styles.img}
        />
        <View style={{paddingBottom:20, paddingHorizontal:15}}>
            <Text style={styles.title}>{title}</Text>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <StarIcon color='green' opacity={0.5} size={22} style={{marginRight:5}}/>
                <Text style={{color:'#9e9e9e', fontSize:13}}>
                    <Text style={{color:'#48bb78'}}>{rating}</Text>. {genre}
                </Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <MapPinIcon color='gray' size={22} opacity={0.4} style={{marginRight:5}}/>
                <Text 
                style={{color:'#9e9e9e', fontSize:13}}>
                Nearby . {address}
                </Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard

const styles = StyleSheet.create({
    img:{
        height:120,
        width:220,
        borderRadius:2
    },
    title:{
        fontWeight:'bold',
        paddingTop:10,
        fontSize:15
    },
    container:{
        marginRight:15,
        backgroundColor:'#FFF',
        shadowColor:'gray',
        shadowOpacity:0.4,
        shadowRadius:3,
        shadowOffset:{width:0, height:0},
        elevation:5
    }
})
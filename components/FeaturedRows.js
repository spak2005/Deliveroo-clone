import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRows = ({title, description, featuredCategory}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <ArrowRightIcon color='#00CCBB'/>
      </View>
      <Text style={styles.description}>{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator = {false}
        contentContainerStyle = {{
            paddingHorizontal:15
        }}
        style={styles.scrollView}
      >
        {/* Restaurant cards.... */}
        <RestaurantCard
            id = {123}
            imgUrl = {'https://links.papareact.com/gn7'}
            title = {'Yoo! Sushi'}
            genre = {'Japanese'}
            rating = {4.5}
            address = {'123 main street'}
            short_description = {'this is a description'}
            dishes = {[]}
            long = {20}
            lat = {20}
        />
        <RestaurantCard
            id = {123}
            imgUrl = {'https://links.papareact.com/gn7'}
            title = {'Yoo! Sushi'}
            genre = {'Japanese'}
            rating = {4.5}
            address = {'123 main street'}
            short_description = {'this is a description'}
            dishes = {[]}
            long = {20}
            lat = {20}
        />
        <RestaurantCard
            id = {123}
            imgUrl = {'https://links.papareact.com/gn7'}
            title = {'Yoo! Sushi'}
            genre = {'Japanese'}
            rating = {4.5}
            address = {'123 main street'}
            short_description = {'this is a description'}
            dishes = {[]}
            long = {20}
            lat = {20}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRows

const styles = StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize:16
    },
    container:{
        marginTop:20,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20
    },
    description:{
        paddingHorizontal:20,
        fontSize:13,
        color:'#9e9e9e',
        marginBottom:10
    },
    scrollView:{
        paddingHorizontal:15
    }
})
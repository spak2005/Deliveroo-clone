import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, ScrollView} from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon
} from "react-native-heroicons/outline"
import Categories from '../components/Categories'
import FeaturedRows from '../components/FeaturedRows'
import client from '../sanity'


const HomeScreen = () => {
  const navigation = useNavigation()
  const [featuredCategories, setFeaturedCategories] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle:'Testing',
      headerShown:false
    })
  },[])

  useEffect(() => {
    client
    .fetch( `
    *[_type == "featured"] {
      ...,
      restaurants[]->{
        ...,
        dishes[] ->
      }
    }`
    )
    .then((data) => {
      setFeaturedCategories(data);
    });
  }, [])

  console.log(featuredCategories)

  return (
    <SafeAreaView style={{backgroundColor:'#fff', paddingTop:5}}>
      <View style={styles.topView}>
        <Image
        source={{
          uri:"https://links.papareact.com/wru"
        }}
        style={styles.topImg}
        />
        <View style={styles.topTextView}>
          <Text style={styles.deliverNow}>Deliver Now!</Text>
          <Text style={styles.currentLocation}>Current Location
          <ChevronDownIcon size={20} color={'#00CCBB'}/>
          </Text>
        </View>
        <UserIcon color={'#00CCBB'} size={35}/>
      </View>
      {/* Search */}
      <View 
        style={{
        flexDirection:'row', 
        alignItems:'center', 
        marginBottom:10,
        paddingHorizontal:10,
        justifyContent:'space-around'
        }}>

        <View style={styles.searchView}>
          <MagnifyingGlassIcon color={'gray'} size={20} style={{marginRight:5}}/>
          <TextInput
          keyboardType='default'
          placeholder='Restaurants and cuisines'
          />
        </View>
        <AdjustmentsVerticalIcon color={'#00CCBB'}/>
      </View>

      {/* Body */}
      <ScrollView style={styles.categoriesView} >
        {/* The Categories of Foods */}
        <Categories/>
        {/* All Featured Rows */}
        <FeaturedRows 
          title='Featured'
          description='paid placement for our partners'
          id='123'
        />
        <FeaturedRows 
          title='Tasty Discounts'
          description='Everyone has been enjoying these juicy discounts'
          id='1234'
        />
        <FeaturedRows 
          title='Offers near you'
          description='Why not support your local restaurants today'
          id='12345'
        />
      </ScrollView>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
topImg:{
  height:35,
  width:35,
  backgroundColor:'grey',
  padding:4,
  borderRadius:30,
  marginRight:10
},
topView:{
  flexDirection:"row",
  alignItems:'center',
  paddingBottom:10,
  paddingHorizontal:10
  
},
topTextView:{
flex:1
},
deliverNow:{
  fontWeight:'bold',
  color:'gray'
},
currentLocation:{
  fontWeight:'bold',
  fontSize:20,
},
searchView:{
  backgroundColor:'rgb(229 231 235)',
  flexDirection:'row',
  padding:10,
  width:'90%',
},
categoriesView:{
  backgroundColor:"#f7fafc",
  paddingBottom:100,
}
})

export default HomeScreen
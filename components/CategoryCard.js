import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <Image
            source={{uri:imgUrl}}
            style={{height:100, width:100, borderRadius:5}}
        />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
container:{
    marginRight:10,
    position:'relative',
},
text:{
    position:'absolute',
    bottom:5,
    left:5,
    color:'white',
    fontWeight:'bold'
}
})
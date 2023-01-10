import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const Result = ({navigation, route}) => {
  const {score} = route.params

  const resultImage = score > 40 ? "https://img.freepik.com/free-vector/successful-business-man-holding-trophy_1150-35042.jpg?size=626&ext=jpg&ga=GA1.2.1102148719.1673004735&semt=sph":"https://img.freepik.com/free-vector/oh-no-concept-illustration_114360-9285.jpg?size=338&ext=jpg&ga=GA1.1.1102148719.1673004735&semt=sph"
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Result</Text>
      </View>
      <View style={styles.scoreWrapper}>
        <Text style={styles.score}>Score:{score}</Text>
      </View>
      <View style={styles.imageContainer}>
      <Image
        source={{uri:resultImage}}
        style={styles.quizImage}
        resizeMode='contain'
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  container:{
    paddingTop:40,
    paddingHorizontal:20,
    height:'100%'
  },
  quizImage:{
    height:300,
    width:300
},
imageContainer:{
    justifyContent: 'center',
    alignItems: 'center',
},
button:{
  backgroundColor:'#e07a5f',
  padding:14,
  paddingHorizontal:16,
  borderRadius:20,
  marginTop:20,
  alignItems:'center',
  marginBottom:30
},
buttonText:{
  fontSize:18,
  fontWeight:'600',
  color:'#3d405b'
},
titleWrapper:{
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical:36,
},
title: {
  fontSize: 36,
  fontWeight: '600',
  color:'#81b29a'
},
scoreWrapper:{
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical:36,
},
score:{
  fontSize: 36,
  fontWeight: '600',
  color:'#3d405b'
}
})
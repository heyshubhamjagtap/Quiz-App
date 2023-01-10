import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Title from '../components/Title'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title/>
      <View style={styles.imageContainer}>
        <Image
        source={{uri:'https://img.freepik.com/free-vector/blogging-concept-illustration_114360-1038.jpg?size=338&ext=jpg&ga=GA1.1.1102148719.1673004735'}}
        style={styles.quizImage}
        resizeMode='contain'
        />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Quiz')} style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    quizImage:{
        height:300,
        width:300
    },
    imageContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
    },
    container:{
      paddingTop:40,
      paddingHorizontal:20,
      height:'100%'
    },
    button:{
      width:'100%',
      backgroundColor:'#e07a5f',
      padding:20,
      borderRadius:20,
      marginTop:20,
      alignItems:'center',
      marginBottom:30
    },
    buttonText:{
      fontSize:24,
      fontWeight:'600',
      color:'#3d405b'
    }
})
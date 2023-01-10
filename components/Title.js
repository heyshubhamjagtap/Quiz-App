import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz App</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical:36,
  },
  title:{
    fontSize: 36,
    fontWeight: '600',
    color:'#81b29a'
  }
})
import { router, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Home = ({ }) => { 
  const params = useLocalSearchParams(); 
  console.log(params);
  
  return (
    <TouchableOpacity onPress={() => router.back()}>
      <Text>
        { params.title }
      </Text>
    </TouchableOpacity>
  )
}

export default Home;
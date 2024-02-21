import React from 'react'
import { Text, View, useColorScheme } from 'react-native';

const Home = () => {
  const colorScheme = useColorScheme(); 
  return (
    <View style={{flex : 1, backgroundColor: colorScheme === 'dark' ? 'black' : 'white'}}>
      <Text style={{ marginLeft: 10, color: colorScheme === 'dark' ? 'white' : 'black' }}>Your Favorites will Appear here!</Text>
    </View>
  )
}

export default Home; 
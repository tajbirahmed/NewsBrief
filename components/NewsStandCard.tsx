import { ScreenWidth } from '@rneui/base'
import React from 'react'
import { View } from 'react-native'

const NewsStandCard = () => {
  const screenWidth = ScreenWidth; 
  return (
    <View
      style={{
        width: screenWidth / 4 + 15, 
        height: '100%', 
      }}
    >
      
    </View>
  )
}

export default NewsStandCard
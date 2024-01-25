import React from 'react'
import { ScrollView, View, Text } from 'react-native'

const NewsStand = () => {
  return (
    <ScrollView
      style={{
        flex: 1,  
        overflow: 'scroll', 
        padding: 8, 
      }}
    >
      <View
        style={{
          paddingTop: 2, 
        }}
      >
        <Text>Category</Text>
        <ScrollView
          style={{
            flexDirection: 'row', 
            overflow: 'scroll', 
            height: '20%',
          }}
        >
          <NewsStandCard />
        </ScrollView>
      </View>
    </ScrollView>
  )
}

export default NewsStand
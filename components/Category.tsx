import React, { useEffect, useState } from 'react'
import { View, Text, useColorScheme, TouchableOpacity } from 'react-native'

interface CategoryProps { 
  category_id: number, 
  category_name: string, 
}
const Category = ({
  category_id,
  category_name,
}: CategoryProps) => {
  
  const colorScheme = useColorScheme();
  return (
    <View
      key={category_id}
        style={{
          minWidth: 30, 
          height: '100%', 
          paddingRight: 4,
          marginRight: 4,
          paddingLeft: 4,
          marginLeft: 4,
          
        }}
    >
      <Text
            key={category_id}
            style={{
              fontSize: 17,
              color: colorScheme === 'dark' ? 'white' : 'black',
              fontWeight: '600',
              alignSelf: 'flex-start', 

            }}
          >
            {category_name}
        </Text>
      </View>
    
  )
}

export default Category
import FavCardComp from '@/components/FavCardComp';
import favArticle from '@/constants/favArticles';
import { Result } from '@/types/NewsApiTypes';
import React, { useState } from 'react'
import { ScrollView, Text, View, useColorScheme } from 'react-native';


const Home = () => {
  const colorScheme = useColorScheme(); 
  const [favorites, setFavorites] = useState(favArticle)
  return (
    <ScrollView style={{backgroundColor: colorScheme === 'dark' ? 'black' : 'white', width: '100%'}}>
      <Text style={{
        color: colorScheme === 'dark' ? 'white' : 'black', alignSelf: 'center',
        fontSize: 17, fontWeight: '500', 
        marginBottom: 15,
      }}>
        Articles that were added as favotires
      </Text>
      {favArticle.map((item, index) => (
        <FavCardComp
          key={index}
          title={item.title}
          source={item.description} />
      ))}
        
    </ScrollView>
  )
}

export default Home; 
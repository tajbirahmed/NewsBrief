import { DB, FIREBASE_AUTH } from '@/auth/FirebaseConfig';
import FavCardComp from '@/components/FavCardComp';
import favArticle from '@/constants/favArticles';
import { Result } from '@/types/NewsApiTypes';
import { collection, doc, getDoc, getDocs, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View, useColorScheme } from 'react-native';

interface FavProps { 
  title: string, 
  imageUrl : string, 
}

const Home = () => {
  const colorScheme = useColorScheme(); 
  const [favorites, setFavorites] = useState(favArticle);
  const [myMap, setMyMap] = useState<{ [key: string]: string }>({});
  useEffect(() => {
    const userName = FIREBASE_AUTH.currentUser?.displayName;
    const colRef = collection(DB, "UserArticle");
    const q = query(colRef,
      where("userName", "==", userName),
      where("isFavorite", "==", true),
      orderBy("dateViewed", "desc"));
    
    getDocs(q)
      .then((res) => {
        const title: string[] = [];
        res.forEach((doc) => { 
          title.push(doc.data().title);
        })
        console.log(title);
        
        title.forEach((t) => {
          const docRef = doc(DB, "Article", t.toLowerCase());
          getDoc(docRef)
            .then((res) => { 
              const obj: FavProps[] = [];
              if (res.exists()) {
                
                setMyMap({
                  ...myMap, 
                  [t] : res.data().image_url
                })
              }
            })
            .catch((e) => { 
              console.log(e);
            })
        })
        
        
      })
      .catch((e) => { 
        console.log(e);
      })
  }, [])
  return (
    <ScrollView style={{backgroundColor: colorScheme === 'dark' ? 'black' : 'white', width: '100%'}}>
      <Text style={{
        color: colorScheme === 'dark' ? 'white' : 'black', alignSelf: 'center',
        fontSize: 17, fontWeight: '500', 
        marginBottom: 15,
      }}>
        Articles that were added as favotires
      </Text>
      {Object.keys(myMap).map((item, index) => (
        <FavCardComp
          key={index}
          title={item}
          source={myMap[item]} />
      ))}
        
    </ScrollView>
  )
}

export default Home; 
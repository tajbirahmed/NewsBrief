import { FIREBASE_STORAGE } from '@/auth/FirebaseConfig';
import { Image } from 'expo-image';
import { getDownloadURL, ref } from 'firebase/storage';
import React, { useEffect, useState} from 'react'
import { View, Text, useColorScheme, TouchableOpacity, StyleSheet } from 'react-native'
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

interface PageProps { 
  comment?: string, 
}
interface CommentProps {
  imageUrl: string,
  comment: string,
}

const CommentContainer = ({ imageUrl, comment }: CommentProps) => {
  const colorScheme = useColorScheme();
  const [seeMore, setSeeMore] = useState(false);
  const [showMore, setShowMore] = useState(false);
  useEffect(() => { 
    if (comment.length >= 6 * 26 - 10)
      setShowMore(true);
  },[])
  return (
    <View style={[styles.container, { marginBottom: 10, }]}>
      <View style={{ width: '10%', paddingLeft: 10, }}>
        <View style={{ padding: 2, alignSelf: 'center', paddingTop: 30, }}>
          <Image
            style={{ width: 26, height: 26, borderRadius: 13, borderColor: 'blue', borderWidth: 1.5,}}
            placeholder={blurhash}
            contentFit="cover"
            transition={1000}
            source={imageUrl}
          />
        </View>
      </View>
      <View style={{ width: '85%', borderColor: colorScheme === 'dark' ? 'white' : 'black', borderWidth: 0.4, borderRadius: 40, }}>
        <View style={{ width: '100%', height: 'auto', padding: 10 }}>
        <Text numberOfLines={ !seeMore ? 3 : undefined } style={{
          color: colorScheme === 'dark' ? 'white' : 'black',
          fontWeight: "500"
        }}>
          { comment }  
        </Text>
        <TouchableOpacity onPress={() => { setSeeMore(!seeMore) }}>
          { showMore && !seeMore ? (<Text style={{ color: 'blue', fontWeight: '600' }}>See More...</Text>) : showMore ? (
            <Text style={{ color: 'blue', fontWeight: '600' }}>See Less..</Text>
          ) : null }
          </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

export default CommentContainer
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    minHeight: 100,
    padding: 5,
    marginTop: 1,
    alignSelf: 'center',
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between', 
    overflow: 'scroll',
  },

})
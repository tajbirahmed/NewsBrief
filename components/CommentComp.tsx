import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, useColorScheme } from 'react-native';
import CommentContainer from './CommentContainer';
import { Image } from 'expo-image';
import { DB, FIREBASE_AUTH } from '@/auth/FirebaseConfig';
import { getDownloadURL } from 'firebase/storage';
import { collection, limit, onSnapshot, orderBy, query, where } from 'firebase/firestore';

interface PageProps {
  title: string,
  imageUrl?: string, 
  userName?: string, 
  comment?: string, 
}

interface CommentProps { 
  imageUrl: string, 
  comment: string,  
}

const CommentComp = ({ title }: PageProps) => {
  const [comments, setComments] = useState<CommentProps[]>([]);
  const colorScheme = useColorScheme(); 
  const [page, setPage] = useState<number>(3);
  useEffect(() => {
    const docRef = collection(DB, "Comment")
    const q = query(docRef,
      where("title", "==", title),
      orderBy("dateCreated", "desc"), 
      limit(page)
    );
    const subscribe = onSnapshot(q, (querySnapshot) => {
      const res: CommentProps[] = [];
      querySnapshot.forEach((com) => { 
        res.push({
          imageUrl: com.data().imageUrl, 
          comment: com.data().comment
        });
      })
      // console.log(res);
      
      setComments(res);
    });
    return () => {
      // Unsubscribe 
      const articleRef = collection(DB, 'Comment');
      onSnapshot(q, () => { });
    };
  }, [page]);
  return (
    <>
      {/* <View style={{ width: '10%', paddingLeft: 10, }}>
        <View style={{padding: 2, alignSelf: 'center', paddingTop: 25,}}>
          <Image
            style={{ width: 26, height: 26, borderRadius: 13, }}
            placeholder={blurhash}
            contentFit="cover"
            transition={1000}
          />
        </View>
      </View> */}
      {/* <View style={{ width: '85%' }}> */}
        {comments.map((item, index) => (
          <CommentContainer
            key={index}
            imageUrl={ item.imageUrl }
            comment={item.comment}
          />
        ))}
        <View style={{alignSelf: 'center', marginVertical: 20,}}>
        <TouchableOpacity onPress={() => { 
          setPage((prev) => 3 * prev);
        }}>
          <Text style={{color: colorScheme === 'dark' ? 'white' : 'black'}}>
            Load more
            </Text>
          </TouchableOpacity>
        </View>
      {/* </View> */}
    </>
  )
}

export default CommentComp;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    height: 'auto',
    padding: 5,
    marginTop: 1,
    borderWidth: 0.2,
    alignSelf: 'center',
    width: '95%',
    display: 'flex', 
    flexDirection: 'row',  
    justifyContent: 'space-between'
  },
  
})
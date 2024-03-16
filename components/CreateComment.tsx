import React, { useState } from 'react'
import { View, StyleSheet, Text, useColorScheme, TouchableOpacity } from 'react-native';
import CommentContainer from './CommentContainer';
import { Image } from 'expo-image';
import { DB, FIREBASE_AUTH } from '@/auth/FirebaseConfig';
import { TextInput } from 'react-native-paper';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';

interface PageProps {
  title: string,
  imageUrl?: string,
  userName?: string,
}
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const CreateCommnet = ({ title }: PageProps) => {
  const colorScheme = useColorScheme(); 
  const [comment, setComment] = useState<string | undefined>(undefined); 
  const addComment = async () => { 
    if (comment === undefined) {
      alert('Write some comment');
    } else { 
      try {
        const docRef = collection(DB, "Comment");
        const res = await addDoc(docRef, {
          comment: comment, 
          userName: FIREBASE_AUTH.currentUser?.displayName, 
          title: title, 
          dateCreated: new Date(),
          imageUrl: FIREBASE_AUTH.currentUser?.photoURL
        })
        console.log("success");
        
      } catch (error) {
        console.log(error);
      }
      setComment(undefined);
    }
  }
  return (
    <View style={[styles.container, { marginBottom: 10, }]}>
      <View style={{ width: '75%', paddingLeft: 10, }}>
        <TextInput
          label="Comment"
          mode="outlined"
          placeholder="Type your comment here"
          multiline={true}
          numberOfLines={3}
          style={{
            marginVertical: 10,
            backgroundColor: colorScheme === 'dark' ? 'black' : 'white', 
            
          }}
          value={comment}
          onChangeText={(com) => setComment(com)}
          contentStyle={{ color: colorScheme === 'dark' ? 'gray' : 'gray' }}
          
        />
      </View>
      <View style={{ width: '22%' }}>
        <TouchableOpacity style={styles.loginBtn} onPress={() => { 
            addComment();
          }}>
          <Text style={{ color: 'white', fontWeight: '500' }}>Comment</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CreateCommnet;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
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
  loginBtn: {
    borderRadius: 20,
    height: 45,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32, 
    backgroundColor: "darkturquoise",
    alignSelf: 'center',
    fontWeight: '600',
  },
  TextInput: {
    // flex: 1,
    margin: 3,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 10,
  },
  inputLight: {
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
    color: '#333',
  },
  inputDark: {
    borderColor: '#555',
    backgroundColor: '#333',
    color: '#eee',
  },
})
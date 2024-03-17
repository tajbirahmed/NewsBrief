import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View, useColorScheme, TouchableOpacity } from 'react-native';
import { Modal } from 'react-native-paper';
import { Rating } from '@kolking/react-native-rating';
import { addRating } from '@/utils/addRating';
import { getRating } from '@/utils/getRating';
import ThankYouComp from './ThankYouComp';

const RatingComp = () => {
  const [rating, setRating] = useState(0);
  const [preRating, setPreRating] = useState(0);
  const [first, setFirst] = useState(true); 
  const [rated, setRated] = useState(false); 
  const colorScheme = useColorScheme(); 
  const handleChange = useCallback(
    (value: number) => setRating(Math.round((rating + value) * 5) / 10),
    [rating],
  );
  useEffect(() => {
    getRating(
      preRating,
      setPreRating,
      first,
      setFirst
    ).then(() => setRating(preRating));
    
  }, [])
  const handleSubmit = () => { 
    addRating(
      rating,
      setRating,
      first,
      setFirst
    ).then(() => setRated(true));
  }
  return (
    <View style={styles.root}>
      {!first && <Text style={[styles.text, { color: colorScheme === 'dark' ? 'white' : 'black', marginBottom: 10, }]}>
        You have previouly rated our app {preRating} out of 5</Text>}
      <Rating size={40} rating={rating} onChange={handleChange} />
      <Text style={[styles.text, { color: colorScheme === 'dark' ? 'white' : 'black' }]}>Rated {rating} out of 5</Text>
      <TouchableOpacity style={styles.loginBtn} onPress={() => { handleSubmit(); }}>
        <Text style={{ color: 'white', fontWeight: '500' }}>
          Submit
        </Text>
      </TouchableOpacity>
      <ThankYouComp
        rated={rated}
        setRated={setRated}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    marginTop: 20,

  },
  loginBtn: {
    width: "60%",
    borderRadius: 40,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    backgroundColor: "darkturquoise",
    alignSelf: 'center',
    fontWeight: '600',
  },
});

export default RatingComp;
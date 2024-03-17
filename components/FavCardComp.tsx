import { Icon } from '@rneui/base';
import { Image } from 'expo-image';
import React, { useState } from 'react'
import { StyleSheet, View, useColorScheme, Text, TouchableOpacity } from 'react-native'
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

interface PageProps { 
  title: string, 
  source: string, 
}

const FavCardComp = ({ title, source} : PageProps) => {
  const colorScheme = useColorScheme(); 
  const [fav, setFav] = useState(true); 
  return (
    <View style={[styles.container,]}>
      <View style={styles.image_container}>
        <Image
          style={{
            flex: 1,
            borderRadius: 10,
            width: '100%'
          }}
          placeholder={blurhash}
          contentFit="cover"
          transition={500}
          source={source}
        />
      </View>
      <View style={ styles.content_container}>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={{
            fontSize: 24,
            fontWeight: '500', 
            color: colorScheme === 'dark' ? 'white' : 'black',
          }}
        >
          {title}
        </Text>
        {/* <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={{
            fontSize: 16,
            fontWeight: '300',
            color: colorScheme === 'dark' ? 'white' : 'black',
          }}
        >
          {source}
        </Text> */}
        <View style={styles.fav_container}>
          <Text style={{ fontSize: 12, alignSelf: 'center' }}></Text>
          {/* <TouchableOpacity onPress={() => { setFav(!fav)}}>
            {fav ? (
              <Icon name='favorite' size={20} type='material' color={colorScheme === 'dark' ? 'white' : 'black'} />
            ) : (
                <Icon name='favorite-border' size={20} type='material' color={colorScheme === 'dark' ? 'white' : 'black'} />
            )} 
          </TouchableOpacity> */}
          
        </View>
      </View>
    </View>
  )
}

export default FavCardComp; 

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 180,
    // shadowColor: "#000",
    alignSelf: 'center',
    // shadowOffset: {
    //   width: 0,
    //   height: 12,
    // },
    // shadowOpacity: 0.58,
    // shadowRadius: 30.00,

    // elevation: 10,
    // borderColor: 'green', 
    borderWidth: 0.3,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    marginBottom: 10,
    paddingTop: 12,
  },
  image_container: {
    width: '30%',
    height: '80%',
    marginLeft: 5,
  },
  content_container: {
    width: '62%',
    height: '100%',
    borderColor: 'green',
    borderRadius: 1,
    paddingTop: 8,
    paddingLeft: 3,
  }, 
  fav_container: {
    width: '8%', 
    alignSelf: 'flex-end',
    marginRight: 7, 
    marginTop: 80,
  }
})
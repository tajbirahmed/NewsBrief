import { Image } from 'expo-image'
import { Check } from 'lucide-react-native'
import React from 'react'
import { View, Text, useColorScheme, StyleSheet, TouchableOpacity } from 'react-native'
import { Modal } from 'react-native-paper'

const ThankYouComp = ({ rated, setRated }: { rated: boolean, setRated: (rated: boolean) => void }) => {
  const colorScheme = useColorScheme(); 
  const handleClose = () => { 
    setRated(false);
  }
  return (
    <Modal visible={rated}  contentContainerStyle={{ alignSelf: 'center', }} onDismiss={() => setRated(false)}>
      <View style={{ height: 180, width: 200, backgroundColor: colorScheme === 'dark' ? 'gray' : 'black', borderRadius: 15, }} >
        <View style={{alignSelf: 'center', marginTop: 60,}}>
          <View style={{height: 50, width: 50, alignSelf: 'center', borderRadius: 25, backgroundColor: 'green'}}>
            <Check size={30} color={"white"} style={{alignSelf: 'center', marginTop: 10,} } />
          </View>
          <Text style={{ color: 'green', fontWeight: '800' }}>Successfull</Text>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={() => { handleClose() }}>
          <Text style={{ color: 'white', fontWeight: '600' }}>
            Close
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default ThankYouComp;

const styles = StyleSheet.create({
  loginBtn: {
    width: "40%",
    borderRadius: 40,
    height: 30,
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "darkturquoise",
    alignSelf: 'center',
    fontWeight: '600',
  },
});
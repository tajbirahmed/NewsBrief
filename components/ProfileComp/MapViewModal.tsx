import { Icon } from '@rneui/base'
import React from 'react'
import { Modal, View, Text, TouchableOpacity, useColorScheme, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

interface PageProps { 
  show: boolean, 
  setShow: (show: boolean) => void, 
  lat: string, 
  lon: string, 
}
const MapViewModal = ({ show, setShow, lat, lon }: PageProps) => {
  const colorScheme = useColorScheme();
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: colorScheme === 'dark' ? 'black' : 'white'}}>
      <Modal visible={show} style={{ backgroundColor: colorScheme === 'dark' ? 'black' : 'white' } }>
        <View style={{
          display: 'flex', alignSelf: 'flex-end', justifyContent: 'center',
        }}>
          
        </View>
        <View style={{
          margin: 10, height: '90%', borderColor: colorScheme === 'dark' ? 'white' : 'black',
          borderWidth: 1, borderRadius: 30, overflow: 'hidden', zIndex: -1,
        }}>
          <MapView
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', height: '100%', backgroundColor: colorScheme === 'dark' ? 'black' : 'white' }}
            initialRegion={{
              latitude: parseFloat(lat),
              longitude: parseFloat(lon),
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
            userInterfaceStyle={ colorScheme === 'dark' ? 'dark' : 'light'}
          >
            <Marker
              draggable
              tappable={ true }
              coordinate={{
                latitude: parseFloat(lat), 
                longitude: parseFloat(lon)
              }}
            />
          </MapView>
        </View>
        <TouchableOpacity style={[styles.loginBtn, { paddingRight: 2, }]}
          onPress={() => {
            setShow(!show);
          }}>
          <Text style={{ color: 'white', fontWeight: '500' }}>Go back</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  )
}

export default MapViewModal;
const styles = StyleSheet.create({
  TextInput: {
    // flex: 1,
    margin: 3,
    width: '70%'
  },
  loginBtn: {
    width: "34%",
    borderRadius: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "darkturquoise",
    alignSelf: 'center',
    fontWeight: '600',
  }
})
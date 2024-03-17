import { ChevronDown, ChevronLeft } from 'lucide-react-native';
import React from 'react'
import { Modal, ScrollView, TouchableOpacity, View, useColorScheme, Text } from 'react-native'
import ArtcileViewAnalytics from './ArtcileViewAnalytics';
import LikeCountAanalytics from './LikeCountAanalytics';
import DisLikeCountAanalytics from './DisLikeCountAnalytics';
import CommentAnalytics from './CommentAnalytics';

interface ModalProps { 
  openAnalytics: boolean, 
  setOpenAnalytics: (openAnalytics: boolean) => void
}

const AnalyticsComp = ({ openAnalytics, setOpenAnalytics }: ModalProps) => {
  const colorScheme = useColorScheme(); 
  return (
    <Modal visible={ openAnalytics} >
      <ScrollView style={{ padding: 12, backgroundColor: colorScheme === 'dark' ? 'black' : 'white', }}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => setOpenAnalytics(!openAnalytics)}>
            <ChevronLeft size={20} color={colorScheme === 'dark' ? 'white' : 'black'} />
          </TouchableOpacity>
          <Text style={{
            color: colorScheme === 'light' ? 'black' : 'white',
            fontSize: 16,
            fontWeight: '600',
            paddingLeft: 10,
          }}>
            Go Back
          </Text>
        </View>
        <View style={{
          marginTop: 18,
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          padding: 8,
        }}>
          <View>
            <Text style={{
              color: colorScheme === 'dark' ? 'white' : 'black',
              fontWeight: 'bold', fontSize: 24, 
            }}>
              Activity
            </Text>
          </View>
          <View style={{justifyContent: 'center', display: 'flex', flexDirection: 'row'}}>
            <Text style={{
              color: colorScheme === 'dark' ? 'white' : 'black',
              fontWeight: '300', fontSize: 16,
            }}>
              This week
            </Text>
            <View style={{marginTop: 4}}>
              <ChevronDown size={16} color={colorScheme === 'dark' ? 'white' : 'black'} />
            </View>

            </View>
        </View>
        <ArtcileViewAnalytics />
        <LikeCountAanalytics />
        <DisLikeCountAanalytics />
        <CommentAnalytics />
      </ScrollView>
    </Modal>
  )
}

export default AnalyticsComp
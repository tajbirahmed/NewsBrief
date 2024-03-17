import React from 'react'
import { View, useColorScheme, Text } from 'react-native'
import ArticleViewGraph from './ArticleViewGraph';
import CommentHeatMap from './CommentHeatMap';

const CommentAnalytics = () => {
  const colorScheme = useColorScheme();
  const bgVal = colorScheme === 'dark' ? 'black' : 'white';
  const colVal = colorScheme === 'dark' ? 'white' : 'black';
  return (
    <View style={{
      width: '95%', height: 320, margin: 12, borderColor: colVal, borderRadius: 30, 
      display: 'flex', flexDirection: 'column',
    }}>
      <View style={{ padding: 10, height: '15%', alignSelf: 'center' }}>
        <Text style={{
          color: colorScheme === 'dark' ? 'white' : 'black',
          fontWeight: '700', fontSize: 18,
        }}>
          Comments Behaviour
        </Text>
      </View>
      <View style={{ padding: 10, height: '85%', }}>
        <CommentHeatMap />
      </View>
    </View>
  )
}

export default CommentAnalytics
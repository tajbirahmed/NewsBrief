import React from 'react'
import { View, useColorScheme, Text } from 'react-native';
import LikeCountBar from './LikeCountBar';

const LikeCountAanalytics = () => {
    const colorScheme = useColorScheme();
    const bgVal = colorScheme === 'dark' ? 'black' : 'white';
    const colVal = colorScheme === 'dark' ? 'white' : 'black';
    return (
        <View style={{
            width: '95%', height: 320, margin: 12, borderColor: colVal, borderRadius: 30, borderWidth: 0.5,
            display: 'flex', flexDirection: 'column',
        }}>
            <View style={{ padding: 10, height: '15%', }}>
                <Text style={{
                    color: colorScheme === 'dark' ? 'white' : 'black',
                    fontWeight: '700', fontSize: 18,
                }}>
                    Like Count
                </Text>
            </View>
            <View style={{ padding: 10, height: '85%', }}>
                <LikeCountBar />
            </View>
        </View>
    )
}

export default LikeCountAanalytics;
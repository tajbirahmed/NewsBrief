import { Icon, ScreenWidth } from '@rneui/base';
import { router } from 'expo-router';
import React, { useState } from 'react'
import { StyleSheet, View, useColorScheme, Text, Touchable, TouchableOpacity } from 'react-native'

const ArticleHeader = () => {
    const colorScheme = useColorScheme();
    
    const [favorite, setFavorite] = useState(false);
    return (
        <View style={[styles.container, { width: ScreenWidth, backgroundColor: colorScheme === 'dark' ? 'black': 'white', height: 30, }]}>
            <TouchableOpacity onPress={() => router.back()}>
                <View style={{ marginLeft: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name='chevron-left' type='material' size={20} color={ colorScheme === 'dark' ? 'white' : 'black'} />
                    <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black', fontWeight: '400' }}>Back</Text>
                </View>
            </TouchableOpacity>
            <View style={{ display: 'flex', flexDirection: 'row', marginRight: 10, }}>
                {!favorite ? (<>
                    <TouchableOpacity onPress={() => { setFavorite(true) }}>
                        <Icon name='favorite-border' size={20} type='material' color={colorScheme === 'dark' ? 'white' : 'black'} />
                    </TouchableOpacity>
                </>
                ) : (<>
                    <TouchableOpacity onPress={() => { setFavorite(false) }}>
                        <Icon name='favorite' size={20} type='material' color={colorScheme === 'dark' ? 'white' : 'black'} />
                    </TouchableOpacity>
                </>
                )}
                <TouchableOpacity style={{marginLeft: 10,}} onPress={() => { }}>
                    <Icon name='share' size={20} type='material' color={colorScheme === 'dark' ? 'white' : 'black'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
    }
})

export default ArticleHeader
import footerItems from '@/constants/FooterStaticData/FooterItems';
import { Icon } from '@rneui/base';
import { router } from 'expo-router';
import React, { useState } from 'react'
import { Text, Touchable, TouchableOpacity, View, useColorScheme, StyleSheet } from 'react-native'
import FooterItem from './FooterItem';

// Styling done for now, 
// no functionality added, 


const FooterBar = () => {
    const [selected, setSelected] = useState('');
    const colorScheme = useColorScheme();
    
    return (
        <View style={ [styles.container, {backgroundColor: colorScheme === 'dark' ? 'black' : 'white'}]}>
            <View style={styles.footer_container}>
                {
                    footerItems.map((value, index) => (
                        <FooterItem 
                            key={index}
                            title={value.title}
                            iconName={value.iconName}
                            iconType={value.iconType}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        // testing 
    }, 
    footer_container: {
        borderRadius: 25, 
        width: '100%',
        height: '100%',
        minHeight: '100%',
        minWidth: '100%',
        maxHeight: '100%',
        maxWidth: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        // testing 
        borderWidth: 0.6, 
        borderColor: 'gray',
    }, 
    footer: {
        width: '25%',
        height: '100%',
        minHeight: '100%',
        minWidth: '25%',
        maxHeight: '100%',
        maxWidth: '25%',
    }
})

export default FooterBar
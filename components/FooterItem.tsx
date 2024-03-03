import { Icon } from '@rneui/base';
import { router } from 'expo-router';
import React, { useEffect } from 'react'
import { View, Text, useColorScheme, Pressable, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface FooterItemProps {
    title: string,
    iconName: string,
    iconType: string,
    selected: string,
    setSelected: (selected: string) => void,
    path: string,
}

const FooterItem = ({ title, iconName, iconType, selected, setSelected, path}: FooterItemProps) => {
    const colorScheme = useColorScheme();
    useEffect(() => { 
        setSelected('Home');
    },[])
    return (
        <View style={styles.footer}>
            <Pressable
                onPress={() => {
                    setSelected(title);
                    title === "Home" ? router.push("/") :
                        title === "Explore" ? router.push("/Explore") :
                            title === "Favorite" ? router.push("/Favourite") :
                                router.push("/NewsStand");
                }}
                style={styles.footer_item_container}>
                {
                    selected !== title ? (
                        <>
                            <Icon name={iconName} type={iconType} color={colorScheme === 'dark' ? 'white' : 'black'} />
                            {/* <Text style={[styles.title, colorScheme === 'dark' ? { color: 'white' } : { color: 'black' }]}>
                                {title}
                            </Text> */}
                        </>
                    ) : (
                        <>
                           <View style={styles.selected_style}>
                                    <Icon name={iconName} type={iconType} color={colorScheme === 'dark' ? 'blue' : 'blue'} size={32}/>
                                    {/* <Text style={[styles.selected_style_title, colorScheme === 'dark' ? { color: 'white' } : { color: 'black' }]}>
                                    {title}
                                </Text> */}
                            </View>
                        </>
                    )
                }
            </Pressable>
        </View >
    )
}

const styles = StyleSheet.create({
    footer: {
        width: '25%',
        height: '100%',
        minHeight: '100%',
        minWidth: '25%',
        maxHeight: '100%',
        maxWidth: '25%',
    },
    footer_item_container: {
        padding: 6,
        paddingTop: 8,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        alignSelf: 'center',
        fontSize: 8,
    },
    selected_style: {
        flex: 1, 
        justifyContent: 'center',
        alignContent: 'center',
        width: '70%', 
        height: '70%',
        paddingBottom: 10, 
        borderRadius: 1000,
    },
    selected_style_title: {
        fontSize: 9,
        textAlign: 'center',
        fontWeight: '800',
    }

})



export default FooterItem; 
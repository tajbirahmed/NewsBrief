import { Icon } from '@rneui/base';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import React, { useEffect } from 'react'
import { View, Text, useColorScheme, Pressable, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface FooterItemProps {
    title: string,
    iconName?: string | null,
    iconType: string,
    selected: string,
    setSelected: (selected: string) => void,
    path: string,
}
const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const ProfileFooter = ({ title, iconName, iconType, selected, setSelected, path }: FooterItemProps) => {
    const colorScheme = useColorScheme();
    useEffect(() => {
        setSelected('Home');
    }, [])
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
                            <Image
                                style={{ width: 26, height: 26, borderRadius: 13, }}
                                placeholder={blurhash}
                                contentFit="cover"
                                transition={1000}
                                source={iconName}
                            />
                        </>
                    ) : (
                        <>
                                <View style={[styles.footer_item_container, {marginBottom: 8, }]}>
                                    <Image
                                        style={{ width: 32, height: 32, borderRadius: 16, borderColor: 'blue', borderWidth: 3, }}
                                        placeholder={blurhash}
                                        contentFit="cover"
                                        transition={1000}
                                        source={iconName}
                                    />
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



export default ProfileFooter; 
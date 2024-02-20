import { Result } from '@/types/NewsApiTypes';
import { Icon, ScreenHeight, ScreenWidth } from '@rneui/base';
import React, { useContext, useRef, useState } from 'react';
import { View, Text, Image, SafeAreaView, Pressable, useColorScheme, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { PageProps } from './NewsCardSlider';
import { router  } from 'expo-router';


const NewsCard = (options: PageProps) => {
    const ref = useRef<any>();
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const colorScheme = useColorScheme();
    
    const carouselItems: Result[] = [
        {
            ...options.options,
        }
    ];

    const renderItem = ({ item, index }: { item: Result; index: number }) => {

        return (
            <View
                style={{
                    backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
                    borderRadius: 10,
                    height: ScreenHeight / 3,
                    padding: 5,
                    marginLeft: 8,
                    marginRight: 8,
                    borderColor: colorScheme === 'dark' ? 'white' : 'black',
                    borderWidth: 0.2,
                }}
            >
                
                <TouchableOpacity style={{
                    flex: 1,
                    borderRadius: 10,
                    width: '100%'
                }} onPress={() => {
                    router.push({
                        pathname: '/ArticleView/', params: {
                            title: item.image_url, 
                        }
                    })
                }}>
                        <Image
                            style={{
                                flex: 1,
                                borderRadius: 10,
                                width: '100%'
                            }}
                            source={{ uri: item.image_url }}
                        />
                        <Text
                            numberOfLines={1}
                            ellipsizeMode="tail"
                            style={{
                                fontSize: 18,
                                fontWeight: '400',
                                color: colorScheme === 'dark' ? 'white' : 'black',
                                overflow: 'hidden',
                            }}
                        >
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                
                <View style={styles.card_footer}>
                    <TouchableOpacity style={[styles.source_name]}>
                        <Text style={[styles.source_name, { color: colorScheme === 'dark' ? 'white' : 'black' }]} numberOfLines={1}>{item.source_id}</Text>
                    </TouchableOpacity>
                    <View style={[styles.more_info]}>
                        <Icon name='caret-down' type='font-awesome' color={colorScheme === 'dark' ? 'white' : 'black'} />
                    </View>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={[styles.container, {
            backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
        }]}>
            <Pressable>
                <View style={styles.card_style}>
                    <Carousel
                        layout="default"
                        ref={ref}
                        data={carouselItems}
                        sliderWidth={300}
                        itemWidth={ScreenWidth - 5}
                        renderItem={renderItem}
                        onSnapToItem={(index: number) => setActiveIndex(index)}
                    />
                </View>
            </Pressable>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 8,
    },
    card_style: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    card_footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 4,
        paddingBottom: 2,
        paddingRight: 6,
    },
    source_name: {
        paddingLeft: 3,
        fontSize: 13,
    },
    more_info: {
    }
})

export default NewsCard;


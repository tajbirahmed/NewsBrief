import { Result } from '@/types/NewsApiTypes';
import { Icon, ScreenHeight, ScreenWidth } from '@rneui/base';
import React, { useContext, useRef, useState } from 'react';
import { View, Text, SafeAreaView, Pressable, useColorScheme, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { PageProps } from './NewsCardSlider';
import { router  } from 'expo-router';
import { Image } from 'expo-image';
import RatingComp from './RatingComp';
import { FIREBASE_AUTH } from '@/auth/FirebaseConfig';
import { saveArticle } from '@/utils/saveArticle';
import { saveArticleInfo } from '@/utils/saveArticleInfo';

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';



const NewsCard = (options: PageProps) => {
    const ref = useRef<any>();
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const colorScheme = useColorScheme();
    
    const carouselItems: Result[] = [
        {
            ...options.options,
        }
    ];
    function wait(duration: number): Promise<void> {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, duration);
        });
    }
    const handleArticleClick = async () => { 
        await saveArticle(options.options)
        
        router.push({
            pathname: '/ArticleView/', 
            params: {
                title: options.options.title.toLowerCase()
            }
        })
    }
    const renderItem = ({ item, index }: { item: Result; index: number }) => {

        return (
            <>
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
                    handleArticleClick();
                }}>
                        <Image
                            style={{
                                flex: 1,
                                borderRadius: 10,
                                width: '100%'
                            }}
                            source={item.image_url}
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                        />
                        <Text
                            numberOfLines={2}
                            ellipsizeMode="tail"
                            style={{
                                fontSize: 18, fontFamily: 'serif',
                                fontWeight: '700',
                                color: colorScheme === 'dark' ? 'white' : 'black',
                                overflow: 'hidden',
                            }}
                        >
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                
                <View style={styles.card_footer}>
                    <TouchableOpacity style={[styles.source_name]}>
                        <Text style={[styles.source_name, { fontStyle: 'italic', color: colorScheme === 'dark' ? 'white' : 'black' }]}
                            numberOfLines={1}>{item.source_id}
                        </Text>
                    </TouchableOpacity>
                    
                </View>
                </View>
                   
            </>
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


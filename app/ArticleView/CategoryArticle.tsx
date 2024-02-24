import { fetchArticleData } from '@/api/NewsApi';
import DropdownComponent from '@/components/DropDownComp';
import NewsCardSlider from '@/components/NewsCardSlider';
import { Result } from '@/types/NewsApiTypes';
import { Icon } from '@rneui/base';
import { useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'

const CategoryArticle = () => {
    const colorScheme = useColorScheme(); 
    const { category } = useLocalSearchParams<{ category: string }>();
    const [articles, setArticles] = useState<Result[]>([]);
    const [nextPage, setNextPage] = useState<string>('');
    const [floading, setFLoading] = useState<boolean>(false); 
    const [loading, setLoading] = useState<boolean>(false); 
    const [loadMore, setLoadMore] = useState<number>(0);
    const [value, setValue] = useState<string>('');
    useEffect(() => {
        if (nextPage === '') setFLoading(true);
        if (nextPage !== '') setLoading(true); 
        // fetchArticleData({
        //     nextPage,
        //     setNextPage,
        //     category,
        // }).then((e) => setArticles((prev) => [...prev, ...e]));
        setFLoading(false);
        setLoading(false);
    }, [loadMore])
    return (
        
        floading ? (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colorScheme === 'light' ? 'white' : 'black' }}>
            <ActivityIndicator size="large" color={colorScheme === 'dark' ? 'white' : 'black'} />
            <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black' }}>Fetching for ya!</Text>
        </View>) : (<ScrollView style={[styles.slider_container, { backgroundColor: colorScheme === 'light' ? 'white' : 'black' }]}>
            <Text style={[styles.category, { alignSelf: 'center', color: colorScheme === 'dark' ? 'white' : 'black' }]}>{category + " "} News</Text>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    
                    <View style={{ alignSelf: 'flex-end', width: '40%' }}>   
                        <DropdownComponent
                            value={value}
                            setValue={ setValue}
                        /> 
                    </View>
                    {value !== '' ? (
                        <View style={{ marginRight: 15, }}>
                            <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black', fontSize: 15, }}>
                                {"News of " + value}
                            </Text>
                        </View>
                    ) : (null)}
                </View>
            {articles.map((article, i) => (
                <NewsCardSlider
                    key={i}
                    options={article}
                />
            ))}
                {loading && !floading ? (<ActivityIndicator size="large" color={colorScheme === 'dark' ? 'white' : 'black'} />) : (
                    <TouchableOpacity onPress={() => setLoadMore(prev => prev + 1)}>
                        <Text style={{ alignSelf: 'center', color: colorScheme === 'dark' ? 'white' : 'black' }}>Load More</Text>
                    </TouchableOpacity>
                )}
        </ScrollView>)
    )
}

const styles = StyleSheet.create({
    slider_container: {
        width: '100%',
        overflow: 'scroll',
        flexDirection: 'column',
        paddingTop: 3,
        height: 'auto'
    },
    category: {
        fontSize: 24,
        fontStyle: 'normal',
    },
})

export default CategoryArticle; 
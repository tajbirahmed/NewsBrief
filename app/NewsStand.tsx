import NewsSourceStand from '@/components/NewsSourceStand';
import NewsStandSlider from '@/components/NewsStandSlider';
import categories from '@/constants/NewsCategorisWithExample';
import React from 'react'
import { ScrollView, View, Text, StyleSheet, useColorScheme } from 'react-native'


// 1. Header title is not yet configured
// verdict: not completed


// 1. Header title is not yet configured
// verdict: not completed

const NewsStand = () => {
    const colorScheme = useColorScheme();
    const colorVal = colorScheme === 'dark' ? 'white' : 'black';
    const bgVal = colorScheme === 'dark' ? 'black' : 'white';
    return (
        <ScrollView contentContainerStyle={ styles.container }>
            {categories.map((value, index) => (
                <NewsStandSlider
                    key={index}
                    categoryName={value.categoryName}
                    child={value.child}
                />
            ))}
        </ScrollView>
    )
}

export default NewsStand;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        overflow: 'scroll', 
    }
})
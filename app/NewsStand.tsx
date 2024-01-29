import NewsSourceStand from '@/components/NewsSourceStand';
import NewsStandSlider from '@/components/NewsStandSlider';
import categories from '@/constants/NewsCategorisWithExample';
import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'

const NewsStand = () => {
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
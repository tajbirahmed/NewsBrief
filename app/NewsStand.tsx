import NewsSourceStand from '@/components/NewsSourceStand';
import NewsStandSlider from '@/components/NewsStandSlider';
import categories from '@/constants/NewsCategorisWithExample';
import React from 'react'
import { ScrollView, View, Text, StyleSheet, useColorScheme } from 'react-native'


// 1. Header title is not yet configured
// verdict: not completed

const NewsStand = () => {
    const colorScheme = useColorScheme();
    const colorVal = colorScheme === 'dark' ? 'white' : 'black';
    const bgVal = colorScheme === 'dark' ? 'black' : 'white';
    return (
        <View style={[styles.container, {backgroundColor: bgVal}]}> 
            <View>
                <Text style={[styles.subheading_text, { color: colorVal, }]}>
                    Suggested Sources
                </Text>
            </View>
            <ScrollView contentContainerStyle={ styles.container }>
                {categories.map((value, index) => (
                    <NewsStandSlider
                        key={index}
                        categoryName={value.categoryName}
                        child={value.child}
                    />
                ))}
            </ScrollView>
        </View>
            )
}

export default NewsStand; 

const styles = StyleSheet.create({
    container: {
        overflow: 'scroll', 
    }, 
    subheading_text: {
        fontSize: 10,
        textAlign: 'center',
        fontWeight: '500',
        paddingTop: 3,
        paddingBottom: 2,
    }
})
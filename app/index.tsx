import Category from '@/components/Category'
import NewsCard from '@/components/NewsCard'
import NewsCardSlider from '@/components/NewsCardSlider'
import newsCategories from '@/constants/NewsCategories'
import newsTestData from '@/constants/NewsExamples'
import React, { useState} from 'react'
import { View, ScrollView, Text, TouchableOpacity, useColorScheme, StyleSheet } from 'react-native'
// 1. correct newsCategory.map
const Home = () => {
	const colorScheme = useColorScheme(); 
	return (
		<View style={{
			height: 'auto',
			backgroundColor: colorScheme === 'dark' ? 'black' : 'white', 
		}}>
			<ScrollView
				style={styles.container}
				horizontal={true}
			>
				{newsCategories.map(value => (
					<Category
						key={value.category_id}
							category_id={value.category_id}
							category_name={value.category_name}
						/>
					
				))}
			</ScrollView>
			<ScrollView
				style={styles.slider_container}
			>
				{newsTestData.map((value, i) => (
					<NewsCardSlider
						key={i}
						source={value.source}
						author={value.author}
						title={value.title}
						description={value.description}
						url={value.url}
						urlToImage={value.urlToImage}
						publishedAt={value.publishedAt}
						content={ value.content}
					/>
				))}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: '6%',
		width: 'auto',
		overflow: 'scroll',
		flexDirection: 'row',
		paddingTop: 6,
	}, 
	slider_container: {
		width: '100%',
		marginTop: 4,
		overflow: 'scroll',
		flexDirection: 'column',
		paddingTop: 3,
	}
})

export default Home;
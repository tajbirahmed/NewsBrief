import { fetchArticleData } from '@/api/NewsApi';
import NewsCard from '@/components/NewsCard';
import NewsCardRemastered from '@/components/NewsCardRemastered';
import NewsCardSlider from '@/components/NewsCardSlider';
import newsCategories from '@/constants/NewsCategories'
import { Result } from '@/types/NewsApiTypes';
import { Icon, ScreenHeight } from '@rneui/base';
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, useColorScheme, useWindowDimensions } from 'react-native'

import { NewsCategory } from '@/constants/NewsCategories';
import { router } from 'expo-router';

const Explore = () => {
	const colorScheme = useColorScheme();
	const [loadCategories, setLoadCategories] = useState(0);
	const [categorieNow, setCategorieNow] = useState<NewsCategory[]>([]); 
	const [currentIndex, setCurrentIndex] = useState<number>(0); 
	useEffect(() => { 
		const newArray = newsCategories.slice(currentIndex, currentIndex + 2); 
		setCategorieNow((prev) => [...prev, ...newArray]); 
		setCurrentIndex(prev => prev + 2);
	}, [loadCategories])
	return (
		<ScrollView style={[styles.container, { backgroundColor: colorScheme === 'dark' ? 'black' : 'white' }]}>
			<View style={ styles.header_container}>
				<Text style={{ color: colorScheme === 'dark' ? 'white' : 'black', fontSize: 10 }}>Explore News By Categories</Text>
			</View>
			{categorieNow.map((item, index) => (
				<View style={ styles.card_category_container} key={index}>
					<View style={styles.category_container}>
						<Text key={index} style={[styles.category, { color: colorScheme === 'dark' ? 'white' : 'black' }]}>{item.category_name}</Text>
						<TouchableOpacity onPress={() => {
							router.push({
								pathname: '/ArticleView/CategoryArticle', 
								params: {
									category: item.category_name, 
								}
							})
						}}>
							<Icon name='chevron-right' type='font-awesome' color={colorScheme === 'dark' ? 'white' : 'black'} style={styles.icon_style} />
						</TouchableOpacity>
					</View>
					<NewsCardRemastered
						category={ item.category_name }
					/>
				</View>

			))
			}
			<TouchableOpacity onPress={() => setLoadCategories(prev => prev + 1)} style={{alignSelf: 'center'}}>
				<Text style={{ color: colorScheme === 'dark' ? 'white' : 'black', fontSize: 12, }}>Load More</Text>
			</TouchableOpacity>
			
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		overflow: 'scroll',
	},
	container1: {
		width: '100%',
		minHeight: ScreenHeight / 3,
		marginTop: 7,
	},
	header_container: {
		display: 'flex', 
		flexDirection: 'row', 
		justifyContent: 'center', 
		height: '1%'
	},
	card_category_container: {
		width: '100%', 
	},
	category_container: {
		paddingTop: 6,
		paddingLeft: 10,
		display: 'flex',
		flexDirection: 'row',

	},
	news_card: {
		display: 'flex', 
		flexDirection: 'row',
	}, 
	category: {
		fontSize: 24,
		fontStyle: 'normal',
	},
	icon_style: {
		paddingLeft: 8,
		paddingTop: 9
	}
})

export default Explore; 

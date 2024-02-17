import Category from '@/components/Category'
import NewsCard from '@/components/NewsCard'
import NewsCardSlider from '@/components/NewsCardSlider'
import newsCategories from '@/constants/NewsCategories'
import newsTestData from '@/constants/NewsExamples'
import React, { useContext, useEffect, useState } from 'react'
import { View, ScrollView, Text, TouchableOpacity, useColorScheme, StyleSheet, ActivityIndicator } from 'react-native'
import { Result } from '@/types/NewsApiTypes'
import { fetchArticleData } from '@/api/NewsApi'
// 1. correct newsCategory.map

const Home = () => {
	const colorScheme = useColorScheme();
	const [selected, setSelected] = useState<number | null>(null) 
	// for news api 
	const [result, setResult] = useState<Result[]>([]);
	const [nextPage, setNextPage] = useState('');
	const [loadMoreData, setLoadMoreData] = useState(0);
	const [firstLoading, setFirstLoading] = useState(false); 
	const [generalLoading, setGeneralLoading] = useState(false); 

	useEffect(() => { 
		loadMoreData === 0 ? setFirstLoading(true) : null;
		setGeneralLoading(true);
		fetchArticleData({
			nextPage,
			setNextPage
		}).then((e) => setResult((prev) => [...prev, ...e])); 
		loadMoreData === 0 ? setFirstLoading(false) : null;
		setGeneralLoading(false);
	}, [loadMoreData])
	return (
		<View style={{
			height: 'auto',
			backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
		}}>
			<ScrollView
				style={styles.container}
				horizontal={true}
			>
				{newsCategories.map((value, index) => (
					<TouchableOpacity
						key={index}
						onPress={() => { setSelected(value.category_id) }}
					>
						<Category
							key={value.category_id}
							category_id={value.category_id}
							category_name={value.category_name}
						/>
						{/* need work on selected */}
					</TouchableOpacity>

				))}
			</ScrollView>
			<ScrollView
				style={styles.slider_container}
			>
				{firstLoading ? <ActivityIndicator size="large" color={colorScheme === 'dark' ? 'white' : 'black'} /> : (
					result.map((value, i) => (
					<NewsCardSlider
						key={i}
						options={ value }
					/>
				)))}
				<View style={ styles.load_more}>
					<TouchableOpacity onPress={() => setLoadMoreData(loadMoreData + 1)}>
						{generalLoading && !firstLoading ? (
							<ActivityIndicator size="large" color={colorScheme === 'dark' ? 'white' : 'black'} />
						): (null)}
						<Text style={{color: colorScheme === 'dark' ? 'white' : 'black', fontSize: 12,}}>Load More</Text>
					</TouchableOpacity>
				</View>
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
		padding: 2,
	},
	slider_container: {
		width: '100%',
		marginTop: 4,
		overflow: 'scroll',
		flexDirection: 'column',
		paddingTop: 3,
	},
	load_more : {
		display: 'flex', 
		flexDirection: 'row', 
		justifyContent: 'center', 
		alignItems: 'center',
		marginBottom: 10, 
		padding: 7,
		paddingBottom: 50,
	}
})

export default Home;
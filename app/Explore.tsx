import Category from '@/components/Category'
import NewsCard from '@/components/NewsCard'
import NewsCardSlider from '@/components/NewsCardSlider'
import newsCategories from '@/constants/NewsCategories'
import newsTestData from '@/constants/NewsExamples'
import React, { useContext, useEffect, useState } from 'react'
import { View, ScrollView, Text, TouchableOpacity, useColorScheme, StyleSheet, ActivityIndicator } from 'react-native'
import { Result } from '@/types/NewsApiTypes'
import { fetchArticleData } from '@/api/NewsApi'
import { ScreenHeight } from '@rneui/base'
import { router } from 'expo-router'
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
// 1. correct newsCategory.map



const Home = () => {
	const colorScheme = useColorScheme();
	const [selected, setSelected] = useState<number | null>(null)
	// for news api 
	const [result, setResult] = useState<Result[]>([]);
	const [pageResult, setPageResult] = useState<Result[]>([]);
	const [number, setNumber] = useState<number[]>([1, 2, 3]);
	const [nextPage, setNextPage] = useState('');
	const [loadMoreData, setLoadMoreData] = useState(1);
	const [firstLoading, setFirstLoading] = useState(false);
	const [generalLoading, setGeneralLoading] = useState(false);
	const [category, setCategory] = useState('top');
	

	
	useEffect(() => {
		// loadMoreData === 1 ? setFirstLoading(true) : null;
		const fetchResult = async () => {
			try {
				// const e = await fetchArticleData({
				// 	nextPage,
				// 	setNextPage,
				// 	category,
				// });

				// setResult((prev) => [...prev, ...e]);
			} catch (error) {
				console.error('Error fetching article data: explore.tsx', error);
			}
		}
		setGeneralLoading(true);
		
		
		// pagination
		let j = 0;
		if (result.length <= (loadMoreData - 1) * 10 || pageResult.length === 0) {
			fetchResult()
				.then(() => { 
					const thisPageres: Result[] = result.slice((loadMoreData - 1) * 10, (loadMoreData) * 10 - 1);
					setPageResult(thisPageres);
				})
				.catch((e) => { 
					console.log(e);
					
				});
		}
		if (result.length <= (loadMoreData - 1) * 10 || pageResult.length === 0) {
			fetchResult()
				.then(() => {
					const thisPageres: Result[] = result.slice((loadMoreData - 1) * 10, (loadMoreData) * 10 - 1);
					setPageResult(thisPageres);
					
				})
				.catch((e) => {
					console.log(e);

				});
		}
		setGeneralLoading(false);
	}, [loadMoreData]); 
	const updateIndex = (loadMoreData: number) => {
		console.log(loadMoreData);

		const newSet: number[] = [loadMoreData, loadMoreData + 1, loadMoreData + 2];
		if (loadMoreData - 1 >= 1) { 
			newSet.splice(0, 0, loadMoreData - 1);
		}
		setNumber(newSet);
	}
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
						onPress={() => { setSelected(value.category_id); }}
						style={{ borderBottomColor: 'blue', borderBottomWidth: selected === value.category_id ? 2 : 0 }}
					>
						<Category
							key={value.category_id}
							category_id={value.category_id}
							category_name={value.category_name}
						/>
					</TouchableOpacity>
				))}
			</ScrollView>
			<ScrollView
				style={styles.slider_container}
			>
				{firstLoading ? (

					<ActivityIndicator size="large" style={{ height: 700, paddingBottom: 70 }} color={colorScheme === 'dark' ? 'white' : 'black'} />


				) : (
						pageResult.map((value, i) => (
						<NewsCardSlider
							key={i}
							options={value}
						/>
					)))}
				<View style={styles.load_more}>
					{generalLoading ? (
						<ActivityIndicator size={30} color={colorScheme === 'dark' ? 'white' : 'black'} />
					) : (
							<View style={{
								height: 30, display: 'flex', flexDirection: 'row', justifyContent: 'center',
								alignItems: 'center', paddingHorizontal: 8, width: '80%'
							}}>
								<TouchableOpacity style={{ paddingHorizontal: 8 }} onPress={() => {
									if (loadMoreData !== 1) {
										updateIndex(loadMoreData - 1);
										setLoadMoreData((prev) => prev - 1)
										
									}
								}}>
									{loadMoreData !== 1 ?
										<ChevronLeft size={20} color={colorScheme === 'dark' ? 'white' : 'black'} /> : 
										<Text style={{ fontSize: 20 }}>{ " " }</Text>
									}
								</TouchableOpacity>
								
								{number.map((val, index) => (
									<TouchableOpacity key={index} style={{
										paddingHorizontal: 8, borderWidth: 0.7,
										borderColor: val === loadMoreData ? 'gray' : colorScheme === 'dark' ? 'black' : 'white', 
										borderRadius: 5, 
									}} onPress={() => {
										setLoadMoreData(val)
										updateIndex(val);
										}
									}>
										<Text style={{ color: colorScheme === 'dark' ? 'white' : 'black' }}>
											{val}
										</Text>
									</TouchableOpacity>
								))}
								<Text style={{ color: colorScheme === 'dark' ? 'white' : 'black' }}>
									...
								</Text>
								<TouchableOpacity style={{ paddingHorizontal: 8 }} onPress={() => {
									setLoadMoreData((prev) => (
										prev + 1
									))
									updateIndex(loadMoreData); }}>
									<ChevronRight size={20} color={colorScheme === 'dark' ? 'white' : 'black'} />
								</TouchableOpacity>
							</View>
					)}
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
		height: 'auto'
	},
	load_more: {
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
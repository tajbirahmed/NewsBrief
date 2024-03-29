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
import { DB } from '@/auth/FirebaseConfig'
import { collection, getDocs, limit, query } from 'firebase/firestore'
// 1. correct newsCategory.map


export const exampleNews: Result[] = [
	{
	title: "India taking up issues of pending salaries in Gulf countries",
	link: "https://www.sentinelassam.com/national-news/india-taking-up-issues-of-pending-salaries-in-gulf-countries-576449",
	keywords: [
		"National News,More"
	],
	creator: [
		"Sentinel Digital Desk"
	],
		video_url: null,
	source_url: "",
	description: "External Affairs Minister S. Jaishankar on Thursday said that the government has taken up the issue of pending salaries of Indian workers with the Gulf countries.",
	content: "NEW DELHI: External Affairs Minister S. Jaishankar on Thursday said that the government has taken up the issue of pending salaries of Indian workers with the Gulf countries.Responding to a question about loss of wages of Indians working abroad, the Minister said that the data of pending salaries was not available but he took up the matter with Gulf countries. \"Would like to assure that employment is retained, wages are paid, and welfare is ensured,\" Jaishankar said. He also said that the government's objective is to get as many workers as possible back to work and he has been in touch with the concerned authorities and also through Ambassadors in the Gulf countries. Jaishankar also informed the House that Prime Minister Narendra Modi is also in touch with the Gulf governments and had 16 telephonic conversations with the authorities. He said he himself visited these countries and Minister of State for External Affairs V. Muraleedharan has also visited the gulf countries and had meetings with the authorities there. He also informed that a corpus of Rs 47 crore under the Indian Community Welfare Fund has been created for helping Indian workers there. In case of the death of an Indian worker, the Ministry of External Affairs through the Ambassador posted there, tries to get ex-gratia compensation paid to the worker's family from the local government or the employer company. Earlier, AITMC member Santanu Sen raised the issue of a wrong map on the World Health Organisation (WHO) site to which Chairman M. Venkaiah asked the EAM to look into. The TMC member said that as a doctor he checks the WHO COVID-19 site for data. The map on the site showed parts of Jammu and Kashmir and Arunachal Pradesh as outside India. He says the government should have been vigilant, when they are using Pegasus to spy on their own ministers, Sen quipped. Responding to the question on the number of women judges in the country, Law and Justice Minister Kiren Rijiju informs the House, out of a total 34 judges in the Supreme Court, we have for the first time four women judges. Out of 1,098 judges in High Courts, we have 83 women judges. \"We have been stressing time and again that while recommending names, preferences may be given to women, backward classes, scheduled caste and scheduled tribe,\" Rijiju further said. Responding to a question that there was no woman judge in the Patna High Court, he said that the Ministry has requested all high courts to send bigger number of women for appointment of judges in the high courts of the country in future. BJP member Vikas Mahatme raised the issue of tax collected through sale of alcohol and said that the states are getting addicted to tax being collected from this source. Describing it as 'Sin Tax items', Mahatme said, \"The tax being collected should be increased. Delhi and Maharashtra have brought in various changes including home delivery in Delhi and sale in malls in Maharashtra. State governments are getting addicted to tax collection from this item.\" (IANS) Also Read:  Jaishankar calls Qatari counterpart; discusses AfghanistanAlso watch:",
	pubDate: "2022-02-04 08:53:39",
	full_description: "NEW DELHI: External Affairs Minister S. Jaishankar on Thursday said that the government has taken up the issue of pending salaries of Indian workers with the Gulf countries. Responding to a question about loss of wages of Indians working abroad, the Minister said that the data of pending salaries was not available but he took up the matter with Gulf countries. \"Would like to assure that employment is retained, wages are paid, and welfare is ensured,\" Jaishankar said. He also said that the government's objective is to get as many workers as possible back to work and he has been in touch with the concerned authorities and also through Ambassadors in the Gulf countries. Jaishankar also informed the House that Prime Minister Narendra Modi is also in touch with the Gulf governments and had 16 telephonic conversations with the authorities. He said he himself visited these countries and Minister of State for External Affairs V. Muraleedharan has also visited the gulf countries and had meetings with the authorities there. He also informed that a corpus of Rs 47 crore under the Indian Community Welfare Fund has been created for helping Indian workers there. In case of the death of an Indian worker, the Ministry of External Affairs through the Ambassador posted there, tries to get ex-gratia compensation paid to the worker's family from the local government or the employer company. Earlier, AITMC member Santanu Sen raised the issue of a wrong map on the World Health Organisation (WHO) site to which Chairman M. Venkaiah asked the EAM to look into. The TMC member said that as a doctor he checks the WHO COVID-19 site for data. The map on the site showed parts of Jammu and Kashmir and Arunachal Pradesh as outside India. He says the government should have been vigilant, when they are using Pegasus to spy on their own ministers, Sen quipped. Responding to the question on the number of women judges in the country, Law and Justice Minister Kiren Rijiju informs the House, out of a total 34 judges in the Supreme Court, we have for the first time four women judges. Out of 1,098 judges in High Courts, we have 83 women judges. \"We have been stressing time and again that while recommending names, preferences may be given to women, backward classes, scheduled caste and scheduled tribe,\" Rijiju further said. Responding to a question that there was no woman judge in the Patna High Court, he said that the Ministry has requested all high courts to send bigger number of women for appointment of judges in the high courts of the country in future. BJP member Vikas Mahatme raised the issue of tax collected through sale of alcohol and said that the states are getting addicted to tax being collected from this source. Describing it as 'Sin Tax items', Mahatme said, \"The tax being collected should be increased. Delhi and Maharashtra have brought in various changes including home delivery in Delhi and sale in malls in Maharashtra. State governments are getting addicted to tax collection from this item.\" (IANS) Also Read: Jaishankar calls Qatari counterpart; discusses Afghanistan Also watch:",
	image_url: "https://assets.sentinelassam.com/h-upload/2022/02/04/500x300_307612-jsha.jpg",
	source_id: "sentinel",
	country: [
		"india"
	],
	category: [
		"top"
	],
	language: "english"
	},
	
]


const Home = () => {
	const colorScheme = useColorScheme();
	const [selected, setSelected] = useState<number | null>(null) 
	// for news api 
	const [result, setResult] = useState<Result[]>(exampleNews);
	const [nextPage, setNextPage] = useState('');
	const [loadMoreData, setLoadMoreData] = useState(5);
	const [firstLoading, setFirstLoading] = useState(true); 
	const [generalLoading, setGeneralLoading] = useState(false); 
	const category = 'top';
	useEffect(() => { 
		loadMoreData === 5 ? setFirstLoading(true) : null;
		setGeneralLoading(true);
		// get Articles
		const colRef = collection(DB, "Article"); 
		const q = query(colRef, limit(loadMoreData))
		getDocs(q)
			.then((e) => {
				const res: Result[] = [];
				e.forEach((doc) => { 
					res.push(doc.data() as Result);
				})

				setResult((prev) => [...res]);
				console.log(result);
				
			})
			.catch((e) => { 
				console.log(e);
			}); 

		
		loadMoreData === 5 ? setFirstLoading(false) : null;
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
					{firstLoading ? (
						
							<ActivityIndicator size="large" style={{ height: 700 }} color={colorScheme === 'dark' ? 'white' : 'black'} />	
							
						
					) : (
						[...exampleNews, ...result].map((value, i) => (
						<NewsCardSlider
								key={i}
								options={value}
						/>
					)))}
					<View style={ styles.load_more}>
						<TouchableOpacity onPress={() => setLoadMoreData(loadMoreData + 3)}>
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
		height: 'auto'
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
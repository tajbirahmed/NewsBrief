import { fetchArticleData } from '@/api/NewsApi';
import NewsCard from '@/components/NewsCard';
import NewsCardRemastered from '@/components/NewsCardRemastered';
import NewsCardSlider from '@/components/NewsCardSlider';
import newsCategories from '@/constants/NewsCategories'
import { Result } from '@/types/NewsApiTypes';
import { Icon, ScreenHeight } from '@rneui/base';
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View, useColorScheme, useWindowDimensions } from 'react-native'

const oneArticle: Result[] = [{
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

const Explore = () => {
	const colorScheme = useColorScheme();
	const [result, setResult] = useState<Result[]>(oneArticle);
	const [category, setCategory] = useState('World News'); 
	const [nextPage, setNextPage] = useState('');
	useEffect(() => {
		
		// fetchArticleData({
		// 	nextPage,
		// 	setNextPage
		// }).then((e) => setResult((prev) => [...prev, ...e])); 
	
	}, [category])
	return (
		<ScrollView style={[styles.container, { backgroundColor: colorScheme === 'dark' ? 'black' : 'white' }]}>
			<View style={ styles.header_container}>
				<Text style={{ color: colorScheme === 'dark' ? 'white' : 'black', fontSize: 10 }}>Explore News By Categories</Text>
			</View>
			{newsCategories.map((item, index) => (
				<View style={ styles.card_category_container} key={index}>
					<View style={styles.category_container}>
						<Text key={index} style={[styles.category, { color: colorScheme === 'dark' ? 'white' : 'black' }]}>{item.category_name}</Text>
						<Icon name='chevron-right' type='font-awesome' color={colorScheme === 'dark' ? 'white' : 'black'} style={styles.icon_style} />
					</View>
					<NewsCardRemastered
						options={result}
					/>
					
				</View>
			))
			}
			
			
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

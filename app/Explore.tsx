import NewsCard from '@/components/NewsCard';
import NewsCardSlider from '@/components/NewsCardSlider';
import newsCategories from '@/constants/NewsCategories'
import { Icon, ScreenHeight } from '@rneui/base';
import React from 'react'
import { ScrollView, StyleSheet, Text, View, useColorScheme, useWindowDimensions } from 'react-native'

const Explore = () => {
	const colorScheme = useColorScheme();
	// const { title, setTitle } = useContext(TitleContext);
	// useEffect(() => {
	// 	if (setTitle)
	// 		setTitle('Explore');
	// 	console.log(title);
		
	// });
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
					<ScrollView horizontal={true} style={ styles.container1}>
						
					</ScrollView>
				</View>
			))}
			
			
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

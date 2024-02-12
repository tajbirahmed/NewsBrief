import NewsSourceStand from '@/components/NewsSourceStand';
import { Icon } from '@rneui/base';
import React, { useEffect } from 'react'
import { ScrollView, View, StyleSheet, Text, useColorScheme, Pressable } from 'react-native'

// 1. handle urlto news source
// 2. handle actula news source


interface NewsSourceStandCard {
	urlToImageSource?: String,
	newsSourceName: String,
	urlToNewsSource?: String,
	actualNewsSource?: String,
}


interface Category { 
	categoryName: String, 
	child?: NewsSourceStandCard[],
}

const NewsStandSlider = ({ categoryName, child }: Category) => {
	const colorScheme = useColorScheme(); 
	const colorVal = colorScheme === 'dark' ? 'white' : 'black';
	const bgVal = colorScheme === 'dark' ? 'black' : 'white';
  return (
		<View style={[styles.category_container, {backgroundColor: bgVal}]}> 
			<View style={[styles.category_heading_container, {backgroundColor: bgVal}]}>
				<Text style={[styles.heading, {color: colorVal}]}>
				  { categoryName }
			  </Text>
		  </View>

			<ScrollView contentContainerStyle={styles.source_slider} horizontal={true}> 
				{
					child?.map((value, index) => (
						<NewsSourceStand 
							key={index} 
							urlToImageSource={value.urlToImageSource}
							newsSourceName={value.newsSourceName}
						/>
					))
				}			
			</ScrollView>
			<View style={ styles.explore_more_category_container}>
				<Pressable>
					<Text style={[styles.explore_more, { color: colorVal }]} > Explore More in {categoryName}					
					</Text>
				</Pressable>
			</View>
	  </View>
  )
}

const styles = StyleSheet.create({
	category_container: {
		overflow: 'scroll',
	}, 
	category_heading_container: {
		width: '100%', 
		paddingLeft: 4, 
		margin: 4, 
		marginLeft: 8, 
		paddingBottom: 10,
	}, 
	heading: {
		fontSize: 18, 
		fontWeight: '700', 
	}, 
	source_slider: {
		width: 'auto',
		overflow: 'scroll',
		flexDirection: 'row',
		paddingTop: 2, 
	}, 
	explore_more_category_container: {
		width: '100%', 
		paddingTop: 15, 
		paddingBottom: 12, 
	},
	explore_more: {
		textAlign: 'center', 
		paddingTop: 4, 
	}
})

export default NewsStandSlider; 
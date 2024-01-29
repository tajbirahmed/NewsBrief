import NewsSourceStand from '@/components/NewsSourceStand';
import React from 'react'
import { ScrollView, View, StyleSheet, Text } from 'react-native'

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

const NewsStandSlider = ({ categoryName, child} : Category) => {
  return (
		<View style={styles.category_container}> 
			<View>
				<Text style={styles.subheading_text}>
						Explore More News Sources
				</Text>
			</View>

		  <View style={ styles.category_heading_container}>
			  <Text style={ styles.heading}>
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
	subheading_text: {
		fontSize: 10, 
		textAlign: 'center', 
		fontWeight: '500', 
		paddingTop: 3, 
		paddingBottom: 2, 
	}
})

export default NewsStandSlider; 
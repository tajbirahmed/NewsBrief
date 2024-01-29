import React from 'react'; 
import { View, StyleSheet, Image, Pressable, Text } from 'react-native';

interface NewsSourceStandCard { 
	urlToImageSource?: String, 
	newsSourceName: String, 
	urlToNewsSource?: String, 
	actualNewsSource?: String, 
}


// 1. handle onPress when user clicks on news source image 
// 2. handle onPress when user clicks on news source title 

const NewsSourceStand = ({urlToImageSource, newsSourceName} : NewsSourceStandCard) => {
	return (
		<View style={styles.iamge_and_source_name_container}>
			<View style={styles.image_container}> 			
				<Pressable style={ styles.image_container} onPress={()=>{}}>
					<Image style={ styles.image} source={{uri: urlToImageSource?.toString()}} />
				</Pressable>
			</View>
			<View style={styles.source_name_container}>  
				<Pressable style={styles.source_name_container} onPress={()=>{}}>
					<Text style={styles.source_name}> { newsSourceName}</Text>
				</Pressable>
			</View>
		</View>
	)
}

export default NewsSourceStand;

const styles = StyleSheet.create({
	iamge_and_source_name_container: {
		flex: 1,
		alignSelf: 'center', 
		margin: 5, 
	}, 
	image_container: {
		width: 100, 
		height: 100, 
	}, 
	image: {
		width: '100%', 
		height: '100%',
		borderRadius: 15, 
	}, 
	source_name_container: {
		width: '100%', 
		alignSelf: 'center',
	}, 
	source_name: {
		width: '100%', 
		fontSize: 12, 
		fontWeight: '400',
		textAlign: 'center',
	}
})
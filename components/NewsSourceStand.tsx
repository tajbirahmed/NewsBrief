import React from 'react'; 
import { View, StyleSheet, Image, Pressable, Text, useColorScheme } from 'react-native';

interface NewsSourceStandCard { 
	urlToImageSource?: String, 
	newsSourceName: String, 
	urlToNewsSource?: String, 
	actualNewsSource?: String, 
}

// this component is responsible for showing news source image with source name
// 1. handle onPress when user clicks on news source image 
// 2. handle onPress when user clicks on news source title 
// 3. add some shadows would be nice
// verdict: not finalized

const NewsSourceStand = ({ urlToImageSource, newsSourceName }: NewsSourceStandCard) => {
	const colorScheme = useColorScheme();
	const colorVal = colorScheme === 'dark' ? 'white' : 'black';
	const bgVal = colorScheme === 'dark' ? 'black' : 'white';
	return (
		<View style={styles.iamge_and_source_name_container} >
			<View style={[styles.image_container, { borderColor: colorVal, borderWidth: 0.5, }]}> 			
				<Pressable style={[styles.image_container, ]} onPress={()=>{}}>
					<Image style={ [styles.image]} source={{uri: urlToImageSource?.toString()}} />
				</Pressable>
			</View>
			<View style={styles.source_name_container}>  
				<Pressable style={styles.source_name_container} onPress={()=>{}}>
					<Text style={[styles.source_name, {color: colorVal}]} numberOfLines={1}> { newsSourceName}</Text>
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
		marginBottom: 10,
		paddingTop: 10,
	}, 
	image_container: {
		width: 100, 
		height: 100,
		borderRadius: 50,
		overflow: "hidden",
		

	}, 
	image: { 
		height: '100%', 
		width: '100%',
		resizeMode: 'contain',
	}, 
	source_name_container: {
		width: 100, 
		alignSelf: 'center',
		paddingTop: 4, 
	}, 
	source_name: {
		width: '100%', 
		fontSize: 12, 
		fontWeight: '400',
		textAlign: 'center',
	}
})
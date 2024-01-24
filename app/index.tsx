import { Link } from 'expo-router'
import React from 'react'
import { View, Text, TouchableOpacity, useColorScheme } from 'react-native'

const Home = () => {
	const colorScheme = useColorScheme(); 
	
	return (
		<View style={{
			flex: 1,
			height: 'auto',
			backgroundColor: colorScheme === 'dark' ? 'black' : 'white', 
		}}>
			<Link href="/test/">
				Cick
			</Link>
		</View>
	)
}

export default Home
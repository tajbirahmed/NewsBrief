import { Icon } from "@rneui/base";
import { HelpCircle, Settings, Star, User, AreaChart } from "lucide-react-native";
import React, { useRef, useState } from "react";
import { View, ScrollView, TouchableOpacity, Text, useColorScheme, DrawerLayoutAndroid } from "react-native";
import RateAppComp from "./RateAppComp";

interface DrawerProps {
	drawer: React.RefObject<DrawerLayoutAndroid> | null,
}

const SideMenu = ({ drawer }: DrawerProps) => {
	const colorScheme = useColorScheme();
	const [openRateApp, setOpenRateApp] = useState(false); 
	return (
		<>
			{openRateApp ? <RateAppComp
				openRateApp={openRateApp}
				setOpenRateApp={setOpenRateApp}
			/> : null}
			<View style={{
				flex: 1,
				paddingTop: 40,
			}}>
				<Text
					style={{
						marginLeft: 30,
						fontSize: 30,
						fontWeight: 'bold',
						paddingTop: 8,
						marginBottom: 10,
						color: colorScheme === 'dark' ? 'white' : 'black',
					}}
				>
					NewsBrief Dashboard
				</Text>
				<View
					style={{
						borderBottomColor: 'black',
						borderBottomWidth: 0.5,
						marginBottom: 11,
					}}
				/>
				<ScrollView
					style={{
						display: 'flex',
						flexDirection: 'column',
						marginLeft: 30,
						marginTop: 10,
						marginBottom: 10,
					}}
				>
					<TouchableOpacity onPress={() => setOpenRateApp(!openRateApp)}>
						<View style={{
							flex: 1,
							flexDirection: 'row',
						}}>
							<Star color={colorScheme === 'dark' ? 'white' : 'black'} size={20} />
							<Text
								style={{
									fontSize: 16,
									paddingLeft: 25,
									marginBottom: 25,
									color: colorScheme === 'dark' ? 'white' : 'black',
									fontWeight: '600',
								}}
							>   Rate App
							</Text>
						</View>

					</TouchableOpacity>

					<TouchableOpacity onPress={() => setOpenRateApp(!openRateApp)}>
						<View style={{
							flex: 1,
							flexDirection: 'row',
						}}>
							<AreaChart color={colorScheme === 'dark' ? 'white' : 'black'} size={20} />
							<Text
								style={{
									fontSize: 16,
									paddingLeft: 25,
									marginBottom: 25,
									color: colorScheme === 'dark' ? 'white' : 'black',
									fontWeight: '600',
								}}
							>   Analytics
							</Text>
						</View>

					</TouchableOpacity>

					<TouchableOpacity>
						<View style={{
							flex: 1,
							flexDirection: 'row',
						}}>
							<Settings color={colorScheme === 'dark' ? 'white' : 'black'} size={20}  />
							<Text
								style={{
									fontSize: 18,
									paddingLeft: 25,
									marginBottom: 25,
									color: colorScheme === 'dark' ? 'white' : 'black',
								}}
							>   Settings
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity>
						<View style={{
							flex: 1,
							flexDirection: 'row',
						}}>
							<User color={colorScheme === 'dark' ? 'white' : 'black'} size={20} />
							<Text
								style={{
									fontSize: 18,
									paddingLeft: 25,
									marginBottom: 25,
									color: colorScheme === 'dark' ? 'white' : 'black',
								}}
							>   Manage Account
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity>
						<View style={{
							flex: 1,
							flexDirection: 'row',
						}}>
							<HelpCircle color={colorScheme === 'dark' ? 'white' : 'black'} size={20} />
							<Text
								style={{
									fontSize: 18,
									paddingLeft: 25,
									marginBottom: 25,
									color: colorScheme === 'dark' ? 'white' : 'black',
								}}
							>   Help Center
							</Text>
						</View>
					</TouchableOpacity>

				</ScrollView>
			</View>
		</>
	);
};

export default SideMenu
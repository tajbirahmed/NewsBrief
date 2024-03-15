import { DB, FIREBASE_AUTH, FIREBASE_STORAGE } from '@/auth/FirebaseConfig';
import { TextInput } from '@react-native-material/core';
import { collection, query, where, getDocs, setDoc, doc, updateDoc } from "firebase/firestore";
import { User, Pencil, MailCheck, Phone, MapPin, Calendar } from 'lucide-react-native';
import React, { useState } from 'react'
import { View, Text, useColorScheme, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';

export interface PageProps {
	title: string,
	icon?: boolean,
	value?: string | null,
	phoneNumber?: string | undefined,
	setPhoneNumber?: (phoneNumber: string) => void,
	dateOfBirth?: Date | undefined, 
    setDateOfBirth?: (dateOfBirth: Date) => void, 
    defaultDateValue?: string, 
}



const InfoComp = (props: PageProps) => {
	const colorScheme = useColorScheme();
	const colVal = colorScheme === 'dark' ? 'white' : 'black';
	const bgVal = colorScheme === 'dark' ? 'black' : 'white';
	const [textInput, setTextInput] = useState<boolean>(false);
	const [phone, setPhone] = useState('+880')
    const [isValidPhone, setIsValidPhone] = useState<boolean>(true); 
    const onChange = (event: DateTimePickerEvent, selectedDate: Date) => {
        const currentDate = selectedDate;
        if (props.setDateOfBirth !== undefined)
            props.setDateOfBirth(selectedDate);
    };
	const addPhone = async () => {
		const user = FIREBASE_AUTH.currentUser;
		if (isValidBangladeshPhoneNumber(phone) && user?.email) {
			props.setPhoneNumber && props.setPhoneNumber(phone);
			const docRef = await updateDoc(doc(DB, 'User', user.email.toLowerCase()), {
				phoneNumber: phone,
			})
			setTextInput(false);
		} else {
			alert('Check phone no.')
		}
	}
	const addBirthDate = async (date : Date) => { 
		const user = FIREBASE_AUTH.currentUser;
		if (user?.email) {
			const docRef = await updateDoc(doc(DB, 'User', user.email.toLowerCase()), {
				dateOfBirth: date,
			})
		}
		setTextInput(false);
		
	}
	function isValidBangladeshPhoneNumber(input: string): boolean {
		const pattern = /^\+880\d{10}$/;
		return pattern.test(input);
	}
	return (
		<View style={{
			width: '100%', marginHorizontal: 10, marginTop: 3, paddingRight: 15, display: 'flex',
			flexDirection: 'row', justifyContent: 'space-between', marginVertical: 3,
			height: 60, alignItems: 'center', borderRadius: 15, borderColor: colVal, 
			backgroundColor: colorScheme === 'dark' ? '#9c568e' : 'aliceblue',
		}}>
			<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 5}}>
				{props.title === 'Username' ? (
					<User size={16} color={colVal}/>
				): props.title === 'Email' ? (
						<MailCheck size={16} color={colVal} style={{paddingRight: 12}} />
					) : props.title === 'Phone' ? (
						<Phone size={16} color={colVal} style={{ paddingRight: 12 }} />
						) : props.title === 'Location' ? (
							<MapPin size={16} color={colVal} style={{ paddingRight: 12 }} />
						) : (null)} 
				<Text style={{ color: colVal, fontWeight: '600', fontSize: 16, paddingLeft: 5, }}>
					{props.title}
				</Text>
			</View>
			{props.title !== 'Date of Birth' && props.value || props.title === 'Date of Birth' && props.value !== props.defaultDateValue ? (
				<Text style={{ color: colVal, fontWeight: '600', fontSize: 16 }}>
					{props.value}
				</Text>
			) : (
				<TouchableOpacity onPress={() => {
					setTextInput(true);
				}} style={{}}>
					{!textInput ? (
							props.title === 'Date of Birth' ? <Calendar size={16} color={colorScheme === 'dark' ? 'white' : 'black'} /> :
								props.title === 'Location' ? ( 
									<MapPin size={16} color={colorScheme === 'dark' ? 'white' : 'black'} />
								):
								(<Pencil size={16} color={colorScheme === 'dark' ? 'white' : 'black'} />) 
                        ) : props.title === 'Phone' ? (
						<View style={{ width: 300, alignSelf: 'flex-end' }}>
							<TextInput
								style={[styles.TextInput, { alignSelf: 'flex-end', }]}
								color={'secondary'}
								label="Phone"
								variant="outlined"
								onChangeText={(number) => setPhone(number)}
								inputContainerStyle={{ backgroundColor: colorScheme === 'dark' ? 'black' : 'white' }}
								inputStyle={{ color: colorScheme === 'dark' ? 'white' : 'black', fontFamily: 'monospace' }}
								value={phone}
								keyboardType="numeric"
								onSubmitEditing={() => {
									if (props.title === 'Phone')
										addPhone()
								}}
							/>
						</View>
                            ) : props.title === 'Date of Birth' && props.dateOfBirth ? (
                                    <SafeAreaView>
                                        <RNDateTimePicker
                                            value={props.dateOfBirth}
                                            onChange={(event, date) => { 
																							if (props.setDateOfBirth !== undefined && date !== undefined) {
																								props.setDateOfBirth(date)
																								addBirthDate(date);
																							}
                                            }}
                                        />
                                    </SafeAreaView>
                    ) : (null)}
				</TouchableOpacity>
			)
			}
		</View>
	)
}

const styles = StyleSheet.create({
	TextInput: {
		// flex: 1,
		margin: 3,
		width: '70%'
	},
})

export default InfoComp;
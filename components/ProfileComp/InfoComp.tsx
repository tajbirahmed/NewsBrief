import { DB, FIREBASE_AUTH, FIREBASE_STORAGE } from '@/auth/FirebaseConfig';
import { TextInput } from '@react-native-material/core';
import { collection, query, where, getDocs, setDoc, doc, updateDoc } from "firebase/firestore";
import { User, Pencil, MailCheck, Phone, MapPin, Calendar, Navigation } from 'lucide-react-native';
import React, { useState } from 'react'
import { View, Text, useColorScheme, TouchableOpacity, StyleSheet, ActivityIndicator, Button, Linking } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import * as Location from 'expo-location';
import { Icon } from '@rneui/base';
import MapViewModal from './MapViewModal';
export interface PageProps {
    title: string,
    icon?: boolean,
    value?: string | null,
    phoneNumber?: string | undefined,
    setPhoneNumber?: (phoneNumber: string) => void,
    dateOfBirth?: Date | undefined,
    setDateOfBirth?: (dateOfBirth: Date) => void,
    defaultDateValue?: string,
    lat?: string, 
    setLat?: (lat : string) => void,
    lon?: string,
    setLon?: (lon : string) => void
}



const InfoComp = (props: PageProps) => {
    const colorScheme = useColorScheme();
    const colVal = colorScheme === 'dark' ? 'white' : 'black';
    const bgVal = colorScheme === 'dark' ? 'black' : 'white';
    const [textInput, setTextInput] = useState<boolean>(false);
    const [phone, setPhone] = useState('+880')
    const [isValidPhone, setIsValidPhone] = useState<boolean>(true);
    const [locationLoading, setLocationLoading] = useState(false); 
    const [showLocDialog, setshowLocDialog] = useState<boolean>(false);
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
    const addBirthDate = async (date: Date) => {
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
    const handleCurrentLocation = async () => { 
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            alert('Please allow access!')
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        if (props.setLat && props.setLon) {
            props.setLat(location.coords.latitude.toString());
            props.setLon(location.coords.longitude.toString());
        }
        const user = FIREBASE_AUTH.currentUser;
        if (user?.email) {
            const docRef = await updateDoc(doc(DB, 'User', user.email.toLowerCase()), {
                latitude: location.coords.latitude.toString(), 
                longtitude: location.coords.longitude.toString(),
            })
        }
        setTextInput(false);
    }
        
    return (
        <>
            {showLocDialog && props.lat && props.lon && <MapViewModal
                show={showLocDialog}
                setShow={setshowLocDialog}
                lat={props.lat}
                lon={ props.lon}
                                />
            }
        <View style={{
            width: '100%', marginHorizontal: 10, marginTop: 8, paddingLeft: 10, paddingRight: 20, display: 'flex',
            flexDirection: 'row', justifyContent: 'space-between', marginVertical: 3,
            height: 55, alignItems: 'center', borderRadius: 15, borderColor: colVal,
            backgroundColor: colorScheme === 'dark' ? '#9c568e' : 'aliceblue'
        }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 13 }}>
                {props.title === 'Username' ? (
                    <User size={16} color={colVal} />
                ) : props.title === 'Email' ? (
                    <MailCheck size={16} color={colVal} style={{ paddingRight: 12 }} />
                ) : props.title === 'Phone' ? (
                    <Phone size={16} color={colVal} style={{ paddingRight: 12 }} />
                ) : props.title === 'Location' ? (
                    <MapPin size={16} color={colVal} style={{ paddingRight: 12 }} />
                ) : props.title === 'Date of Birth' ? 
                    <Icon name='edit-calendar' type='material' size={16} color={colVal}/>
                : (null)}
                <Text style={{ color: colVal, fontWeight: '600', fontSize: 16, paddingLeft: 5, }}>
                    {props.title}
                </Text>
            </View>
            {props.title !== 'Date of Birth' && props.value || props.title === 'Date of Birth' && props.value !== props.defaultDateValue ? (
                <Text style={{ color: colVal, fontWeight: '600', fontSize: 16 }}>
                    {props.value}
                </Text>
            ) : props.title === 'Location' && props.lat && props.lon ? (
                    <View style={{display:'flex', alignSelf: 'center', flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <TouchableOpacity style={[styles.loginBtn, {paddingRight: 2,}]}
                            onPress={() => {
                                const { lat, lon } = props;
                                if (lat && lon) {
                                    const browser_url =
                                        "https://www.google.com/maps?q=loc:" +
                                        lat +
                                        "," +
                                        lon;
                                    Linking.openURL(browser_url);
                                }
                            }}>
                            <Text style={{ color: 'white', fontWeight: '500' }}>Open in Browser</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.loginBtn, {marginLeft: 10,}]}
                            onPress={() => {
                                setshowLocDialog(!showLocDialog);
                            }}>
                                <Text style={{ color: 'white', fontWeight: '500', alignItems: 'center' }}>View in  { "\n " } App</Text>
                        </TouchableOpacity>
                    </View>
            ):(
                <TouchableOpacity onPress={() => {
                    setTextInput(true);
                    if (props.title === 'Location') { 
                        handleCurrentLocation();
                    }        
                }} style={{}}>
                    {!textInput ? (
                        props.title === 'Date of Birth' ? <Calendar size={16} color={colorScheme === 'dark' ? 'white' : 'black'} /> :
                            props.title === 'Location' ? (
                                <Navigation size={16} color={colorScheme === 'dark' ? 'white' : 'black'} />
                            ) :
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
                                display="spinner"
                            />
                        </SafeAreaView>
                    ) : (props.title === 'Location' ? (
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black', fontSize: 11}}>Getting current location</Text>                
                            <ActivityIndicator size="large" color={colorScheme === 'dark' ? 'white' : 'black'}/>
                        </View>
                        
                    ): (null))}
                </TouchableOpacity>
            )
            }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    TextInput: {
        // flex: 1,
        margin: 3,
        width: '70%'
    },
    loginBtn: {
        width: "34%",
        borderRadius: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "darkturquoise",
        alignSelf: 'center',
        fontWeight: '600',
    }
})

export default InfoComp;
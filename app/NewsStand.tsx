import { DB, FIREBASE_AUTH } from '@/auth/FirebaseConfig';
import { createThreeButtonAlert } from '@/utils/createThreeButtonAlert';
import { pickCameraAsync, pickImageAsync } from '@/utils/pickImageAsync';
import { User, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, useColorScheme, ScrollView } from 'react-native'
import * as ImagePicker from 'expo-image-picker';

import { Image } from 'expo-image';
import { ScreenHeight } from '@rneui/base';
import InfoComp from '@/components/ProfileComp/InfoComp';
import { doc, getDoc, Timestamp } from 'firebase/firestore';
import getMonthName from '@/utils/getMonthName';

// 1. Header title is not yet configured
// verdict: not completed
// 2. work on the colors

const NewsStand = () => {
    const colorScheme = useColorScheme();
    const initialDate = new Date();
    const colorVal = colorScheme === 'dark' ? 'white' : 'black';
    const bgVal = colorScheme === 'dark' ? 'black' : 'white'; 
    const [user, setUser] = useState<User | null>(null);
    const [createAccount, setCreateAccount] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>(undefined);
    const [dateOfBirth, setDateOfBirth] = useState<Date>(initialDate);
    useEffect(() => {
        const user = FIREBASE_AUTH.currentUser;
        setUser(user);
        console.log(user);
        
        if (user?.email) { 
            const docRef = doc(DB, "User", user.email); 
            getDoc(docRef)
                .then((e) => { 
                    if (e.exists()) { 
                        if (isValidBangladeshPhoneNumber(e.data().phoneNumber)) { 
                            setPhoneNumber(e.data().phoneNumber);
                        }
                        if (e.data().dateOfBirth) {
                            const firebaseTimestamp: Timestamp = e.data().dateOfBirth;
                            const date: Date = firebaseTimestamp.toDate();
                            setDateOfBirth(date);
                        }
                    }
                })
        }
    }, []);
    function isValidBangladeshPhoneNumber(input: string): boolean {
        const pattern = /^\+880\d{10}$/;
        return pattern.test(input);
    }
    
    return (
        <ScrollView style={[styles.container, {backgroundColor: bgVal}]}> 
            <View style={{
                backgroundColor: '#a4c8e4', height: ScreenHeight / 4 + 70, display: 'flex',
                alignItems: 'center', justifyContent: 'flex-end', paddingTop: 100, zIndex: -1, 
                width: '100%', alignSelf: 'center', borderBottomLeftRadius: 50, borderBottomRightRadius: 50, 
            }}>
                {/* something needs be done here.... */}
            </View>
            <Image
                source={user?.photoURL}
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                    borderColor: 'gray', 
                    borderWidth: 0.7, 
                    alignSelf: 'center',
                    position: 'absolute', 
                    top: 180, 
                    zIndex: 100,
                }}
            />
            <View style={{
                backgroundColor: bgVal, display: 'flex',
                paddingHorizontal: 20, paddingTop: 10, zIndex: -1, marginTop: 95, 
                width: '100%', borderRadius: 30, 
            }}>
                <Text style={{ color: colorVal, fontSize: 20, fontWeight: 'bold', paddingBottom: 8}}>
                    Account Informations
                </Text>
                <View style={{}}>
                    <InfoComp 
                        title='Username'
                        value={user?.displayName}
                    />
                    <InfoComp
                        title='Email'
                        value={user?.email}
                    />
                    <InfoComp
                        title='Phone'
                        value={phoneNumber}
                        phoneNumber={phoneNumber}
                        setPhoneNumber={setPhoneNumber}
                    />
                    <InfoComp
                        title='Location'
                    />
                    <InfoComp
                        title='Date of Birth'
                        value={"" + dateOfBirth.getDate() + " " + getMonthName(dateOfBirth.getMonth()) + " " + dateOfBirth.getFullYear()}
                        defaultDateValue={"" + initialDate.getDate() + " " + getMonthName(initialDate.getMonth()) + " " + initialDate.getFullYear()}
                        dateOfBirth={dateOfBirth}
                        setDateOfBirth={setDateOfBirth}
                    />
                    
                </View>
            </View>
        </ScrollView>
    )
}

export default NewsStand; 

const styles = StyleSheet.create({
    container: {
        overflow: 'scroll',
    }, 
    
})
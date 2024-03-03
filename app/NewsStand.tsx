import { FIREBASE_AUTH } from '@/auth/FirebaseConfig';
import { createThreeButtonAlert } from '@/utils/createThreeButtonAlert';
import { pickCameraAsync, pickImageAsync } from '@/utils/pickImageAsync';
import { User, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, useColorScheme, ScrollView } from 'react-native'
import * as ImagePicker from 'expo-image-picker';

import { Image } from 'expo-image';


// 1. Header title is not yet configured
// verdict: not completed

const NewsStand = () => {
    const colorScheme = useColorScheme();
    const colorVal = colorScheme === 'dark' ? 'white' : 'black';
    const bgVal = colorScheme === 'dark' ? 'black' : 'white'; 
    const [user, setUser] = useState<User | null>(null);
    const [createAccount, setCreateAccount] = useState(true);

    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            setUser(user);
        })
    }, [])
    
    return (
        <View style={[styles.container, {backgroundColor: bgVal}]}> 
            
        </View>
    )
}

export default NewsStand; 

const styles = StyleSheet.create({
    container: {
        overflow: 'scroll', 
    }, 
    subheading_text: {
        fontSize: 10,
        textAlign: 'center',
        fontWeight: '500',
        paddingTop: 3,
        paddingBottom: 2,
    }
})
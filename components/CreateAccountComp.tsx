import { DB, FIREBASE_AUTH } from '@/auth/FirebaseConfig';
import { signIn } from '@/auth/signIn';
import { signUp } from '@/auth/signUp';
import { signout } from '@/auth/signou';
import { createThreeButtonAlert } from '@/utils/createThreeButtonAlert';
import { pickCameraAsync, pickImageAsync } from '@/utils/pickImageAsync';
import { Icon } from '@rneui/base';
import { User, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, useColorScheme, ScrollView } from 'react-native'
import * as ImagePicker from 'expo-image-picker';


import { Image } from 'expo-image';
import { TextInput } from '@react-native-material/core';
const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


interface PageProps { 
    createAccount: boolean, 
    setCreateAccount: (createAccount: boolean) => void, 
    email: string, 
    setEmail: (email: string) => void,
    password: string,
    setPassword: (email: string) => void,
}

const CreateAccountComp = ({ createAccount, setCreateAccount, email, setEmail, password, setPassword} : PageProps) => {
    const colorScheme = useColorScheme();
    const colorVal = colorScheme === 'dark' ? 'white' : 'black';
    const bgVal = colorScheme === 'dark' ? 'black' : 'white';
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [signOutLoading, setSignOutLoading] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [colorConfirrmPassword, setColorConfirrmPassword] = useState(false);
    const [signUpLoading, setSignUpLoading] = useState(false);
    const [verificationLinkStatus, setVerificationLinkStatus] = useState(false);
    const [currentNames, setCurrentNames] = useState<string[]>([]);
    const [gotUniqueName, setGotUniqueName] = useState(false);
    const [image, setImage] = useState<any>(null);
    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            setUser(user);
        })
    }, [])
    useEffect(() => {
        const userRef = collection(DB, 'users');
        getDocs(userRef)
            .then((snapshot) => {
                snapshot.docs.forEach((doc) => {
                    setCurrentNames((prev) => [doc.data().user_name, ...prev]);
                })
            })
            .catch(err => {
                console.log(err.message);

            })
        console.log(currentNames);

    }, [createAccount]);
    
    useEffect(() => {
        function sleep(ms: number): Promise<void> {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        const wait = async () => {
            await sleep(1000)
        }
        wait();
        if (verificationLinkStatus)
            setCreateAccount(false);
        console.log(user);
        
    }, [verificationLinkStatus]); 

    return (
        <ScrollView style={{ width: '100%', marginTop: 50 }}>

            <View style={{
                width: 200, alignSelf: 'center',
                borderColor: colorScheme === 'dark' ? 'white' : 'black', borderWidth: 0.5,
                height: 200, marginBottom: 10, borderRadius: 100,
            }}>
                {image ? (
                        <Image
                            style={styles.image_style}
                            source={{
                                uri: image.assets?.at(0)?.uri,
                            }}
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                        />) : (
                        <Image
                            style={styles.image_style}
                            source={require('../assets/images/man-user-circle-icon.svg')}
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={500}
                        />
                    )
                }
            </View>
                <Text style={{
                    color: colorScheme === 'dark' ? 'white' : 'black', marginLeft: 40,
                    fontSize: 15, fontWeight: '500', marginBottom: 5,
                }}>
                    Select Image From:
                </Text>
            <View style={styles.button_container}>
                <TouchableOpacity onPress={async () => {
                    try {
                        const result = await pickCameraAsync();
                        setImage(result);
                    } catch (error) {
                        console.log(error);
                    }
                }}
                    style={styles.button}>
                    <Text style={{ alignSelf: 'center', color: colorScheme === 'dark' ? 'white' : 'black' }}>Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={async () => {
                    try {
                        const result = await pickImageAsync();
                        setImage(result);
                    } catch (error) {
                        console.log(error);
                    }
                }}
                    style={styles.button}>
                    <Text style={{ alignSelf: 'center', color: colorScheme === 'dark' ? 'white' : 'black' }}>Local Files</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.inputView,]}>
                <TextInput
                    style={[styles.TextInput]}
                    color={'secondary'}
                    label={"Username"}
                    variant="outlined"
                    value={ userName}
                    onChangeText={(user_name) => {
                        setUserName(user_name)
                        if (user_name.length > 2 && !currentNames.includes(user_name)) setGotUniqueName(true);
                        else setGotUniqueName(false);
                    }}
                    inputContainerStyle={{ backgroundColor: colorScheme === 'dark' ? 'black' : 'white' }}
                    inputStyle={{ color: colorScheme === 'dark' ? 'white' : 'black', fontFamily: 'monospace' }}
                />
            </View>
            {gotUniqueName ? (<Text style={{ color: 'green', paddingLeft: 30, marginBottom: 15, fontWeight: '800' }}>User name is valid</Text>) :
                userName.length > 2 && !gotUniqueName ? (<Text style={{ color: 'red', paddingLeft: 30, marginBottom: 15, fontWeight: '800' }}>User name is taken</Text>) :
                    userName.length && userName.length <= 2 ? (<Text style={{ color: 'gray', paddingLeft: 30, marginBottom: 15, fontWeight: '800' }}>at least 3 characters</Text>) :
                        (null)
            }
            <View style={styles.inputView}>
                <TextInput
                    style={[styles.TextInput]}
                    color={'secondary'}
                    label={"Email"}
                    variant="outlined"
                    onChangeText={(email) => setEmail(email)}
                    inputContainerStyle={{ backgroundColor: colorScheme === 'dark' ? 'black' : 'white' }}
                    inputStyle={{ color: colorScheme === 'dark' ? 'white' : 'black', fontFamily: 'monospace' }}
                    value={email}
                    keyboardType="email-address"
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={[styles.TextInput]}
                    color={'secondary'}
                    label={"Password"}
                    variant="outlined"
                    onChangeText={(password) => { setPassword(password); setColorConfirrmPassword(false) }}
                    inputContainerStyle={{ backgroundColor: colorScheme === 'dark' ? 'black' : 'white', }}
                    inputStyle={{ color: colorScheme === 'dark' ? 'white' : 'black', fontFamily: 'monospace' }}
                    value={password}
                    secureTextEntry={true}
                />
            </View>
            {/* {borderColor: colorConfirrmPassword && password !== passwordConfirm ? 'red' : '#FFC0CB', 
                        borderWidth: 2, borderRadius: 25, } 
                        */}
            <View style={[styles.inputView,]}>
                <TextInput
                    style={[styles.TextInput]}
                    color={'secondary'}
                    label={"Confirm"}
                    variant="outlined"
                    onChangeText={(password) => { setPasswordConfirm(password); setColorConfirrmPassword(true); }}
                    inputContainerStyle={{ backgroundColor: colorScheme === 'dark' ? 'black' : 'white', }}
                    inputStyle={{ color: colorScheme === 'dark' ? 'white' : 'black', fontFamily: 'monospace' }}
                    value={passwordConfirm}
                    secureTextEntry={true}
                />
            </View>
            {password.length && colorConfirrmPassword && password === passwordConfirm ? (<Text style={{ color: 'green', paddingLeft: 30, marginBottom: 15, fontWeight: '800' }}>Ok, go ahead, reqest a verification mail.</Text>)
                : passwordConfirm.length ? (<Text style={{ color: 'red', paddingLeft: 30, marginBottom: 15, fontWeight: '800' }}>Passwords did not match!</Text>) : (null)
            }
            {signUpLoading ? (
                <TouchableOpacity style={[styles.loginBtn, {display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}]}>
                    
                    <ActivityIndicator size={ 24 } color={colorScheme === 'dark' ? 'white' : 'black'} />
                    <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black', marginLeft: 3}}>Hold on!</Text>
                    
                </TouchableOpacity>) :
                !verificationLinkStatus ? (
                    <>
                        <TouchableOpacity style={styles.loginBtn}
                            onPress={() => {
                                
                                if (!gotUniqueName)
                                    alert("Please do select an unique name")
                                if (password !== passwordConfirm) {
                                    alert("Please cofirm your password.")
                                }
                                if (image === null) {
                                    alert("Please select an image.")
                                }
                                if (gotUniqueName && password == passwordConfirm && image !== null)
                                    signUp({
                                        signUpLoading, setSignUpLoading,
                                        verificationLinkStatus, setVerificationLinkStatus,
                                        email, password,
                                        userName,
                                        profilePhoto: image.assets?.at(0)?.uri
                                    })
                            }}>
                            <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black', fontWeight: '500', }}>Send Verification Link</Text>
                        </TouchableOpacity>
                        <Text style={{ paddingTop: 10, color: colorScheme === 'dark' ? 'white' : 'black', alignSelf: 'center' }}>or</Text>

                    </>) : (
                        <TouchableOpacity style={[styles.loginBtn, { display: 'flex', backgroundColor: 'green',flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }]}>

                            {/* <ActivityIndicator size={24} color={colorScheme === 'dark' ? 'white' : 'black'} /> */}
                            <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black', marginLeft: 3 }}>Check your email</Text>
                            

                        </TouchableOpacity>
                )}
            <View style={{height: 200,}}>
                <TouchableOpacity style={[styles.loginBtn, { marginTop: 5, }]}
                    onPress={() => setCreateAccount(false)}>
                    <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black', fontWeight: '500' }}>Go Back</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginHorizontal: 20,
    },
    image_style: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    button_container: {
        width: '80%',
        height: '5%',
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }, 
    button: {
        height: '100%',
        marginRight: 10,
        justifyContent: 'center',
        borderRadius: 20,
        borderColor: 'darkturquoise',
        borderWidth: 0.2,
        flex: 1,
        backgroundColor: 'darkturquoise',
    },
    inputView: {
        width: "90%",
        // height: 45,
        // marginBottom: 20,
        alignSelf: 'center',
        borderColor: 'gray'
    },
    TextInput: {
        // flex: 1,
        margin: 3,
    },
    forgot_button: {
        height: 30,
        alignSelf: 'center',
        marginTop: 15,
        fontWeight: '400'
    },
    input: {
        height: '17%',
        backgroundColor: 'white',
        padding: 4,
        margin: 3,
        borderRadius: 10,
    },
    loginBtn: {
        width: "60%",
        borderRadius: 40,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "darkturquoise",
        alignSelf: 'center',
        fontWeight: '600',
    },
})


export default CreateAccountComp
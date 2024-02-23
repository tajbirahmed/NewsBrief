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

import Modal from "react-native-modal";
import { Image } from 'expo-image';
import { TextInput } from '@react-native-material/core';
interface AuthScreenProps {
    showAuthScreen: boolean,
    setShowAuthScreen: (showAuthScreen: boolean) => void,
}
const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

// 2. forgot password 
// 3. sign in using google

const AuthScreen = ({ showAuthScreen, setShowAuthScreen }: AuthScreenProps) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [signOutLoading, setSignOutLoading] = useState(false);
    const [createAccount, setCreateAccount] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [colorConfirrmPassword, setColorConfirrmPassword] = useState(false);
    const [signUpLoading, setSignUpLoading] = useState(false); 
    const [verificationLinkStatus, setVerificationLinkStatus] = useState(false);
    const [currentNames, setCurrentNames] = useState<string[]>([]); 
    const [gotUniqueName, setGotUniqueName] = useState(false);
    const colorScheme = useColorScheme(); 
    const [image, setImage] = useState<any>(null)
    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            setUser(user);
            console.log(user?.email);

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
    
    return (
        <View style={[styles.container, {}]}>
            <Modal isVisible={showAuthScreen} style={[styles.modal_style, { backgroundColor: colorScheme === 'dark' ? 'black' :'white'}]}>

                <View style={{ alignSelf: 'flex-end', }}>
                    <TouchableOpacity onPress={() => { setShowAuthScreen(false); }}>
                        <Icon name="cancel" type='material' color={colorScheme === 'dark' ? 'white' : 'black'} size={18} />
                    </TouchableOpacity>
                </View>
                {createAccount ? (
                    <ScrollView style={{ marginTop: 50}}>
                        
                        <View style={{
                            width: 200, alignSelf: 'center',
                            borderColor: colorScheme === 'dark' ? 'white' : 'black', borderWidth: 0.5,
                            height: 200, marginBottom: 12, 
                            borderRadius: 100, 
                        }}>
                            {image ? (<Image
                                style={{
                                    width: 200, 
                                    height: 200, 
                                    borderRadius: 100,
                                }}
                                source={{
                                    uri: image.assets?.at(0)?.uri,
                                }}
                                placeholder={blurhash}
                                contentFit="cover"
                                transition={1000}
                            />) : (<Image
                                style={{
                                    width: 200,
                                    height: 200,
                                    borderRadius: 100,
                                    }}
                                    source={require('../assets/images/man-user-circle-icon.svg')}
                                placeholder={blurhash}
                                contentFit="cover"
                                transition={1000}
                            />)
                            }
                        </View>
                        <Text style={{
                            color: colorScheme === 'dark' ? 'white' : 'black', marginLeft: 40,
                            fontSize: 15, fontWeight: '500', marginBottom: 5,
                        }}>Select Image From: </Text>
                        <View style={{
                            width: '80%', height: '5%',
                            marginBottom: 20, marginLeft: 20, 
                            marginRight: 20, 
                            alignSelf: 'center', display: 'flex', 
                            flexDirection: 'row', justifyContent: 'space-between', 
                            alignItems: 'center'
                        }}>
                            <TouchableOpacity onPress={async () => { 
                                try {
                                    const result = await pickCameraAsync(); 
                                    setImage(result);
                                    console.log(result);
                                } catch (error) {
                                    
                                }
                            }}
                                style={{ height: '100%', marginRight: 10, justifyContent: 'center', borderRadius: 20, flex: 1, borderColor: 'darkturquoise', borderWidth: 0.2, backgroundColor: 'darkturquoise', }}>
                                <Text style={{alignSelf: 'center',color: colorScheme === 'dark' ? 'white' :'black'}}>Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={async () => { 
                                try {
                                    const result = await pickImageAsync(); 
                                    setImage(result);
                                    
                                    
                                } catch (error) {
                                    
                                }
                            }}
                                style={{ height: '100%', marginLeft: 10, justifyContent: 'center', borderRadius: 20, flex: 1, borderColor: 'darkturquoise', borderWidth: 0.2, backgroundColor: 'darkturquoise', }}>
                                <Text style={{alignSelf: 'center', color: colorScheme === 'dark' ? 'white' : 'black' }}>Local Files</Text>
                            </TouchableOpacity>
                        </View>
                            <View style={[styles.inputView, ]}>
                            <TextInput
                                style={[styles.TextInput]}
                                color={'secondary'}
                                label={userName.length ? "" : "Username"}
                                variant="outlined"
                                onChangeText={(user_name) => {
                                    setUserName(user_name)
                                    if (user_name.length > 2 && currentNames.includes(userName)) setGotUniqueName(true);
                                    else setGotUniqueName(false);
                                }}
                            />
                        </View>
                        {gotUniqueName ? (<Text style={{ color: 'green', paddingLeft: 30, marginBottom: 15, fontWeight: '800'}}>User name is valid</Text>) :
                            userName.length > 2 && !gotUniqueName ? (<Text style={{ color: 'red', paddingLeft: 30, marginBottom: 15, fontWeight: '800'}}>User name is taken</Text>) :
                                userName.length && userName.length <= 2 ? (<Text style={{ color: 'gray', paddingLeft: 30, marginBottom: 15, fontWeight: '800'}}>at least 3 characters</Text>) :
                                    (null)
                        }
                        <View style={styles.inputView}>
                            <TextInput
                                style={[styles.TextInput]}
                                color={'secondary'}
                                label={email.length ? "" : "Email"}
                                variant="outlined"
                                onChangeText={(email) => setEmail(email)}
                            />
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={[styles.TextInput]}
                                color={'secondary'}
                                label={password.length? "" :"Password"}
                                variant="outlined"
                                secureTextEntry={true}
                                onChangeText={(password) => { setPassword(password); setColorConfirrmPassword(false) }}
                            />
                        </View>
                        {/* {borderColor: colorConfirrmPassword && password !== passwordConfirm ? 'red' : '#FFC0CB', 
                        borderWidth: 2, borderRadius: 25, } 
                        */}
                        <View style={[styles.inputView, ]}>
                            <TextInput
                                style={[styles.TextInput]}
                                color={'secondary'}
                                label={passwordConfirm.length ? "" : "Confirm"}
                                variant="outlined"
                                secureTextEntry={true}
                                onChangeText={(password) => { setPasswordConfirm(password); setColorConfirrmPassword(true); }}
                            />
                        </View>
                        {password.length && colorConfirrmPassword && password === passwordConfirm ? (<Text style={{ color: 'green', paddingLeft: 30, marginBottom: 15, fontWeight: '800' }}>Ok, go ahead, reqest a verification mail.</Text>) 
                            : passwordConfirm.length ? (<Text style={{ color: 'red', paddingLeft: 30, marginBottom: 15, fontWeight: '800' }}>Match Passwords</Text>) : (null)
                        }
                        {signUpLoading ? (<ActivityIndicator size="large" color='white' />) :
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
                                <Text style={{ color: 'white', fontWeight: '500' }}>Send Verification Link</Text>
                                    </TouchableOpacity>
                                    <Text style={{ paddingTop: 10, color: colorScheme === 'dark' ? 'white' : 'black', alignSelf: 'center' }}>or</Text>        
                                    
                                </>) : (
                                    <TouchableOpacity style={[styles.loginBtn, { backgroundColor: 'green', width: '90%',  }]}>
                                        <Text style={{ color: 'white', marginBottom: 5, fontWeight: '500' }}>
                                            Verification Email Sent! <Icon name='check' type='font-awesome' color='white' />
                                        </Text>
                                    </TouchableOpacity>
                            )}
                        <TouchableOpacity style={[styles.loginBtn, {marginTop: 10, }]}
                            onPress={() => setCreateAccount(false)}>
                            <Text style={{ color: 'white', overflow: 'visible', fontWeight: '500' }}>Go Back</Text>
                        </TouchableOpacity>
                    </ScrollView>) : (<>{user ? (<>
                        
                        <Text style={{ color: 'white', alignSelf: 'center', fontWeight: '500' }}>logged in as {user?.email}</Text>

                    {signOutLoading ? (<ActivityIndicator size="large" color='white' />) : (
                            <TouchableOpacity style={styles.loginBtn}
                                onPress={() => { signout({signOutLoading, setSignOutLoading})} }>
                            <Text style={{ color: 'white' }}>Log Out</Text>
                        </TouchableOpacity>
                    )}

                </>) : (
                    <View style={{}} >
                        <View style={{width: '100%', height: 'auto', marginTop: 10,}}>
                            <Image
                                        style={{ width: '100%', height: 120, borderRadius: 10, }}
                                        source={require('../assets/images/logo.png')}
                            />
                                    <Text style={{
                                        fontSize: 50, overflow: 'visible',
                                        fontWeight: 'bold', fontFamily: 'monospace', 
                                        alignSelf: 'center', 
                                        marginBottom: 25,
                                        marginTop: 10,
                                        color: colorScheme === 'dark' ? 'white' : 'black',
                                    }}>Log In</Text>        
                        </View>
                        <KeyboardAvoidingView behavior='position'>
                            <View style={[styles.inputView]}>
                                <TextInput
                                    style={[styles.TextInput]}       
                                    color={'secondary'}
                                    label="Email."
                                    variant="outlined"
                                    onChangeText={(email) => setEmail(email)}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={[styles.TextInput]}
                                    color={'secondary'}
                                    label="Password."
                                    variant="outlined"
                                    onChangeText={(password) => setPassword(password)}
                                />
                            </View>
                            <TouchableOpacity>
                                        <Text style={[styles.forgot_button, {color: colorScheme === 'dark' ? 'white' : 'black'}]}>Forgot Password?</Text>
                            </TouchableOpacity>
                            {loading ? <ActivityIndicator size="large" color='white' /> : (
                                <>
                                    <TouchableOpacity style={styles.loginBtn}
                                                onPress={() => {
                                                    signIn({
                                                        loading, setLoading,
                                                        showAuthScreen, setShowAuthScreen,
                                                        email, password
                                                    })
                                                }}>
                                        <Text style={{ color: 'white', fontWeight: '500' }}>Log in</Text>
                                    </TouchableOpacity>
                                    <Text style={{paddingTop: 10, color: colorScheme === 'dark' ? 'white' : 'black', alignSelf: 'center'}}>or</Text>        
                                    <TouchableOpacity style={styles.loginBtn} onPress={() => { setCreateAccount(true) }}>
                                                <Text style={{ color: 'white', fontWeight: '500' }}>Create an Account</Text>
                                    </TouchableOpacity>
                                </>
                            )}
                        </KeyboardAvoidingView>
                    </View>)}</>)}

            </Modal>
        </View>
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
    modal_style: {
        borderRadius: 30,
        display: 'flex', 
        justifyContent: 'flex-start', 
        
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

export default AuthScreen
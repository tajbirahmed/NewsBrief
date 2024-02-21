import { DB, FIREBASE_AUTH } from '@/auth/FirebaseConfig';
import { signIn } from '@/auth/signIn';
import { signUp } from '@/auth/signUp';
import { signout } from '@/auth/signou';
import { Icon } from '@rneui/base';
import { User, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, useColorScheme } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input';
import Modal from "react-native-modal";

interface AuthScreenProps {
    showAuthScreen: boolean,
    setShowAuthScreen: (showAuthScreen: boolean) => void,
}

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
    }, []);
    return (
        <View style={[styles.container, {}]}>
            <Modal isVisible={showAuthScreen} style={[styles.modal_style, { backgroundColor: colorScheme === 'dark' ? 'black' :'white'}]}>

                <View style={{ alignSelf: 'flex-end', }}>
                    <TouchableOpacity onPress={() => { setShowAuthScreen(false); }}>
                        <Icon name="cancel" type='material' color={colorScheme === 'dark' ? 'white' : 'black'} size={18} />
                    </TouchableOpacity>
                </View>
                {createAccount ? (
                    <View style={{ paddingTop: 220, }}>
                        <View style={[styles.inputView, { marginBottom: userName.length ? 2 : 20, borderColor: gotUniqueName ? 'green' : userName.length ? 'red' : '#FFC0CB', borderWidth: 2, borderRadius: 30, }]}>
                            <TextInput
                                style={[styles.TextInput, ]}
                                placeholder="unique username with 3 or more characters"
                                placeholderTextColor="#003f5c"
                                onChangeText={(user_name) => {
                                    setUserName(user_name)
                                    if (user_name.length > 2 && userName.includes(userName)) setGotUniqueName(true);
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
                                style={styles.TextInput}
                                placeholder="Email."
                                placeholderTextColor="#003f5c"
                                onChangeText={(email) => setEmail(email)}
                            />
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Password."
                                placeholderTextColor="#003f5c"
                                secureTextEntry={true}
                                onChangeText={(password) => { setPassword(password); setColorConfirrmPassword(false) }}
                            />
                        </View>
                        <View style={[styles.inputView, { borderColor: colorConfirrmPassword && password !== passwordConfirm ? 'red' : '#FFC0CB', borderWidth: 2, borderRadius: 25, }]}>
                            <TextInput
                                style={[styles.TextInput, {}]}
                                placeholder="Confirm Password."
                                placeholderTextColor="#003f5c"
                                secureTextEntry={true}
                                onChangeText={(password) => { setPasswordConfirm(password); setColorConfirrmPassword(true); }}
                            />
                        </View>
                        {signUpLoading ? (<ActivityIndicator size="large" color='white' />) :
                            !verificationLinkStatus ? (
                                <>
                                <TouchableOpacity style={styles.loginBtn}
                                    onPress={() => { signUp({ signUpLoading, setSignUpLoading, verificationLinkStatus, setVerificationLinkStatus, email, password, userName }) }}>
                                <Text style={{ color: 'white' }}>Send Verification Link</Text>
                                    </TouchableOpacity>
                                    <Text style={{ paddingTop: 10, color: colorScheme === 'dark' ? 'white' : 'black', alignSelf: 'center' }}>or</Text>        
                                    <TouchableOpacity style={styles.loginBtn}
                                        onPress={() => setCreateAccount(false) }>
                                        <Text style={{ color: 'white' }}>Go Back</Text>
                                    </TouchableOpacity>
                                </>) : (
                                    <TouchableOpacity style={[styles.loginBtn, { backgroundColor: 'green', width: '90%',  }]}>
                                        <Text style={{ color: 'white', marginBottom: 5 }}>
                                            Verification Email Sent! <Icon name='check' type='font-awesome' color='white' />
                                        </Text>
                                    </TouchableOpacity>
                            )}
                    </View>) : (<>{user ? (<>
                        
                    <Text style={{ color: 'white', alignSelf: 'center' }}>logged in as {user?.email}</Text>

                    {signOutLoading ? (<ActivityIndicator size="large" color='white' />) : (
                            <TouchableOpacity style={styles.loginBtn}
                                onPress={() => { signout({signOutLoading, setSignOutLoading})} }>
                            <Text style={{ color: 'white' }}>Log Out</Text>
                        </TouchableOpacity>
                    )}

                </>) : (
                    <View style={{ paddingTop: 220, }} >
                        <KeyboardAvoidingView behavior='position'>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Email."
                                    placeholderTextColor="#003f5c"
                                    onChangeText={(email) => setEmail(email)}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Password."
                                    placeholderTextColor="#003f5c"
                                    secureTextEntry={true}
                                    onChangeText={(password) => setPassword(password)}
                                />
                            </View>
                            <TouchableOpacity>
                                <Text style={styles.forgot_button}>Forgot Password?</Text>
                            </TouchableOpacity>
                            {loading ? <ActivityIndicator size="large" color='white' /> : (
                                <>
                                    <TouchableOpacity style={styles.loginBtn}
                                                onPress={() => { signIn({ loading, setLoading, showAuthScreen, setShowAuthScreen, email, password })}}>
                                        <Text style={{ color: 'white' }}>Log in</Text>
                                    </TouchableOpacity>
                                    <Text style={{paddingTop: 10, color: colorScheme === 'dark' ? 'white' : 'black', alignSelf: 'center'}}>or</Text>        
                                    <TouchableOpacity style={styles.loginBtn} onPress={() => { setCreateAccount(true) }}>
                                        <Text style={{ color: 'white' }}>Create an Account</Text>
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
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginHorizontal: 20,
    },
    modal_style: {
        flex: 1,
        borderRadius: 30,
        display: 'flex', 
        justifyContent: 'flex-start', 
    },
    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "90%",
        height: 45,
        marginBottom: 20,
        alignSelf: 'center'
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 3,
        marginLeft: 20,
    },
    forgot_button: {
        height: 30,
        alignSelf: 'center',
        color: 'white',
    },
    input: {
        height: '17%',
        backgroundColor: 'white',
        padding: 4,
        margin: 3,
        borderRadius: 10,
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#FF1493",
        alignSelf: 'center',
    },
})

export default AuthScreen
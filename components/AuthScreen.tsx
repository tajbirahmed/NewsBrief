import { FIREBASE_AUTH } from '@/auth/FirebaseConfig';
import { signIn } from '@/auth/signIn';
import { signUp } from '@/auth/signUp';
import { signout } from '@/auth/signou';
import { Icon } from '@rneui/base';
import { User, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Button, TextInput, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import Modal from "react-native-modal";

interface AuthScreenProps {
    showAuthScreen: boolean,
    setShowAuthScreen: (showAuthScreen: boolean) => void,
}

// 2. forgot password 
// 3. sign in using google

const AuthScreen = ({ showAuthScreen, setShowAuthScreen }: AuthScreenProps) => {
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
    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            setUser(user);
            console.log(user?.email);

        })
    }, [])
    
    return (
        <View style={styles.container}>
            <Modal isVisible={showAuthScreen}>

                <View style={{ alignSelf: 'flex-end', }}>
                    <TouchableOpacity onPress={() => { setShowAuthScreen(false) }}>
                        <Icon name="cancel" type='material' color="white" />
                    </TouchableOpacity>
                </View>
                {createAccount ? (<>
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
                    <View style={[styles.inputView, { borderColor: 'red', borderWidth: colorConfirrmPassword && password !== passwordConfirm ? 2 : 0, borderRadius: 25, }]}>
                        <TextInput
                            style={[styles.TextInput, {}]}
                            placeholder="Confirm Password."
                            placeholderTextColor="#003f5c"
                            secureTextEntry={true}
                            onChangeText={(password) => { setPasswordConfirm(password); setColorConfirrmPassword(true); }}
                        />
                    </View>
                    {signUpLoading ? (<ActivityIndicator size="large" color='white' />) :
                        !verificationLinkStatus ? (<TouchableOpacity style={styles.loginBtn}
                            onPress={() => { signUp({ signUpLoading, setSignUpLoading, verificationLinkStatus, setVerificationLinkStatus, email, password }) }}>
                            <Text style={{ color: 'white' }}>Send Verification Link</Text>
                        </TouchableOpacity>) : (
                                <TouchableOpacity style={[styles.loginBtn, { backgroundColor: 'green', width: '90%',  }]}>
                                    <Text style={{ color: 'white', marginBottom: 5 }}>
                                        Verification Email Sent! <Icon name='check' type='font-awesome' color='white' />
                                    </Text>
                                </TouchableOpacity>
                        )}
                </>) : (<>{user ? (<>
                    <Text style={{ color: 'white', alignSelf: 'center' }}>logged in as {user?.email}</Text>

                    {signOutLoading ? (<ActivityIndicator size="large" color='white' />) : (
                            <TouchableOpacity style={styles.loginBtn}
                                onPress={() => { signout({signOutLoading, setSignOutLoading})} }>
                            <Text style={{ color: 'white' }}>Log Out</Text>
                        </TouchableOpacity>
                    )}

                </>) : (
                    <View>
                        <KeyboardAvoidingView behavior='padding'>
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
                                    <TouchableOpacity style={styles.loginBtn} onPress={() => { setCreateAccount(true) }}>
                                        <Text style={{ color: 'white' }}>Create Account</Text>
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginHorizontal: 20,
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
        padding: 10,
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
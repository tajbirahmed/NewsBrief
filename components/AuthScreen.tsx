import { FIREBASE_AUTH } from '@/auth/FirebaseConfig';
import { Icon } from '@rneui/base';
import { User, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Button, TextInput, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import Modal from "react-native-modal";
interface AuthScreenProps {
    showAuthScreen: boolean,
    setShowAuthScreen: (showAuthScreen: boolean) => void,
}

// 1. create acount  
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
    const [signUpLoading, setSignUpLoading] = useState(false)
    const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'https://newsbiref.firebaseapp.com',
        // This must be true.
        handleCodeInApp: true,
        
        dynamicLinkDomain: 'newsbrief.page.link'
    };
    useEffect(() => { 
        onAuthStateChanged(FIREBASE_AUTH, (user) => { 
            setUser(user);
            console.log(user?.email);
            
        })
    }, [])

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
            setShowAuthScreen(false);
        } catch (error: any) {
            console.log(error);
            alert('Check your emails');
        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setSignUpLoading(true); 
        try {
            const response = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
            await sendEmailVerification(response.user, actionCodeSettings); 
            if (response.user.emailVerified) { 
                signIn();
            }
        } catch (e: any) {
            alert('Internel Error!' + e.message);
        } finally { 
            setSignUpLoading(false); 
        }
    }

    const signout = async () => { 
        setSignOutLoading(true); 
        try {
            const response = await signOut(FIREBASE_AUTH);
             
        } catch (e: any) {
            alert('Error Occured Logging out');
        } finally { 
            setSignOutLoading(false);
        }
    }

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
                    <TouchableOpacity style={styles.loginBtn} onPress={() => { signUp() }}>
                        <Text style={{ color: 'white' }}>Send Verification Link</Text>
                    </TouchableOpacity>
                    </>) : (<>{user ? (<>
                    <Text style={{ color: 'white', alignSelf: 'center' }}>logged in as {user?.email}</Text>
                        
                        {signOutLoading ? (<ActivityIndicator size="large" color='white' />) : (
                    <TouchableOpacity style={styles.loginBtn} onPress={signout}>
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
                            <TouchableOpacity style={styles.loginBtn} onPress={signIn}>
                                <Text style={{ color: 'white' }}>Log in</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.loginBtn} onPress={() => { setCreateAccount(true)}}>
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
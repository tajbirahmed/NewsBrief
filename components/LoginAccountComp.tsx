import { DB, FIREBASE_AUTH } from '@/auth/FirebaseConfig';
import { signIn } from '@/auth/signIn';
import { User, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, useColorScheme, ScrollView } from 'react-native'
import * as ImagePicker from 'expo-image-picker';


import { TextInput } from '@react-native-material/core';
interface PageProps {
    createAccount: boolean,
    setCreateAccount: (createAccount: boolean) => void, 
    email: string,
    setEmail: (email: string) => void,
    password: string,
    setPassword: (email: string) => void,
}
const LoginAccountComp = ({ createAccount, setCreateAccount, email, setEmail, password, setPassword } : PageProps) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const colorScheme = useColorScheme();
    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            setUser(user);
        })
    }, [])


    return (
        <ScrollView style={{backgroundColor: colorScheme === 'dark' ? 'black' : 'white', paddingTop: 140 }} >
            <View style={{ width: '100%', height: 'auto', marginTop: 10, }}>
                <Text style={{
                    marginBottom: 25, marginTop: 10,
                    alignSelf: 'center', fontSize: 50, 
                    color: colorScheme === 'dark' ? 'white' : 'black',
                }}>
                    LOGO
                </Text>
                <Text style={{
                    fontSize: 50, overflow: 'visible',
                    fontWeight: 'bold', fontFamily: 'monospace',
                    alignSelf: 'center',
                    marginBottom: 25,
                    marginTop: 10,
                    color: colorScheme === 'dark' ? 'white' : 'black',
                }}>Log In</Text>
            </View>
            <KeyboardAvoidingView behavior='padding'>
                <View style={[styles.inputView]}>
                    <TextInput
                        style={[styles.TextInput]}
                        color={'secondary'}
                        label="Email"
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
                        style={[styles.TextInput, {}]}
                        color='secondary'
                        label={"Password"}
                        variant="outlined"
                        onChangeText={(password) => setPassword(password)}
                        inputContainerStyle={{ backgroundColor: colorScheme === 'dark' ? 'black' : 'white', }}
                        inputStyle={{ color: colorScheme === 'dark' ? 'white' : 'black', fontFamily: 'monospace' }}
                        value={password}
                        secureTextEntry={true}
                        
                    />
                </View>
                <TouchableOpacity>
                    <Text style={[styles.forgot_button, { color: colorScheme === 'dark' ? 'white' : 'black' }]}>Forgot Password?</Text>
                </TouchableOpacity>
                {loading ? <ActivityIndicator size="large" color='white' /> : (
                    <>
                        <TouchableOpacity style={styles.loginBtn}
                            onPress={() => {
                                signIn({
                                    loading,
                                    setLoading,
                                    email,
                                    password
                                })
                            }}>
                            <Text style={{ color: 'white', fontWeight: '500' }}>Log in</Text>
                        </TouchableOpacity>
                        <Text style={{ paddingTop: 10, color: colorScheme === 'dark' ? 'white' : 'black', alignSelf: 'center' }}>or</Text>
                        <TouchableOpacity style={styles.loginBtn} onPress={() => { setCreateAccount(true) }}>
                            <Text style={{ color: 'white', fontWeight: '500' }}>Create an Account</Text>
                        </TouchableOpacity>
                    </>
                )}
            </KeyboardAvoidingView>
            <View style={{height: 600}}>

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
export default LoginAccountComp;
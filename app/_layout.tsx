// For Theming
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { DrawerLayoutAndroid, ScrollView, StatusBar, TouchableOpacity, useColorScheme, StyleSheet } from 'react-native';
import HeaderBar from '@/components/HeaderBar';
import { Slot } from 'expo-router';
import React, { useRef, useState } from 'react';
import { View, Text } from 'react-native';
import FooterBar from '@/components/FooterBar';
import SideMenu from '@/components/SideMenuComponents/SideMenu';
import AuthScreen from '@/components/AuthScreen';



const RootLayout = () => {
    const colorScheme = useColorScheme();
    const drawer = useRef<DrawerLayoutAndroid>(null);
    const [drawerClosed, setdrawerClosed] = useState(true); 
    const [showAuthScreen, setShowAuthScreen] = useState(false);
    return (
        
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            {showAuthScreen ? (<AuthScreen
                showAuthScreen={showAuthScreen}
                setShowAuthScreen={ setShowAuthScreen}
                    />) : (<>
            <View style={{
                flex: 1,
            }}>
                
                <DrawerLayoutAndroid
                    ref={drawer}
                    drawerWidth={300}
                    drawerPosition='left'
                    renderNavigationView={() => (<SideMenu drawer={drawer} />)}
                    drawerBackgroundColor={colorScheme == 'dark' ? 'black' : 'white'}
                    style={styles.drawer}
                    onDrawerOpen={() => {
                        // StatusBar.setHidden(true, 'fade');
                    }}
                    onDrawerClose={() => {
                        // StatusBar.setHidden(false, 'slide');
                    }}
                >
                
                    <View style={styles.header_container}>
                        <HeaderBar
                                title={"News Brief"}
                                drawer={drawer}
                                drawerClosed={drawerClosed}
                                setdrawerClosed={setdrawerClosed}
                                showAuthScreen={showAuthScreen}
                                setShowAuthScreen={setShowAuthScreen}
                        />
                    </View>
                    <View style={styles.page_slot}>
                        
                            <Slot />

                    
                    </View>
                    <View style={styles.footer_container}>
                        <FooterBar />
                        </View>
                    </DrawerLayoutAndroid>
                </View>
        </>)
                }
        </ThemeProvider>

        
    )
}

const styles = StyleSheet.create({
    header_container: {
        flex: 1,
        width: '100%',
        height: '10%',
        minWidth: '100%',
        minHeight: '5%',
        maxWidth: '100%',
        maxHeight: '10%',
        paddingTop: 0,
    },
    page_slot: {
        flex: 1,
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        flexGrow: 1,
        flexShrink: 0,
    },
    footer_container: {
        flex: 1,
        width: '100%',
        height: '5%',
        maxWidth: '100%',
        maxHeight: '8%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    drawer: {
        
    }
})

export default RootLayout;


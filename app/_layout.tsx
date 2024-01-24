// For Theming
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Button, DrawerLayoutAndroid, ScrollView, StatusBar, TouchableOpacity, useColorScheme } from 'react-native';
import HeaderBar from '@/components/HeaderBar';
import { Slot } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import FooterBar from '@/components/FooterBar';
import { Icon } from '@rneui/base';


const RootLayout = () => {
  const colorScheme = useColorScheme();
    const drawer = useRef<DrawerLayoutAndroid>(null);
    
    const SideMenuOverlay = () => {
    return (
        <View style={{
            flex: 1, 
            paddingTop: 40,
        }}>
            <Text
                style={{
                    marginLeft: 30, 
                    fontSize: 30, 
                    fontWeight: 'bold', 
                    paddingTop: 8, 
                    marginBottom: 10, 
                    color: colorScheme === 'dark' ? 'white' : 'black', 
                }}
            >
                News Brief
            </Text>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 0.5,
                    marginBottom: 11,
                }}
            />
            <ScrollView
                style={{
                    display: 'flex',
                    flexDirection: 'column', 
                    marginLeft: 30, 
                    marginTop: 10,
                    marginBottom: 10,
                }}
            >   
                
                    
                <TouchableOpacity>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                    }}>
                        <Icon name='settings' type='material' color={colorScheme === 'dark' ? 'white' : 'black'}
                            size={25}
                        /> 
                            <Text
                                style={{
                                fontSize: 18,
                                paddingLeft: 25, 
                                marginBottom: 25,
                                }}
                            >   Settings
                        </Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                    }}>
                        <Icon name='person' type='material' color={colorScheme === 'dark' ? 'white' : 'black'}
                            size={25}
                        />
                        <Text
                            style={{
                                fontSize: 18,
                                paddingLeft: 25,
                                marginBottom: 25,
                            }}
                        >   Manage Account
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                    }}>
                        <Icon name='help' type='material' color={colorScheme === 'dark' ? 'white' : 'black'}
                            size={25}
                        />
                        <Text
                            style={{
                                fontSize: 18,
                                paddingLeft: 25,
                                marginBottom: 25,
                            }}
                        >   Help Center
                        </Text>
                    </View>
                </TouchableOpacity>
                
            </ScrollView>
      </View>
    );
    };
   
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={{
        flex: 1,
      }}>
        <DrawerLayoutAndroid
                  ref={drawer}
                  drawerWidth={300}
                  drawerPosition='left'
                  renderNavigationView={SideMenuOverlay}
                  drawerBackgroundColor={ colorScheme == 'dark'? 'black': 'white'}
                  onDrawerOpen={() => { 
                      StatusBar.setHidden(true, 'fade');
                  }}
                  onDrawerClose={() => { 
                      StatusBar.setHidden(false, 'slide');
                  }}
        >
          <View style={{
            flex: 1,
            width: '100%',
            height: '10%',
            minWidth: '100%',
            minHeight: '5%',
            maxWidth: '100%',
            maxHeight: '10%',
            paddingTop: 0,
          }}>
            <HeaderBar title='News Brief' drawer={drawer} />
          </View>
          <View style={{
            flex: 1,
            width: '100%',
            minWidth: '100%',
            maxWidth: '100%',
            flexGrow: 1,
            flexShrink: 0,
          }}>
            <Slot />
          </View>
          <View style={{
            flex: 1,
            width: '100%',
            height: '5%',
            maxWidth: '100%',
            maxHeight: '8%',
          }}>
            <FooterBar />
                  </View>
              </DrawerLayoutAndroid>
      </View>
    </ThemeProvider >
  )
}

export default RootLayout;


import React, { useRef } from 'react';
import {
    DrawerLayoutAndroid,
    StyleSheet,
    View,
    useColorScheme,
} from 'react-native';
import { Header as HeaderRNE, HeaderProps } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon } from '@rneui/base';



type HeaderComponentProps = {
    title: string;
    view?: string;
    drawer: React.RefObject<DrawerLayoutAndroid> | null, 
    drawerClosed: boolean, 
    setdrawerClosed: (drawerClosed : boolean) => void,
};

type ParamList = {
    Detail: {
        openDrawer: void;
    };
};

const HeaderBar: React.FunctionComponent<HeaderComponentProps> = ({ title, drawer, drawerClosed, setdrawerClosed}) => {
    const colorScheme = useColorScheme();     
    return (
        <SafeAreaProvider >
            <HeaderRNE
                backgroundColor={colorScheme === 'dark' ? 'black' : 'white'}
                leftComponent={
                    <View style={{
                        width: '100%', 
                        height: '100%', 
                    }}>
                        <TouchableOpacity
                            onPress={() => {
                                if (drawer !== null) {
                                    drawerClosed ? drawer.current?.openDrawer() : drawer.current?.closeDrawer();
                                    setdrawerClosed(!drawerClosed)
                                }    
                            }}
                        >
                            <Icon name='menu' type='material' color={colorScheme === 'dark' ? 'white' : 'black'} />
                        </TouchableOpacity>
                    </View>
                }
                rightComponent={
                    <View style={styles.headerRight}>
                        <TouchableOpacity>
                            <Icon name='search' type='material' color={colorScheme === 'dark' ? 'white' : 'black'} />
                        </TouchableOpacity>
                    </View>
                }
                centerComponent={{
                    text: title, style: {
                        color: colorScheme === 'dark' ? 'white' : 'black', 
                        fontSize: 22,
                        fontWeight: 'bold',
                } }}
            />
        </SafeAreaProvider>
    );
};



const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#397af8',
        marginBottom: 5,
        width: '100%',
        paddingVertical: 10,
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
    subheaderText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HeaderBar;
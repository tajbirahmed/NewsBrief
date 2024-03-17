import { ChevronLeft } from 'lucide-react-native';
import React from 'react'
import { Modal, View, useColorScheme, Text, TouchableOpacity } from 'react-native'
import RatingComp from '@/components/SideMenuComponents/RatingComp';

interface ModalProps {
    openRateApp: boolean,
    setOpenRateApp: (openRateApp: boolean) => void
}

const RateAppComp = ({ openRateApp, setOpenRateApp }: ModalProps) => {
    const colorScheme = useColorScheme();
    return (
        <Modal visible={openRateApp} >
            <View style={{ flex: 1, backgroundColor: colorScheme === 'dark' ? 'black' : 'white', padding: 12, }}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => setOpenRateApp(!openRateApp)}>
                        <ChevronLeft size={20} color={colorScheme === 'dark' ? 'white' : 'black'} />
                    </TouchableOpacity>
                    <Text style={{
                        color: colorScheme === 'light' ? 'black' : 'white',
                        fontSize: 16, 
                        fontWeight: '600', 
                        paddingLeft: 10,
                    }}>
                        Rate Our App
                    </Text>
                </View>
                <View style={{marginTop: 150, alignSelf: 'center'}}>
                    <Text style={{
                        color: colorScheme === 'light' ? 'black' : 'white',
                        fontSize: 20,
                        fontWeight: '500',
                        paddingLeft: 10,
                    }}>
                        How Would You Like To Rate Our App? 
                    </Text>
                </View>
                <RatingComp />
            </View>
        </Modal>
    )
}

export default RateAppComp
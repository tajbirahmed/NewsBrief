import { FontAwesome } from '@expo/vector-icons';
import { Icon } from '@rneui/base';
import React, { useState } from 'react'
import { Touchable, TouchableOpacity } from 'react-native';
import { StyleSheet, View, useColorScheme, Text } from 'react-native';



const RatingComp = () => {
    const colorScheme = useColorScheme();
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [favourite, setFavourite] = useState(false)
    return (
        <View style={[styles.container, { borderColor: colorScheme === 'dark' ? 'white' : 'black',backgroundColor: colorScheme === 'dark' ? 'black' : 'white', }]}>
            <View style={ styles.like_container}>
                
                {!liked ? (<>
                    <Text style={{ color: colorScheme === 'dark' ? 'white' : 'gray',fontSize: 12, alignSelf: 'center' }}>{ likeCount}</Text>
                    <TouchableOpacity onPress={() => { setLiked(true); setLikeCount((prev) => prev + 1); }}>
                        <Icon name='thumbs-up-outline' size={20} type='ionicon' color={colorScheme === 'dark' ? 'white' : 'black'} />
                    </TouchableOpacity>
                    <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black', fontSize: 10,fontWeight: '400',}}>Like</Text>
                </>
                ) : (<>
                        <Text style={{ color: colorScheme === 'dark' ? 'white' : 'gray',fontSize: 12, alignSelf: 'center' }}>{ likeCount}</Text>
                        <TouchableOpacity onPress={() => { setLiked(false); setLikeCount((prev) => prev - 1); }}>
                            <Icon name='thumbs-up' type='ionicon' size={20} color={colorScheme === 'dark' ? 'white' : 'black'} />
                        </TouchableOpacity>
                        <Text style={{ color: colorScheme === 'dark'? 'white' :'gray', fontSize: 10,fontWeight: '700',}}>Liked</Text>

                </>
                )}
            </View>
            <View style={styles.like_container}>
                {!favourite ? (<>
                    <Text style={{ fontSize: 12, alignSelf: 'center' }}></Text>
                    <TouchableOpacity onPress={() => { setFavourite(true) }}>
                        <Icon name='favorite-border' size={20} type='material' color={colorScheme === 'dark' ? 'white' : 'black'} />
                    </TouchableOpacity>
                    <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black', fontSize: 10, fontWeight: '400', }}>Add to Favourites</Text>
                </>
                ) : (<>
                        <Text style={{ fontSize: 12, alignSelf: 'center' }}></Text>
                        <TouchableOpacity onPress={() => { setFavourite(false) }}>
                            <Icon name='favorite' size={20} type='material' color={colorScheme === 'dark' ? 'white' : 'black'} />
                        </TouchableOpacity>
                        <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black', fontSize: 10, fontWeight: '400', }}>Added in Favourites</Text>

                </>
                )}

            </View>
            <View style={styles.like_container}>
                <Text style={{ fontSize: 12, alignSelf: 'center' }}></Text>
                <TouchableOpacity onPress={() => {  }}>
                    <Icon name='share' size={20} type='material' color={colorScheme === 'dark' ? 'white' : 'black'} />
                </TouchableOpacity>
                <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black', fontSize: 10, fontWeight: '400', }}>Share</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        height: '16%',
        padding: 5,
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 20,
        marginTop: 2,
        borderWidth: 0.2,
        width: '95%',
        alignSelf: 'center',
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    }, 
    like_container: {
        width: 'auto',
    }
})

export default RatingComp;
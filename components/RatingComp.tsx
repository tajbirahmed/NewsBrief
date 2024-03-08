import ShareScreen from '@/utils/ShareScreen';
import { FontAwesome } from '@expo/vector-icons';
import { Icon } from '@rneui/base';
import React, { useState } from 'react'
import { Touchable, TouchableOpacity } from 'react-native';
import { StyleSheet, View, useColorScheme, Text } from 'react-native';

import { ThumbsUp, ThumbsDown, Heart, Share2 } from 'lucide-react-native';


const RatingComp = () => {
    const colorScheme = useColorScheme();
    const [liked, setLiked] = useState(false);
    const [dislike, setDislike] = useState(false)
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0)
    const [favourite, setFavourite] = useState(false)
    return (
        <View style={[styles.container, { borderColor: colorScheme === 'dark' ? 'white' : 'black',backgroundColor: colorScheme === 'dark' ? 'black' : 'white', }]}>
            <View style={ styles.like_container}>
                
                {!liked ? (<>
                    <Text style={{ color: colorScheme === 'dark' ? 'white' : 'gray',fontSize: 12, alignSelf: 'center' }}>{ likeCount}</Text>
                    <TouchableOpacity onPress={() => {
                        setLiked(true);
                        setLikeCount((prev) => prev + 1);
                        if (dislike) { 
                            setDislikeCount(prev => prev - 1); 
                            setDislike(false);
                        } 
                            
                    }}>
                        <ThumbsUp size={22} color={colorScheme === 'dark' ? 'white' : 'black'} />
                    </TouchableOpacity>
                    <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black', fontSize: 10,fontWeight: '400',}}>Like</Text>
                </>
                ) : (<>
                        <Text style={{ color: colorScheme === 'dark' ? 'white' : 'gray',fontSize: 12, alignSelf: 'center' }}>{ likeCount}</Text>
                        <TouchableOpacity onPress={() => {
                            setLiked(false);
                            setLikeCount((prev) => prev - 1);
                        }}>
                            <ThumbsUp size={22} color={colorScheme === 'dark' ? 'white' : 'black'} strokeWidth={1} fill={'blue'}/>
                        </TouchableOpacity>
                        <Text style={{ color: colorScheme === 'dark'? 'white' :'gray', fontSize: 10,fontWeight: '700',}}>Liked</Text>

                </>
                )}
                
            </View>
            <View style={styles.like_container}>

                {!dislike ? (<>
                    <Text style={{ color: colorScheme === 'dark' ? 'white' : 'gray', fontSize: 12, alignSelf: 'center' }}>{dislikeCount}</Text>
                    <TouchableOpacity onPress={() => {
                        setDislike(true);
                        setDislikeCount(prev => prev + 1)
                        if (liked) {
                            setLikeCount(prev => prev - 1);
                            setLiked(false);
                        }

                    }}>
                        <ThumbsDown size={22} color={colorScheme === 'dark' ? 'white' : 'black'} />
                    </TouchableOpacity>
                    <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black', fontSize: 10, fontWeight: '400', }}>Dislike</Text>
                </>
                ) : (<>
                        <Text style={{ color: colorScheme === 'dark' ? 'white' : 'gray', fontSize: 12, alignSelf: 'center' }}>{dislikeCount}</Text>
                    <TouchableOpacity onPress={() => {
                        setDislike(false);
                        setDislikeCount(prev => prev - 1)
                    }}>
                            <ThumbsDown size={22} color={colorScheme === 'dark' ? 'white' : 'black'} strokeWidth={1} fill={'blue'} />
                    </TouchableOpacity>
                    <Text style={{ color: colorScheme === 'dark' ? 'white' : 'gray', fontSize: 10, fontWeight: '700', }}>Disliked</Text>

                </>
                )}

            </View>
            <View style={styles.like_container}>
                {!favourite ? (<>
                    <Text style={{ fontSize: 8, alignSelf: 'center' }}></Text>
                    <TouchableOpacity onPress={() => { setFavourite(true) }}>
                        <Heart size={22} color={colorScheme === 'dark' ? 'white' : 'black'} style={{alignSelf: 'center'}} />
                    </TouchableOpacity>
                    <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black', fontSize: 10, fontWeight: '400', }}>{ "    "}Add to { "\n" } Favourites</Text>
                </>
                ) : (<>
                        <Text style={{ fontSize: 8, alignSelf: 'center' }}></Text>
                        <TouchableOpacity onPress={() => { setFavourite(false) }}>
                            <Heart size={22} color={colorScheme === 'dark' ? 'white' : 'black'} strokeWidth={1} fill={ 'blue'} style={{ alignSelf: 'center' }} />
                        </TouchableOpacity>
                        <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black', fontSize: 10, fontWeight: '400', }}>{"  "} Added to { "\n" }Favourites</Text>

                </>
                )}

            </View>
            <View style={styles.like_container}>
                <Text style={{ color: colorScheme === 'dark' ? 'white' : 'gray', fontSize: 12, alignSelf: 'center' }}></Text>
                <TouchableOpacity onPress={async () => { await ShareScreen(); }}>
                    <Share2 size={22} color={colorScheme === 'dark' ? 'white' : 'black'} />
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
        marginTop: 1,
        borderWidth: 0.2,
        width: '95%',
        alignSelf: 'center',
        display: 'flex', 
        flexDirection: 'row',  
        alignItems: 'center'
    }, 
    like_container: {
        width: '25%',
        alignItems: 'center'
    }
})

export default RatingComp;
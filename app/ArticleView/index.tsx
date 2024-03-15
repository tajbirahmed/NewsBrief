import ArticleHeader from '@/components/ArticleHeader'
import React, { useState, useRef} from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, useColorScheme, Dimensions } from 'react-native'
import { Result } from '@/types/NewsApiTypes'
import { Image } from 'expo-image'
import { Paragraph } from 'react-native-paper'
import formatDateFromString from '@/utils/getDateMonth'; 
import VideoPlayer from 'expo-video-player'
import { setStatusBarHidden } from 'expo-status-bar'
import { ResizeMode, Video } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation'
import { isYouTubeLink } from '@/utils/isYoutube'
import YoutubePlayer from "react-native-youtube-iframe";

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const exampleArticle: Result = {
    title: "India taking up issues of pending salaries in Gulf countries",
    link: "https://www.sentinelassam.com/national-news/india-taking-up-issues-of-pending-salaries-in-gulf-countries-576449",
    keywords: [
        "National News,More"
    ],
    creator: [
        "Sentinel Digital Desk"
    ],
    video_url: "https://youtu.be/YQPeKqWWm7M?feature=shared",
    // video_url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    source_url: "",
    description: "External Affairs Minister S. Jaishankar on Thursday said that the government has taken up the issue of pending salaries of Indian workers with the Gulf countries.",
    content: "NEW DELHI: External Affairs Minister S. Jaishankar on Thursday said that the government has taken up the issue of pending salaries of Indian workers with the Gulf countries.Responding to a question about loss of wages of Indians working abroad, the Minister said that the data of pending salaries was not available but he took up the matter with Gulf countries. \"Would like to assure that employment is retained, wages are paid, and welfare is ensured,\" Jaishankar said. He also said that the government's objective is to get as many workers as possible back to work and he has been in touch with the concerned authorities and also through Ambassadors in the Gulf countries. Jaishankar also informed the House that Prime Minister Narendra Modi is also in touch with the Gulf governments and had 16 telephonic conversations with the authorities. He said he himself visited these countries and Minister of State for External Affairs V. Muraleedharan has also visited the gulf countries and had meetings with the authorities there. He also informed that a corpus of Rs 47 crore under the Indian Community Welfare Fund has been created for helping Indian workers there. In case of the death of an Indian worker, the Ministry of External Affairs through the Ambassador posted there, tries to get ex-gratia compensation paid to the worker's family from the local government or the employer company. Earlier, AITMC member Santanu Sen raised the issue of a wrong map on the World Health Organisation (WHO) site to which Chairman M. Venkaiah asked the EAM to look into. The TMC member said that as a doctor he checks the WHO COVID-19 site for data. The map on the site showed parts of Jammu and Kashmir and Arunachal Pradesh as outside India. He says the government should have been vigilant, when they are using Pegasus to spy on their own ministers, Sen quipped. Responding to the question on the number of women judges in the country, Law and Justice Minister Kiren Rijiju informs the House, out of a total 34 judges in the Supreme Court, we have for the first time four women judges. Out of 1,098 judges in High Courts, we have 83 women judges. \"We have been stressing time and again that while recommending names, preferences may be given to women, backward classes, scheduled caste and scheduled tribe,\" Rijiju further said. Responding to a question that there was no woman judge in the Patna High Court, he said that the Ministry has requested all high courts to send bigger number of women for appointment of judges in the high courts of the country in future. BJP member Vikas Mahatme raised the issue of tax collected through sale of alcohol and said that the states are getting addicted to tax being collected from this source. Describing it as 'Sin Tax items', Mahatme said, \"The tax being collected should be increased. Delhi and Maharashtra have brought in various changes including home delivery in Delhi and sale in malls in Maharashtra. State governments are getting addicted to tax collection from this item.\" (IANS) Also Read:  Jaishankar calls Qatari counterpart; discusses AfghanistanAlso watch:",
    pubDate: "2022-02-04 08:53:39",
    full_description: "www.google.com NEW DELHI: External Affairs Minister S. Jaishankar on Thursday said that the government has taken up the issue of pending salaries of Indian workers with the Gulf countries. Responding to a question about loss of wages of Indians working abroad, the Minister said that the data of pending salaries was not available but he took up the matter with Gulf countries. \"Would like to assure that employment is retained, wages are paid, and welfare is ensured,\" Jaishankar said. He also said that the government's objective is to get as many workers as possible back to work and he has been in touch with the concerned authorities and also through Ambassadors in the Gulf countries. Jaishankar also informed the House that Prime Minister Narendra Modi is also in touch with the Gulf governments and had 16 telephonic conversations with the authorities. He said he himself visited these countries and Minister of State for External Affairs V. Muraleedharan has also visited the gulf countries and had meetings with the authorities there. He also informed that a corpus of Rs 47 crore under the Indian Community Welfare Fund has been created for helping Indian workers there. In case of the death of an Indian worker, the Ministry of External Affairs through the Ambassador posted there, tries to get ex-gratia compensation paid to the worker's family from the local government or the employer company. Earlier, AITMC member Santanu Sen raised the issue of a wrong map on the World Health Organisation (WHO) site to which Chairman M. Venkaiah asked the EAM to look into. The TMC member said that as a doctor he checks the WHO COVID-19 site for data. The map on the site showed parts of Jammu and Kashmir and Arunachal Pradesh as outside India. He says the government should have been vigilant, when they are using Pegasus to spy on their own ministers, Sen quipped. Responding to the question on the number of women judges in the country, Law and Justice Minister Kiren Rijiju informs the House, out of a total 34 judges in the Supreme Court, we have for the first time four women judges. Out of 1,098 judges in High Courts, we have 83 women judges. \"We have been stressing time and again that while recommending names, preferences may be given to women, backward classes, scheduled caste and scheduled tribe,\" Rijiju further said. Responding to a question that there was no woman judge in the Patna High Court, he said that the Ministry has requested all high courts to send bigger number of women for appointment of judges in the high courts of the country in future. BJP member Vikas Mahatme raised the issue of tax collected through sale of alcohol and said that the states are getting addicted to tax being collected from this source. Describing it as 'Sin Tax items', Mahatme said, \"The tax being collected should be increased. Delhi and Maharashtra have brought in various changes including home delivery in Delhi and sale in malls in Maharashtra. State governments are getting addicted to tax collection from this item.\" (IANS) Also Read: Jaishankar calls Qatari counterpart; discusses Afghanistan Also watch:",
    image_url: "https://assets.sentinelassam.com/h-upload/2022/02/04/500x300_307612-jsha.jpg",
    source_id: "sentinel",
    country: [
        "india"
    ],
    category: [
        "top"
    ],
    language: "english"
} 
// ###Important missouts
// 1. source liking


const Home = ({ }) => {
    const colorScheme = useColorScheme();
    const pubDate = formatDateFromString(exampleArticle.pubDate);
    const refVideo = useRef<Video>({} as Video);
    const [inFullscreen, setInFullsreen] = useState(false);
    const [isMute, setIsMute] = useState(true);
    
    return (
        <ScrollView style={[styles.container, {backgroundColor : colorScheme === 'dark' ? 'black' : 'white'}]}>
            <ArticleHeader />
            <View style={{ width: '100%', height: 200, marginTop: 10,}}>
                <Image 
                    style={{width: '100%', height: '100%', }}
                    source={exampleArticle.image_url}
                    contentFit='cover'
                    placeholder={blurhash}
                    transition={1000}
                />
            </View>
            <View style={styles.content_container}>
                <Text style={{ fontWeight: '500', color: colorScheme === 'dark' ? 'white' : 'black' }}>Posted on {pubDate} by 
                    <TouchableOpacity style={{}}>
                        <Text style={{ color: colorScheme === 'dark' ? 'pink' :'blue', fontWeight: '700' }}>
                            {" " + exampleArticle.creator}
                        </Text>
                    </TouchableOpacity>
                </Text>
            </View> 
            <Text style={[styles.content_container, { color: colorScheme === 'dark' ? 'white' : 'black' ,fontSize: 25, fontWeight: 'bold'}]}>
                {exampleArticle.title}
            </Text>
            <Paragraph dataDetectorType='all' style={[styles.content_container, { fontSize: 15,color: colorScheme === 'dark' ? 'white' : 'black',}]}>
                {"    " + exampleArticle.description}
            </Paragraph>
            {exampleArticle.video_url && isYouTubeLink(exampleArticle.video_url) ? (<View>
                <YoutubePlayer
                    height={300}
                    play={true}
                    videoId={"YQPeKqWWm7M"}
                />
                </View>
            ) : exampleArticle.video_url && !isYouTubeLink(exampleArticle.video_url) ? (
                    <View style={ styles.video_container}>
                        <VideoPlayer
                            videoProps={{
                                shouldPlay: true,
                                resizeMode: ResizeMode.CONTAIN,
                                source: {
                                    uri: exampleArticle.video_url,
                                },
                                ref: refVideo,
                                isMuted: !isMute
                            }}
                            fullscreen={{
                                inFullscreen: inFullscreen,
                                enterFullscreen: async () => {
                                    setStatusBarHidden(true, 'fade')
                                    setInFullsreen(!inFullscreen)
                                    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)
                                    refVideo.current.setStatusAsync({
                                        shouldPlay: true,
                                    })
                                },
                                exitFullscreen: async () => {
                                    setStatusBarHidden(false, 'fade')
                                    setInFullsreen(!inFullscreen)
                                    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
                                },
                            }} 
                            mute={{
                                enterMute: () => setIsMute(!isMute),
                                exitMute: () => setIsMute(!isMute),
                                isMute,
                                visible: true,
                            }}
                            style={{
                                videoBackgroundColor: 'black',
                                height: inFullscreen ? Dimensions.get('window').width : 160,
                                width: inFullscreen ? Dimensions.get('window').height : 320,
                            }}
                        />
                    </View>
            ) : (
                (null)
            )
            
            }
            <Paragraph dataDetectorType='all' style={[styles.content_container, { fontSize: 14, color: colorScheme === 'dark' ? 'white' : 'black', }]}>
                { exampleArticle.full_description}
            </Paragraph>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto'
    }, 
    content_container: {
        margin: 20,
        marginTop: 10,
        height: 'auto'
    },
    video_container: {
        width: '100%',
        height: 250,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Home;
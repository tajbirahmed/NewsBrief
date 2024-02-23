import { Result } from '@/types/NewsApiTypes';
import { Icon, ScreenHeight, ScreenWidth } from '@rneui/base';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, SafeAreaView, Pressable, useColorScheme, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { router } from 'expo-router';
import { Image } from 'expo-image';
import RatingComp from './RatingComp';
import { fetchArticleData } from '@/api/NewsApi';

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

interface PageProps {
    category?: string,
    domain?: string,
    country?: string,
}
export const exampleNews: Result[] = [
    {
        title: "India taking up issues of pending salaries in Gulf countries",
        link: "https://www.sentinelassam.com/national-news/india-taking-up-issues-of-pending-salaries-in-gulf-countries-576449",
        keywords: [
            "National News,More"
        ],
        creator: [
            "Sentinel Digital Desk"
        ],
        video_url: null,
        source_url: "",
        description: "External Affairs Minister S. Jaishankar on Thursday said that the government has taken up the issue of pending salaries of Indian workers with the Gulf countries.",
        content: "NEW DELHI: External Affairs Minister S. Jaishankar on Thursday said that the government has taken up the issue of pending salaries of Indian workers with the Gulf countries.Responding to a question about loss of wages of Indians working abroad, the Minister said that the data of pending salaries was not available but he took up the matter with Gulf countries. \"Would like to assure that employment is retained, wages are paid, and welfare is ensured,\" Jaishankar said. He also said that the government's objective is to get as many workers as possible back to work and he has been in touch with the concerned authorities and also through Ambassadors in the Gulf countries. Jaishankar also informed the House that Prime Minister Narendra Modi is also in touch with the Gulf governments and had 16 telephonic conversations with the authorities. He said he himself visited these countries and Minister of State for External Affairs V. Muraleedharan has also visited the gulf countries and had meetings with the authorities there. He also informed that a corpus of Rs 47 crore under the Indian Community Welfare Fund has been created for helping Indian workers there. In case of the death of an Indian worker, the Ministry of External Affairs through the Ambassador posted there, tries to get ex-gratia compensation paid to the worker's family from the local government or the employer company. Earlier, AITMC member Santanu Sen raised the issue of a wrong map on the World Health Organisation (WHO) site to which Chairman M. Venkaiah asked the EAM to look into. The TMC member said that as a doctor he checks the WHO COVID-19 site for data. The map on the site showed parts of Jammu and Kashmir and Arunachal Pradesh as outside India. He says the government should have been vigilant, when they are using Pegasus to spy on their own ministers, Sen quipped. Responding to the question on the number of women judges in the country, Law and Justice Minister Kiren Rijiju informs the House, out of a total 34 judges in the Supreme Court, we have for the first time four women judges. Out of 1,098 judges in High Courts, we have 83 women judges. \"We have been stressing time and again that while recommending names, preferences may be given to women, backward classes, scheduled caste and scheduled tribe,\" Rijiju further said. Responding to a question that there was no woman judge in the Patna High Court, he said that the Ministry has requested all high courts to send bigger number of women for appointment of judges in the high courts of the country in future. BJP member Vikas Mahatme raised the issue of tax collected through sale of alcohol and said that the states are getting addicted to tax being collected from this source. Describing it as 'Sin Tax items', Mahatme said, \"The tax being collected should be increased. Delhi and Maharashtra have brought in various changes including home delivery in Delhi and sale in malls in Maharashtra. State governments are getting addicted to tax collection from this item.\" (IANS) Also Read:  Jaishankar calls Qatari counterpart; discusses AfghanistanAlso watch:",
        pubDate: "2022-02-04 08:53:39",
        full_description: "NEW DELHI: External Affairs Minister S. Jaishankar on Thursday said that the government has taken up the issue of pending salaries of Indian workers with the Gulf countries. Responding to a question about loss of wages of Indians working abroad, the Minister said that the data of pending salaries was not available but he took up the matter with Gulf countries. \"Would like to assure that employment is retained, wages are paid, and welfare is ensured,\" Jaishankar said. He also said that the government's objective is to get as many workers as possible back to work and he has been in touch with the concerned authorities and also through Ambassadors in the Gulf countries. Jaishankar also informed the House that Prime Minister Narendra Modi is also in touch with the Gulf governments and had 16 telephonic conversations with the authorities. He said he himself visited these countries and Minister of State for External Affairs V. Muraleedharan has also visited the gulf countries and had meetings with the authorities there. He also informed that a corpus of Rs 47 crore under the Indian Community Welfare Fund has been created for helping Indian workers there. In case of the death of an Indian worker, the Ministry of External Affairs through the Ambassador posted there, tries to get ex-gratia compensation paid to the worker's family from the local government or the employer company. Earlier, AITMC member Santanu Sen raised the issue of a wrong map on the World Health Organisation (WHO) site to which Chairman M. Venkaiah asked the EAM to look into. The TMC member said that as a doctor he checks the WHO COVID-19 site for data. The map on the site showed parts of Jammu and Kashmir and Arunachal Pradesh as outside India. He says the government should have been vigilant, when they are using Pegasus to spy on their own ministers, Sen quipped. Responding to the question on the number of women judges in the country, Law and Justice Minister Kiren Rijiju informs the House, out of a total 34 judges in the Supreme Court, we have for the first time four women judges. Out of 1,098 judges in High Courts, we have 83 women judges. \"We have been stressing time and again that while recommending names, preferences may be given to women, backward classes, scheduled caste and scheduled tribe,\" Rijiju further said. Responding to a question that there was no woman judge in the Patna High Court, he said that the Ministry has requested all high courts to send bigger number of women for appointment of judges in the high courts of the country in future. BJP member Vikas Mahatme raised the issue of tax collected through sale of alcohol and said that the states are getting addicted to tax being collected from this source. Describing it as 'Sin Tax items', Mahatme said, \"The tax being collected should be increased. Delhi and Maharashtra have brought in various changes including home delivery in Delhi and sale in malls in Maharashtra. State governments are getting addicted to tax collection from this item.\" (IANS) Also Read: Jaishankar calls Qatari counterpart; discusses Afghanistan Also watch:",
        image_url: "https://assets.sentinelassam.com/h-upload/2022/02/04/500x300_307612-jsha.jpg",
        source_id: "sentinel",
        country: [
            "india"
        ],
        category: [
            "top"
        ],
        language: "english"
    },

]
const NewsCardRemastered = (options: PageProps) => {
    const ref = useRef<any>();
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const colorScheme = useColorScheme();

    const [carouselItems, setCarouselItems] = useState<Result[]>(exampleNews);
    const [loadMore, setLoadMore] = useState<boolean>(false);
    const [nextPage, setNextPage] = useState(''); 
    const [newsArticLoading, setnewsArticLoading] = useState<boolean>(false)
    useEffect(() => {
        // setnewsArticLoading(true);
        // fetchArticleData({
        //     nextPage,
        //     setNextPage, 
        //     category: options.category
        // }).then((e) => setCarouselItems((prev) => [...prev, ...e])).catch((e) => console.log(e)
        // );
        // setnewsArticLoading(false);
    }, [loadMore])
    // const carouselItems: Result[] = options.options;
    
    const renderItem = ({ item, index }: { item: Result; index: number }) => {

        return (
            <>
                <View
                    style={{
                        backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
                        borderRadius: 10,
                        height: ScreenHeight / 3,
                        padding: 5,
                        marginLeft: 8,
                        marginRight: 8,
                        borderColor: colorScheme === 'dark' ? 'white' : 'black',
                        borderWidth: 0.2,
                    }}
                >

                    <TouchableOpacity style={{
                        flex: 1,
                        borderRadius: 10,
                        width: '100%'
                    }} onPress={() => {
                        router.push({
                            pathname: '/ArticleView/'
                        })
                    }}>
                        <Image
                            style={{
                                flex: 1,
                                borderRadius: 10,
                                width: '100%'
                            }}
                            source={item.image_url}
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                        />
                        <Text
                            numberOfLines={1}
                            ellipsizeMode="tail"
                            style={{
                                fontSize: 18,
                                fontWeight: '400',
                                color: colorScheme === 'dark' ? 'white' : 'black',
                                overflow: 'hidden',
                            }}
                        >
                            {item.title}
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.card_footer}>
                        <TouchableOpacity style={[styles.source_name]}>
                            <Text style={[styles.source_name, { color: colorScheme === 'dark' ? 'white' : 'black' }]} numberOfLines={1}>{item.source_id}</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <RatingComp />
            </>
        );
    };

    return (
        <SafeAreaView style={[styles.container, {
            backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
        }]}>
            <Pressable>
                <View style={styles.card_style}>
                    <Carousel
                        layout="default"
                        ref={ref}
                        data={carouselItems}
                        sliderWidth={300}
                        itemWidth={ScreenWidth - 5}
                        renderItem={renderItem}
                        onSnapToItem={(index: number) => setActiveIndex(index)}
                    />
                </View>
            </Pressable>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 8,
    },
    card_style: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    card_footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 4,
        paddingBottom: 2,
        paddingRight: 6,
    },
    source_name: {
        paddingLeft: 3,
        fontSize: 13,
    },
    more_info: {
    }
})

export default NewsCardRemastered;


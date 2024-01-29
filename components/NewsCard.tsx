import { ScreenHeight, ScreenWidth } from '@rneui/base';
import React, { useRef, useState } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, useColorScheme } from 'react-native';
import Carousel from 'react-native-snap-carousel';

interface ItemProps {
  title: string;
  subtitle?: string;
  illustration: string | undefined;
}

const NewsCard = ({ title, illustration }: ItemProps) => {
  const ref = useRef<any>();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const colorScheme = useColorScheme();
  const carouselItems: ItemProps[] = [
    {
      title: title, 
      illustration: illustration,
    },
    {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    },
    {
      title: 'Acrocorinth, Greece',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    },
    {
      title: 'The lone tree, majestic landscape of New Zealand',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    },
  ];

  const renderItem = ({ item, index }: { item: ItemProps; index: number }) => {
    return (
      <View
        style={{
          backgroundColor: colorScheme === 'dark' ? 'black': 'white',
          borderRadius: 8,
          height: ScreenHeight / 3,
          padding: 5,
          marginLeft: 8,
          marginRight: 8,
        }}
      >
        <Image
          style={{
            flex: 1,
            borderRadius: 20,
          }}
          source={{ uri: item.illustration }}
        />
          
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              fontSize: 20,
              fontWeight: '400',
              color: colorScheme === 'dark' ? 'white' : 'black',
              overflow: 'hidden',
            }}
          >
            {item.title}
            </Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
        paddingTop: 8,
      }}
    >
      <TouchableOpacity>
        <View style={{ width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'center' }}>
          <Carousel
            layout="default"
            ref={ref}  
              
            data={carouselItems}
            sliderWidth={300}
            itemWidth={ScreenWidth}
            renderItem={renderItem}
            onSnapToItem={(index: number) => setActiveIndex(index)}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default NewsCard;

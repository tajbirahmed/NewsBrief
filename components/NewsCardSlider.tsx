import { Card, Icon } from "@rneui/base";
import { TouchableOpacity, View, Image, useColorScheme, Text } from "react-native";
import NewsCard from "./NewsCard";

interface Source {
  id: string | null;
  name: string;
}

interface NewsItem {
  source: Source;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | undefined;
  publishedAt: string;
  content: string | null;
}

const NewsCardSlider = ({ source,
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content }: NewsItem) => {
  const colorScheme = useColorScheme();
  return (
    
      <View
        style={{
          width: '100%',
          minHeight: 180,
        }}
      >
        <NewsCard title={title} illustration={ urlToImage} />
      </View>
  )
}

export default NewsCardSlider;


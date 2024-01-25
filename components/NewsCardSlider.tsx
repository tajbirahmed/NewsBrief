import { Card, Icon } from "@rneui/base";
import { TouchableOpacity, View, Image, useColorScheme, Text } from "react-native";

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

const NewsCard = ({ source,
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content }: NewsItem) => {
  const colorScheme = useColorScheme();
  return (
    <TouchableOpacity>
      <View
        style={{
          width: '100%',
          minHeight: 180,
        }}
      >
        
      </View>
    </TouchableOpacity>
  )
}

export default NewsCard;


import { Card, Icon } from "@rneui/base";
import { TouchableOpacity, View, Image, useColorScheme, StyleSheet } from "react-native";
import NewsCard from "./NewsCard";

interface Source {
  id?: string;
  name: string;
}

interface NewsItem {
  source: Source;
  author?: string;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | undefined;
  publishedAt: string;
  content: string | null;
}

const NewsCardSlider = ({
  source,
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content }: NewsItem) => {
  const colorScheme = useColorScheme();
  return (
    
      <View style={styles.container}>
      <NewsCard
        title={title}
        illustration={urlToImage}
        author={author}
        source={ source.name}
      />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 180,
    justifyContent: 'center'
  }
})

export default NewsCardSlider;


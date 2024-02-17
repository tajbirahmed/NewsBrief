import { Card, Icon } from "@rneui/base";
import { TouchableOpacity, View, Image, useColorScheme, StyleSheet } from "react-native";
import NewsCard from "./NewsCard";
import { Result } from "@/types/NewsApiTypes";

interface PageProps { 
  options: Result
}

const NewsCardSlider = (options: PageProps) => {
  const colorScheme = useColorScheme();
  return (
    
      <View style={styles.container}>
      <NewsCard
        options={options.options}
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


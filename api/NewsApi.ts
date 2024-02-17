import { Result, PaginationProps, } from "@/types/NewsApiTypes";

export async function fetchArticleData({ nextPage, setNextPage }: PaginationProps): Promise<Result[]>{
  let API_URL = 'https://newsdata.io/api/1/news?apikey=pub_380591a6bcb117e3eb60dc078d8d9321df3cb&q=AI&language=en'
  if (nextPage !== '') 
    API_URL = `https://newsdata.io/api/1/news?apikey=pub_380591a6bcb117e3eb60dc078d8d9321df3cb&q=AI&language=en&page=${nextPage}`
  try {
    const response = await fetch(API_URL);
    const result = await response.json();
    // console.log(result.results);
    setNextPage(result.nextPage);
    return result.results;
   
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
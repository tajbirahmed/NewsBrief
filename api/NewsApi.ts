import { Result, PaginationProps, } from "@/types/NewsApiTypes";
import { NEWSDATAIO } from "./secretKeys/secret";


export async function fetchArticleData(
    { nextPage, setNextPage, category }: PaginationProps): Promise<Result[]> {
    let API_URL = `https://newsdata.io/api/1/news?apikey=${NEWSDATAIO}&country=bd,us,gb,ru,in&language=en&prioritydomain=medium`
    if (nextPage !== '')
        API_URL = `https://newsdata.io/api/1/news?apikey=${NEWSDATAIO}&language=en&page=${nextPage}`
    if (category !== '') API_URL += "&category=" + category; 
    console.log(API_URL);
    
    try {
        const response = await fetch(API_URL);
        const result = await response.json();
        setNextPage(result.nextPage);
        return result.results;

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
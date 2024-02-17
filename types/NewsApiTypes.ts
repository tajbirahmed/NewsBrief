export interface Article {
  status: string;
  totalResults: number;
  results: Result[];
}

export interface PaginationProps {
  nextPage: string,
  setNextPage: (nextPage: string) => void
}

export interface Result {
  article_id: string;
  title: string;
  link: string;
  keywords: string[];
  creator: string[];
  video_url: string | null;
  description: string;
  content: string;
  pubDate: string;
  image_url: string;
  source_id: string;
  source_url: string;
  source_priority: number;
  country: string[];
  category: string[];
  language: string;
  ai_tag: string[];
  ai_region: string | null;
  sentiment: string;
  sentiment_stats: SentimentStats;
}

interface SentimentStats {
  positive: number;
  neutral: number;
  negative: number;
}
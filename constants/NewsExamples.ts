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


const newsTestData: NewsItem[] = [
  {
    source: {
      id: null,
      name: "[Removed]",
    },
    author: null,
    title: "[Removed]",
    description: "[Removed]",
    url: "https://removed.com",
    urlToImage: undefined,
    publishedAt: "1970-01-01T00:00:00Z",
    content: "[Removed]",
  },
  {
    source: {
      id: null,
      name: "The Seattle Times",
    },
    author: "Dominic Gates",
    title: "Boeing, not Spirit, mis-installed piece that blew off Alaska MAX 9 jet, industry source says - The Seattle Times",
    description: "The piece that blew off an Alaska Airlines jet this month was removed and re-installed improperly by Boeing mechanics in Renton, according to a person familiar with the details of the work.",
    url: "https://www.seattletimes.com/business/boeing-aerospace/boeing-not-spirit-mis-installed-piece-that-blew-off-alaska-max-9-jet/",
    urlToImage: "https://images.seattletimes.com/wp-content/uploads/2024/01/01232024_tzr_tzr_152352.jpg?d=1200x630",
    publishedAt: "2024-01-24T14:00:00Z",
    content: "The fuselage panel that blew off an Alaska Airlines jet earlier this month was removed for repair then reinstalled improperly by Boeing mechanics on the Renton final assembly line, a person familiar … [+13379 chars]",
  },
  {
    source: {
      id: null,
      name: "NDTV News",
    },
    author: null,
    title: "Man Removed From American Airlines Flight For Farting Excessively: Report - NDTV",
    description: "The flight, which was heading towards the runway for takeoff, stopped and returned to the gate.",
    url: "https://www.ndtv.com/world-news/man-removed-from-american-airlines-flight-for-farting-excessively-4924521",
    urlToImage: "https://c.ndtvimg.com/2023-08/li80rstg_american-airlines_625x300_13_August_23.jpg",
    publishedAt: "2024-01-24T13:49:24Z",
    content: "The incident took place on flight from Phoenix, to Austin on January 14.\r\nAn American Airlines flight was recently delayed after a \"disgruntled\" passenger farted and was removed from the plane, as pe… [+3295 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: null,
    title: "Why tech layoffs aren't yet a sign of a labor market slowdown - Yahoo Finance",
    description: null,
    url: "https://finance.yahoo.com/news/why-tech-layoffs-arent-yet-a-sign-of-a-labor-market-slowdown-133651976.html",
    urlToImage: undefined,
    publishedAt: "2024-01-24T13:36:51Z",
    content: "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 244 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]",
  },
  {
    source: {
      id: null,
      name: "Investor's Business Daily",
    },
    author: "Investor's Business Daily",
    title: "Dow Jones Futures Rise As Netflix Surges On Earnings; Tesla Earnings Next - Investor's Business Daily",
    description: null,
    url: "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-as-netflix-surges-on-earnings-tesla-earnings-next/",
    urlToImage: undefined,
    publishedAt: "2024-01-24T13:26:00Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Hugh Son",
    title: "Klarna to debut $7.99 monthly plan ahead of IPO - CNBC",
    description: "Klarna Plus is the latest example of a fintech player hoping to build out its offerings and boost recurring revenue. An IPO is imminent, the firm's CEO said.",
    url: "https://www.cnbc.com/2024/01/24/klarna-to-debut-7point99-monthly-plan-ahead-of-ipo.html",
    urlToImage: "https://image.cnbcfm.com/api/v1/image/107362619-1705955843415-Klarna_Plus_Asset.jpg?v=1705955923&w=1920&h=1080",
    publishedAt: "2024-01-24T13:00:01Z",
    content: "Swedish buy now, pay later firm Klarna unveils a $7.99 monthly subscription plan called Klarna Plus\r\nSwedish fintech firm Klarna is launching a monthly subscription plan in the U.S. to lock in its he… [+2954 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: "Yahoo Finance",
    title: "Chemicals-maker DuPont tumbles as prelim quarterly results disappoint - Yahoo Finance",
    description: null,
    url: "https://news.google.com/rss/articles/CBMiU2h0dHBzOi8vZmluYW5jZS55YWhvby5jb20vbmV3cy9jaGVtaWNhbHMtbWFrZXItZHVwb250LXR1bWJsZXMtcHJlbGltLTEyNTkwMTgwNS5odG1s0gEA?oc=5",
    urlToImage: undefined,
    publishedAt: "2024-01-24T12:59:01Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "Alexandra Canal",
    title: "Netflix subscribers surge as revenue beats estimates - Yahoo Finance",
    description: "Netflix reported fourth quarter earnings after the bell on Tuesday.",
    url: "https://finance.yahoo.com/news/netflix-subscribers-surge-as-revenue-beats-estimates-210504557.html",
    urlToImage: "https://s.yimg.com/ny/api/res/1.2/Nzz9n04Nd1smZxmg32u_KQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-05/d8f49170-d51c-11ec-b763-fc1244449d42",
    publishedAt: "2024-01-24T12:49:21Z",
    content: "Netflix (NFLX) said Tuesday that its fourth quarter subscriber additions surged, topping its own forecast and sending its stock as much as 14% higher in early trading on Wednesday.\r\nThe subscriber ad… [+4222 chars]",
  },
  {
    source: {
      id: null,
      name: "Mediaroom.com",
    },
    author: null,
    title: "Abbott Reports Fourth-Quarter and Full-Year 2023 Results; Issues 2024 Financial Outlook - Press Releases",
    description: "Fourth-quarter reported sales increased 1.5 percent; organic sales growth for the underlying base business increased 11.0 percent Full-year 2023 reported sales decreased 8.1 percent due to...",
    url: "https://abbott.mediaroom.com/2024-01-24-Abbott-Reports-Fourth-Quarter-and-Full-Year-2023-Results-Issues-2024-Financial-Outlook",
    urlToImage: "https://abbott.mediaroom.com/image/abbottimage_social.jpg",
    publishedAt: "2024-01-24T12:33:08Z",
    content: "<ul><li>Fourth-quarter reported sales increased 1.5 percent; organic sales growth for the underlying base business increased 11.0 percent</li><li>Full-year 2023 reported sales decreased 8.1 percent d… [+76364 chars]",
  },
  {
    source: {
      id: "bloomberg",
      name: "Bloomberg",
    },
    author: null,
    title: "China's Bold Stock-Market Rescue Plan Leaves Investors Skeptical - Bloomberg",
    description: null,
    url: "https://www.bloomberg.com/news/articles/2024-01-23/china-s-bold-stock-market-rescue-plan-lures-a-crowd-of-skeptics",
    urlToImage: undefined,
    publishedAt: "2024-01-24T12:32:53Z",
    content: "To continue, please click the box below to let us know you're not a robot.",
  },
];

export default newsTestData;

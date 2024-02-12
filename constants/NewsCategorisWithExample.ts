

type NewsSourceStandCard = {
  urlToImageSource?: string;
  newsSourceName: string;
  urlToNewsSource?: string;
  actualNewsSource?: string;
};

type Category = {
  categoryName: string;
  child?: NewsSourceStandCard[];
};

const categories: Category[] = [
  {
    categoryName: "Business",
    child: [
      {
        urlToImageSource: "https://1000logos.net/wp-content/uploads/2021/05/The-Wall-Street-Journal-logo-500x281.png",
        newsSourceName: "The Wall Street Journal",
        urlToNewsSource: "https://www.wsj.com/",
        actualNewsSource: "The Wall Street Journal",
      },
      {
        urlToImageSource: "https://www.logo.wine/a/logo/Financial_Times/Financial_Times-Logo.wine.svg",
        newsSourceName: "Financial Times",
        urlToNewsSource: "https://www.ft.com/",
        actualNewsSource: "Financial Times",
      },
      {
        urlToImageSource: "https://imagehttps://banner2.cleanpng.com/20180411/jzw/kisspng-forbes-logo-marketing-business-company-magazine-5aceb32641b2d7.9782635015234957182691.jpgs.forbes.com/forbes/forbes-logo.png",
        newsSourceName: "Forbes",
        urlToNewsSource: "https://www.forbes.com/",
        actualNewsSource: "Forbes",
      },
      {
        urlToImageSource: "https://logos-world.net/wp-content/uploads/2022/01/Bloomberg-Logo.png",
        newsSourceName: "Bloomberg",
        urlToNewsSource: "https://www.bloomberg.com/",
        actualNewsSource: "Bloomberg",
      },
      {
        urlToImageSource: "https://www.reuters.com/assets/images/rtrltr.png",
        newsSourceName: "Reuters",
        urlToNewsSource: "https://www.reuters.com/",
        actualNewsSource: "Reuters",
      },
      {
        urlToImageSource: "https://logowik.com/content/uploads/images/cnbc4159.jpg",
        newsSourceName: "CNBC",
        urlToNewsSource: "https://www.cnbc.com/",
        actualNewsSource: "CNBC",
      },
      {
        urlToImageSource: "https://www.logo.wine/a/logo/The_Economist/The_Economist-Logo.wine.svg",
        newsSourceName: "The Economist",
        urlToNewsSource: "https://www.economist.com/",
        actualNewsSource: "The Economist",
      },
    ],
  },
  {
    categoryName: "Technology",
    child: [
      {
        urlToImageSource: "https://logowik.com/content/uploads/images/wired-magazine6738.logowik.com.webp",
        newsSourceName: "Wired",
        urlToNewsSource: "https://www.wired.com/",
        actualNewsSource: "Wired",
      },
      {
        urlToImageSource: "https://cdn.icon-icons.com/icons2/2699/PNG/512/techcrunch_logo_icon_170625.png",
        newsSourceName: "TechCrunch",
        urlToNewsSource: "https://techcrunch.com/",
        actualNewsSource: "TechCrunch",
      },
      {
        urlToImageSource: "https://seekvectorlogo.com/wp-content/uploads/2018/02/the-verge-vector-logo-small.png",
        newsSourceName: "The Verge",
        urlToNewsSource: "https://www.theverge.com/",
        actualNewsSource: "The Verge",
      },
      {
        urlToImageSource: "https://logos-world.net/wp-content/uploads/2022/12/CNET-Logo-500x281.png",
        newsSourceName: "CNET",
        urlToNewsSource: "https://www.cnet.com/",
        actualNewsSource: "CNET",
      },
      {
        urlToImageSource: "https://logos-world.net/wp-content/uploads/2022/12/CNET-Logo-500x281.png",
        newsSourceName: "End Gadget",
        urlToNewsSource: "https://www.cnet.com/",
        actualNewsSource: "CNET",
      }
    ]
  }, 
  {
    categoryName: "Business",
    child: [
      {
        urlToImageSource: "https://1000logos.net/wp-content/uploads/2021/05/The-Wall-Street-Journal-logo-500x281.png",
        newsSourceName: "The Wall Street Journal",
        urlToNewsSource: "https://www.wsj.com/",
        actualNewsSource: "The Wall Street Journal",
      },
      {
        urlToImageSource: "https://www.logo.wine/a/logo/Financial_Times/Financial_Times-Logo.wine.svg",
        newsSourceName: "Financial Times",
        urlToNewsSource: "https://www.ft.com/",
        actualNewsSource: "Financial Times",
      },
      {
        urlToImageSource: "https://imagehttps://banner2.cleanpng.com/20180411/jzw/kisspng-forbes-logo-marketing-business-company-magazine-5aceb32641b2d7.9782635015234957182691.jpgs.forbes.com/forbes/forbes-logo.png",
        newsSourceName: "Forbes",
        urlToNewsSource: "https://www.forbes.com/",
        actualNewsSource: "Forbes",
      },
      {
        urlToImageSource: "https://logos-world.net/wp-content/uploads/2022/01/Bloomberg-Logo.png",
        newsSourceName: "Bloomberg",
        urlToNewsSource: "https://www.bloomberg.com/",
        actualNewsSource: "Bloomberg",
      },
      {
        urlToImageSource: "https://www.reuters.com/assets/images/rtrltr.png",
        newsSourceName: "Reuters",
        urlToNewsSource: "https://www.reuters.com/",
        actualNewsSource: "Reuters",
      },
      {
        urlToImageSource: "https://logowik.com/content/uploads/images/cnbc4159.jpg",
        newsSourceName: "CNBC",
        urlToNewsSource: "https://www.cnbc.com/",
        actualNewsSource: "CNBC",
      },
      {
        urlToImageSource: "https://www.logo.wine/a/logo/The_Economist/The_Economist-Logo.wine.svg",
        newsSourceName: "The Economist",
        urlToNewsSource: "https://www.economist.com/",
        actualNewsSource: "The Economist",
      },
    ],
  },
  {
    categoryName: "Technology",
    child: [
      {
        urlToImageSource: "https://logowik.com/content/uploads/images/wired-magazine6738.logowik.com.webp",
        newsSourceName: "Wired",
        urlToNewsSource: "https://www.wired.com/",
        actualNewsSource: "Wired",
      },
      {
        urlToImageSource: "https://cdn.icon-icons.com/icons2/2699/PNG/512/techcrunch_logo_icon_170625.png",
        newsSourceName: "TechCrunch",
        urlToNewsSource: "https://techcrunch.com/",
        actualNewsSource: "TechCrunch",
      },
      {
        urlToImageSource: "https://seekvectorlogo.com/wp-content/uploads/2018/02/the-verge-vector-logo-small.png",
        newsSourceName: "The Verge",
        urlToNewsSource: "https://www.theverge.com/",
        actualNewsSource: "The Verge",
      },
      {
        urlToImageSource: "https://logos-world.net/wp-content/uploads/2022/12/CNET-Logo-500x281.png",
        newsSourceName: "CNET",
        urlToNewsSource: "https://www.cnet.com/",
        actualNewsSource: "CNET",
      },
      {
        urlToImageSource: "https://logos-world.net/wp-content/uploads/2022/12/CNET-Logo-500x281.png",
        newsSourceName: "End Gadget",
        urlToNewsSource: "https://www.cnet.com/",
        actualNewsSource: "CNET",
      }
    ]
  }, 
  {
    categoryName: "Business",
    child: [
      {
        urlToImageSource: "https://1000logos.net/wp-content/uploads/2021/05/The-Wall-Street-Journal-logo-500x281.png",
        newsSourceName: "The Wall Street Journal",
        urlToNewsSource: "https://www.wsj.com/",
        actualNewsSource: "The Wall Street Journal",
      },
      {
        urlToImageSource: "https://www.logo.wine/a/logo/Financial_Times/Financial_Times-Logo.wine.svg",
        newsSourceName: "Financial Times",
        urlToNewsSource: "https://www.ft.com/",
        actualNewsSource: "Financial Times",
      },
      {
        urlToImageSource: "https://imagehttps://banner2.cleanpng.com/20180411/jzw/kisspng-forbes-logo-marketing-business-company-magazine-5aceb32641b2d7.9782635015234957182691.jpgs.forbes.com/forbes/forbes-logo.png",
        newsSourceName: "Forbes",
        urlToNewsSource: "https://www.forbes.com/",
        actualNewsSource: "Forbes",
      },
      {
        urlToImageSource: "https://logos-world.net/wp-content/uploads/2022/01/Bloomberg-Logo.png",
        newsSourceName: "Bloomberg",
        urlToNewsSource: "https://www.bloomberg.com/",
        actualNewsSource: "Bloomberg",
      },
      {
        urlToImageSource: "https://www.reuters.com/assets/images/rtrltr.png",
        newsSourceName: "Reuters",
        urlToNewsSource: "https://www.reuters.com/",
        actualNewsSource: "Reuters",
      },
      {
        urlToImageSource: "https://logowik.com/content/uploads/images/cnbc4159.jpg",
        newsSourceName: "CNBC",
        urlToNewsSource: "https://www.cnbc.com/",
        actualNewsSource: "CNBC",
      },
      {
        urlToImageSource: "https://www.logo.wine/a/logo/The_Economist/The_Economist-Logo.wine.svg",
        newsSourceName: "The Economist",
        urlToNewsSource: "https://www.economist.com/",
        actualNewsSource: "The Economist",
      },
    ],
  },
  {
    categoryName: "Technology",
    child: [
      {
        urlToImageSource: "https://logowik.com/content/uploads/images/wired-magazine6738.logowik.com.webp",
        newsSourceName: "Wired",
        urlToNewsSource: "https://www.wired.com/",
        actualNewsSource: "Wired",
      },
      {
        urlToImageSource: "https://cdn.icon-icons.com/icons2/2699/PNG/512/techcrunch_logo_icon_170625.png",
        newsSourceName: "TechCrunch",
        urlToNewsSource: "https://techcrunch.com/",
        actualNewsSource: "TechCrunch",
      },
      {
        urlToImageSource: "https://seekvectorlogo.com/wp-content/uploads/2018/02/the-verge-vector-logo-small.png",
        newsSourceName: "The Verge",
        urlToNewsSource: "https://www.theverge.com/",
        actualNewsSource: "The Verge",
      },
      {
        urlToImageSource: "https://logos-world.net/wp-content/uploads/2022/12/CNET-Logo-500x281.png",
        newsSourceName: "CNET",
        urlToNewsSource: "https://www.cnet.com/",
        actualNewsSource: "CNET",
      },
      {
        urlToImageSource: "https://logos-world.net/wp-content/uploads/2022/12/CNET-Logo-500x281.png",
        newsSourceName: "End Gadget",
        urlToNewsSource: "https://www.cnet.com/",
        actualNewsSource: "CNET",
      }
    ]
  }, 
  {
    categoryName: "Business",
    child: [
      {
        urlToImageSource: "https://1000logos.net/wp-content/uploads/2021/05/The-Wall-Street-Journal-logo-500x281.png",
        newsSourceName: "The Wall Street Journal",
        urlToNewsSource: "https://www.wsj.com/",
        actualNewsSource: "The Wall Street Journal",
      },
      {
        urlToImageSource: "https://www.logo.wine/a/logo/Financial_Times/Financial_Times-Logo.wine.svg",
        newsSourceName: "Financial Times",
        urlToNewsSource: "https://www.ft.com/",
        actualNewsSource: "Financial Times",
      },
      {
        urlToImageSource: "https://imagehttps://banner2.cleanpng.com/20180411/jzw/kisspng-forbes-logo-marketing-business-company-magazine-5aceb32641b2d7.9782635015234957182691.jpgs.forbes.com/forbes/forbes-logo.png",
        newsSourceName: "Forbes",
        urlToNewsSource: "https://www.forbes.com/",
        actualNewsSource: "Forbes",
      },
      {
        urlToImageSource: "https://logos-world.net/wp-content/uploads/2022/01/Bloomberg-Logo.png",
        newsSourceName: "Bloomberg",
        urlToNewsSource: "https://www.bloomberg.com/",
        actualNewsSource: "Bloomberg",
      },
      {
        urlToImageSource: "https://www.reuters.com/assets/images/rtrltr.png",
        newsSourceName: "Reuters",
        urlToNewsSource: "https://www.reuters.com/",
        actualNewsSource: "Reuters",
      },
      {
        urlToImageSource: "https://logowik.com/content/uploads/images/cnbc4159.jpg",
        newsSourceName: "CNBC",
        urlToNewsSource: "https://www.cnbc.com/",
        actualNewsSource: "CNBC",
      },
      {
        urlToImageSource: "https://www.logo.wine/a/logo/The_Economist/The_Economist-Logo.wine.svg",
        newsSourceName: "The Economist",
        urlToNewsSource: "https://www.economist.com/",
        actualNewsSource: "The Economist",
      },
    ],
  },
  {
    categoryName: "Technology",
    child: [
      {
        urlToImageSource: "https://logowik.com/content/uploads/images/wired-magazine6738.logowik.com.webp",
        newsSourceName: "Wired",
        urlToNewsSource: "https://www.wired.com/",
        actualNewsSource: "Wired",
      },
      {
        urlToImageSource: "https://cdn.icon-icons.com/icons2/2699/PNG/512/techcrunch_logo_icon_170625.png",
        newsSourceName: "TechCrunch",
        urlToNewsSource: "https://techcrunch.com/",
        actualNewsSource: "TechCrunch",
      },
      {
        urlToImageSource: "https://seekvectorlogo.com/wp-content/uploads/2018/02/the-verge-vector-logo-small.png",
        newsSourceName: "The Verge",
        urlToNewsSource: "https://www.theverge.com/",
        actualNewsSource: "The Verge",
      },
      {
        urlToImageSource: "https://logos-world.net/wp-content/uploads/2022/12/CNET-Logo-500x281.png",
        newsSourceName: "CNET",
        urlToNewsSource: "https://www.cnet.com/",
        actualNewsSource: "CNET",
      },
      {
        urlToImageSource: "https://logos-world.net/wp-content/uploads/2022/12/CNET-Logo-500x281.png",
        newsSourceName: "End Gadget",
        urlToNewsSource: "https://www.cnet.com/",
        actualNewsSource: "CNET",
      }
    ]
  }, 
  {
    categoryName: "Business",
    child: [
      {
        urlToImageSource: "https://1000logos.net/wp-content/uploads/2021/05/The-Wall-Street-Journal-logo-500x281.png",
        newsSourceName: "The Wall Street Journal",
        urlToNewsSource: "https://www.wsj.com/",
        actualNewsSource: "The Wall Street Journal",
      },
      {
        urlToImageSource: "https://www.logo.wine/a/logo/Financial_Times/Financial_Times-Logo.wine.svg",
        newsSourceName: "Financial Times",
        urlToNewsSource: "https://www.ft.com/",
        actualNewsSource: "Financial Times",
      },
      {
        urlToImageSource: "https://imagehttps://banner2.cleanpng.com/20180411/jzw/kisspng-forbes-logo-marketing-business-company-magazine-5aceb32641b2d7.9782635015234957182691.jpgs.forbes.com/forbes/forbes-logo.png",
        newsSourceName: "Forbes",
        urlToNewsSource: "https://www.forbes.com/",
        actualNewsSource: "Forbes",
      },
      {
        urlToImageSource: "https://logos-world.net/wp-content/uploads/2022/01/Bloomberg-Logo.png",
        newsSourceName: "Bloomberg",
        urlToNewsSource: "https://www.bloomberg.com/",
        actualNewsSource: "Bloomberg",
      },
      {
        urlToImageSource: "https://www.reuters.com/assets/images/rtrltr.png",
        newsSourceName: "Reuters",
        urlToNewsSource: "https://www.reuters.com/",
        actualNewsSource: "Reuters",
      },
      {
        urlToImageSource: "https://logowik.com/content/uploads/images/cnbc4159.jpg",
        newsSourceName: "CNBC",
        urlToNewsSource: "https://www.cnbc.com/",
        actualNewsSource: "CNBC",
      },
      {
        urlToImageSource: "https://www.logo.wine/a/logo/The_Economist/The_Economist-Logo.wine.svg",
        newsSourceName: "The Economist",
        urlToNewsSource: "https://www.economist.com/",
        actualNewsSource: "The Economist",
      },
    ],
  },
  {
    categoryName: "Technology",
    child: [
      {
        urlToImageSource: "https://logowik.com/content/uploads/images/wired-magazine6738.logowik.com.webp",
        newsSourceName: "Wired",
        urlToNewsSource: "https://www.wired.com/",
        actualNewsSource: "Wired",
      },
      {
        urlToImageSource: "https://cdn.icon-icons.com/icons2/2699/PNG/512/techcrunch_logo_icon_170625.png",
        newsSourceName: "TechCrunch",
        urlToNewsSource: "https://techcrunch.com/",
        actualNewsSource: "TechCrunch",
      },
      {
        urlToImageSource: "https://seekvectorlogo.com/wp-content/uploads/2018/02/the-verge-vector-logo-small.png",
        newsSourceName: "The Verge",
        urlToNewsSource: "https://www.theverge.com/",
        actualNewsSource: "The Verge",
      },
      {
        urlToImageSource: "https://logos-world.net/wp-content/uploads/2022/12/CNET-Logo-500x281.png",
        newsSourceName: "CNET",
        urlToNewsSource: "https://www.cnet.com/",
        actualNewsSource: "CNET",
      },
      {
        urlToImageSource: "https://logos-world.net/wp-content/uploads/2022/12/CNET-Logo-500x281.png",
        newsSourceName: "End Gadget",
        urlToNewsSource: "https://www.cnet.com/",
        actualNewsSource: "CNET",
      }
    ]
  }
]
export default categories;
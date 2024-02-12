

interface FooterItemProps {
  title: string,
  iconName: string,
  iconType: string,
  path: string, 
}

const footerItems: FooterItemProps[] = [
  { title: "Home", iconName: "home", iconType: "material", path: "/" }, 
  { title: "Explore", iconName: "explore", iconType: "material", path: "/Explore" },
  { title: "Favourite", iconName: "favorite", iconType: "material", path: "/Favourite" },
  { title: "News Stand", iconName: "newspaper-o", iconType: "font-awesome", path: "/NewsStand" },
  
]
export default footerItems;
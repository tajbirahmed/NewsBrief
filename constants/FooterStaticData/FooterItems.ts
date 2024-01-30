

interface FooterItemProps {
  title: string,
  iconName: string,
  iconType: string,
}

const footerItems: FooterItemProps[] = [
  { title: "Home", iconName: "home", iconType: "material" }, 
  { title: "Explore", iconName: "explore", iconType: "material" },
  { title: "Favourite", iconName: "favorite", iconType: "material" },
  { title: "News Stand", iconName: "newspaper-o", iconType: "font-awesome" },
  
]
export default footerItems;
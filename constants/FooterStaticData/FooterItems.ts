

interface FooterItemProps {
  title: string,
  iconName: string,
  iconType: string,
  path: string, 
}

const footerItems: FooterItemProps[] = [
  { title: "Home", iconName: "home", iconType: "material", path: "/" }, 
  { title: "Explore", iconName: "explore", iconType: "material", path: "/Explore" },
  { title: "Favorite", iconName: "favorite", iconType: "material", path: "/Favourite" },
  { title: "Profile", iconName: "person", iconType: "material", path: "/NewsStand" },
  
]
export default footerItems;
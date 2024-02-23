// newsCategories.ts
// From Chatgpt
export interface NewsCategory {
  category_id: number;
  category_name: string;
}

const newsCategories: NewsCategory[] = [
  { category_id: 1, category_name: "Business" },
  { category_id: 2, category_name: "Crime" },
  { category_id: 4, category_name: "Education" },
  { category_id: 5, category_name: "Entertainment" },
  { category_id: 6, category_name: "Environment" },
  { category_id: 8, category_name: "Health" },
  { category_id: 11, category_name: "Politics" },
  { category_id: 12, category_name: "Science" },
  { category_id: 13, category_name: "Sports" },
  { category_id: 14, category_name: "Technology" },
  { category_id: 17, category_name: "World" }
]



export default newsCategories;

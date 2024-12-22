import { CategoryType } from "../types/types";

const CATEGORY_API_URL = "https://opentdb.com/api_category.php";

export const fetchCategoryApi = async (): Promise<CategoryType[]> => {
  const response = await fetch(`${CATEGORY_API_URL}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch category, Status: ${response.status}`);
  }
  const data = await response.json();
  console.log("API response data:", data); // Check the API response
  return data.trivia_categories; // Adjust if the data structure is different
};


import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryType, CategoryState } from "@/types/types";

const initialState: CategoryState = {
  categories: [] as CategoryType[],
  isLoading: false,
  error: null,
};

const CategorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    fetchCategory: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    fetchCategorySuccess: (state, action: PayloadAction<CategoryType[]>) => {
      state.categories = action.payload;
      state.isLoading = false;
      state.error = null;
    },

    fetchCategoryFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload; 
    },
  },
});

export const {
    fetchCategory,
    fetchCategorySuccess,
    fetchCategoryFailure
} = CategorySlice.actions

export default CategorySlice.reducer



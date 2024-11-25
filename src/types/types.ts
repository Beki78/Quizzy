export interface CategoryType {
  id: number;
  name: string;
}

export interface CategoryState {
  categories: CategoryType[];
  isLoading: boolean;
  error: string | null;
}

export interface RootState {
  category: CategoryState;
}
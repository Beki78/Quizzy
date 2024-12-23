import { call, put, takeEvery, all } from "redux-saga/effects";
import {
  fetchCategory,
  fetchCategorySuccess,
  fetchCategoryFailure,
} from "./categoriesSlice";
import { fetchCategoryApi } from "@/api/api";
import { CategoryType } from "@/types/types";

export function* fetchCategorySaga() {
  try {
    const category: CategoryType[] = yield call(fetchCategoryApi);
    console.log("Fetched categories from API:", category); // Check API response in saga
    yield put(fetchCategorySuccess(category));
  } catch (error) {
    console.error("Saga error:", error); // Log errors
    yield put(fetchCategoryFailure((error as Error).message));
  }
}


function* watchFetchCategorySaga() {
  yield takeEvery(fetchCategory.type, fetchCategorySaga);
}

export default function* rootSaga() {
  yield all([watchFetchCategorySaga]);
}

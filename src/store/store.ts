import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../features/rootReducer";
import rootSaga from "../features/categories/categoriesSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
console.log("Initial Store State:", store.getState());
sagaMiddleware.run(rootSaga);

export default store;

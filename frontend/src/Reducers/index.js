import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit"; // Import from Redux Toolkit
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import blogDataReducer from "./blogDataReducer";
import categoryDataReducer from "./categoryDataReducer";
import mainDataReducer from "./mainDataReducer";

const rootReducer = combineReducers({
  mainDatas: mainDataReducer,
  blogDatas: blogDataReducer,
  categoryDatas: categoryDataReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: composeWithDevTools(),
});

export default store;
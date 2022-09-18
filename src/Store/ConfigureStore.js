import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";

const rootReducer = combineReducers({
  userReducer,
});

const setupStore = (preloadedState) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export default setupStore;

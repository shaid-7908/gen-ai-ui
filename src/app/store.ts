import { configureStore } from "@reduxjs/toolkit";
import someFeatureReducer from "../features/somefeatures/someFeatureSlice";

export const store = configureStore({
  reducer: {
    someFeature: someFeatureReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import entitiesReducer from "./entities";
import uireducers from "./uireducers";

export const store = configureStore({
  reducer: {
    entities: entitiesReducer,
    uielements: uireducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

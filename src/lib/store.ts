import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "@/components/storage"; // Custom storage
import productsReducer from "./features/products/productsSlice";
import cartsReducer from "./features/carts/cartsSlice";

// Redux Persist Configuration
const persistConfig = {
  key: "root",
  storage,
  version: 1,
  whitelist: ["carts"], // Only persist the `carts` slice
};

// Combine all reducers
const rootReducer = combineReducers({
  products: productsReducer,
  carts: cartsReducer,
});

// Apply persistence to the root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Function to configure the store
export const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development mode
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // Disable serializable check for Redux Persist
      }),
  });

  const persistor = persistStore(store); // Create a persistor linked to the store
  return { store, persistor };
};

// Create the store instance
const store = makeStore().store;

// Type definitions for better TypeScript support
export type AppStore = typeof store; // Store type
export type RootState = ReturnType<typeof store.getState>; // Root state type
export type AppDispatch = typeof store.dispatch; // Dispatch type

export { store };

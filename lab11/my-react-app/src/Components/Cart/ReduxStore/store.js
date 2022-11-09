import { createStore, legacy_createStore } from "redux";

import { hotelsReducer } from "./reducers";

// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import { combineReducers } from "redux";

// const persistConfig = {
//   key: "root",
//   storage: storage,
// };
// const rootReducer = combineReducers({ hhreducer: hotelsReducer });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = legacy_createStore(hotelsReducer);
export const store = createStore(hotelsReducer);

// const store = configureStore({
//   reducer: persistedReducer,
// });

// export const persistor = persistStore(store);
// export default store;

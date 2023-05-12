import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const persistConfig = {
  key: "root",
  storage,
  whitelist: ["allUsers"],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export default store;

import cartReducer from "../reducers/cart-reducer";
import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import userReducer from "./user_Reducer";

const rootReducer = combineReducers({ cartReducer, userReducer });
const presistConfig = {
  key: "__ttyfd",
  storage,
};

const persistReduce = persistReducer(presistConfig, rootReducer);

export const store = legacy_createStore(persistReduce);
export let persistor = persistStore(store);

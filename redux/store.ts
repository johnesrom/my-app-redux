import { createStore } from "redux";
import rootReducer from './root-redux';
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// ajuste a chave do reducer conforme seu combineReducers (ex.: 'user')
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"], // quais fatias do estado salvar
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
import {combineReducers, createStore} from "redux";
import {loadingReducer} from "../HomeWork10/loadingReducer";
import {themeReducer} from "../HomeWork12/themeReducer";

const reducers = combineReducers({
    loading: loadingReducer,
    currentTheme: themeReducer
});

const store = createStore(reducers);

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev

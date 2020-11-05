import React from 'react'
import {Provider} from 'react-redux'
import {combineReducers, createStore} from 'redux'
import {AppStoreType} from "../app/store";
import {themeReducer} from './themeReducer';


//decorator это как HOC, оборачивает сторисы, в данном случае в провайдер

const rootReducer = combineReducers({
    currentTheme: themeReducer
})

const initialGlobalState = {
    currentTheme: {currentTheme: "dark"}
};

export const storyBookStore = createStore(rootReducer, initialGlobalState);
//передаем в Provider не глобальный store(store.ts), а storyBookStore
export const ReduxStoreProviderDecorator = (storyFn: any) => (
  <Provider
    store={storyBookStore}>{storyFn()}
  </Provider>)

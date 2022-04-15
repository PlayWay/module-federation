//Store
import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
/**
 * Инциализация стора
 * @param reducer rootReducer
 * @param middleware
 * @param args
 */
export const initStore = ({reducer={},middleware=[],...args}) => {
  return configureStore({
    reducer,
    middleware: [thunk,...middleware],
    devTools: process.env.NODE_ENV !== 'production',
    ...args
  })
}





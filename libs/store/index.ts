import { createStore, applyMiddleware, Middleware, StoreEnhancer } from "redux";
import rootReducer from "./reducers";
import { MakeStore, createWrapper, Context } from "next-redux-wrapper";
import { AnyAction, Store, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
//     if (process.env.NODE_ENV !== "production") {
//         const { composeWithDevTools } = require("redux-devtools-extension");
//         return composeWithDevTools(applyMiddleware(...middleware));
//     }
//     return applyMiddleware(...middleware);
// };

// const makeStore: MakeStore<Store<any, AnyAction>> = () => {
//     const store = createStore(rootReducer, {}, bindMiddleware([]));
//     return store;
// };

const makeStore = (context: Context) =>
    configureStore({
        reducer: rootReducer,
        middleware: [],
        devTools: process.env.NODE_ENV !== "production",
    });

export const wrapper = createWrapper<Store<any, AnyAction>>(makeStore, { debug: true });

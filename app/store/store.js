import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { transactionSlice } from "./transactionSlice";
let baraReducer = combineReducers({
    transactionSlice:transactionSlice.reducer,
    });
    export let meraStore =  configureStore({
        reducer:baraReducer
    });
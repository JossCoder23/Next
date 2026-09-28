import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// use throughout your app instead of plain `useDispatch` and `useSelecotr`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
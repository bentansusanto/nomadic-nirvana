import { configureStore } from "@reduxjs/toolkit";
import DestinationSlice from "../slice/DestinationSlice";

export function makeStore(){
    return configureStore({
        reducer : {
            destination : DestinationSlice
        }
    })
}

export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
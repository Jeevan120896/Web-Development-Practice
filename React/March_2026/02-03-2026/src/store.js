import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

//creating redux store
export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

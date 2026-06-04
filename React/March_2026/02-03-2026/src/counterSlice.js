import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name:"counter",
        
    //initial state inside store/
    initialState: {value: 0},
    reducers: {
        //Reducer function increment
        increment: (state) => {
            state.value += 1;
        },

        //Reducer function decrement
        decrement: (state) => {
            state.value -=1;
        }
    }
});

//export actions used in App.js
export const { increment, decrement } = counterSlice.actions;
//export reducer used in store.js
export default counterSlice.reducer;
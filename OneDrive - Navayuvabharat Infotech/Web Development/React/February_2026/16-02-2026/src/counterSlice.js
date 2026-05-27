import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    message: "",
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { increment, setMessage } = counterSlice.actions;
export default counterSlice.reducer;

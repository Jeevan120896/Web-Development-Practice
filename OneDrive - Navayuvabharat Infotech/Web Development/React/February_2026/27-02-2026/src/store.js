import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./ProductSlice";

const store = configureStore({
  reducer: {
    products: productsReducer, // This name "products" is used in useSelector
  },
});

export default store;
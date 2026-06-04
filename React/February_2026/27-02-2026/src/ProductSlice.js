import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [] 
};

const productSlice = createSlice({
  name: "products", // The name inside the slice stays "products"
  initialState,
  reducers: {
    addProducts: (state) => {
      state.products = [
        { id: 1, name: "Laptop", price: 50000, qty: 0 },
        { id: 2, name: "Mobile", price: 20000, qty: 0 },
        { id: 3, name: "Headphones", price: 2500, qty: 0 },
        { id: 4, name: "Keyboard", price: 1500, qty: 0 },
        { id: 5, name: "Mouse", price: 800, qty: 0 }
      ];
    },
    incrementQty: (state, action) => {
      const product = state.products.find(p => p.id === action.payload);
      if (product) product.qty += 1;
    },
    decrementQty: (state, action) => {
      const product = state.products.find(p => p.id === action.payload);
      if (product && product.qty > 0) product.qty -= 1;
    },
  },
});

export const { addProducts, incrementQty, decrementQty } = productSlice.actions;
export default productSlice.reducer;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, incrementQty, decrementQty } from "./ProductSlice"; // Updated path


function App() {
  const dispatch = useDispatch();
  // We use state.products because that's the key we set in store.js
  const productsList = useSelector((state) => state.products.products) || [];

  return (
    <div style={{ padding: "20px" }}>
      <h1>ShopEase</h1>
      <button onClick={() => dispatch(addProducts())}>Load Products</button>
      
      <div style={{ marginTop: "20px" }}>
        {productsList.map((product) => (
          <div key={product.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            {product.name} - Qty: {product.qty}
            <button onClick={() => dispatch(incrementQty(product.id))}>+</button>
            <button onClick={() => dispatch(decrementQty(product.id))}>-</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
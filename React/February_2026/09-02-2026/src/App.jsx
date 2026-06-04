import './App.css'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addProducts, incrementQty, decrementQty } from './productSlice'

function App() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.products) || [];

  // Logic to calculate totals
  const totalItems = productsList.reduce((sum, item) => sum + item.qty, 0);
  const totalAmount = productsList.reduce((sum, item) => sum + (item.qty * item.price), 0);

  return (
    <div className="app">
      <h1>ShopEase</h1>
      
      {/* Load Button */}
      <div style={{ textAlign: 'center' }}>
        <button className="load-btn" onClick={() => dispatch(addProducts())}>
          Load Inventory
        </button>
      </div>

      {/* Summary Section */}
      <div className="cart-summary">
        <div className="summary-card">
          <span>Items in Cart: <strong>{totalItems}</strong></span>
          <span>Total Amount: <strong>₹{totalAmount.toLocaleString()}</strong></span>
        </div>
      </div>

      <div className="products">
        {productsList.map((product) => (
          <div className="product" key={product.id}>
            <div>
              <strong>{product.name}</strong><br />
              <span className="price">Price: ₹{product.price}</span><br />
              <span className="qty-label">In Cart: {product.qty}</span>
            </div>

            <div className="controls">
              {/* Note: I swapped the order so + is on the right, which is more standard */}
             
              <button onClick={() => dispatch(incrementQty(product.id))}>+</button>
               <button onClick={() => dispatch(decrementQty(product.id))}>-</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import { replaceUser } from './api';

export default function Put() {
  const handlePut = async () => {
    try {
      const res = await replaceUser(1, { name: "Jeevan" });
      console.log("PUT Success:", res.data);
      alert(`PUT Success: ${res.data.name}`);
    } catch (err) {
      console.error("PUT Error", err);
    }
  };

  return (
    <div>
      <h3>PUT Action</h3>
      <button onClick={handlePut}>Put Button</button>
    </div>
  );
}
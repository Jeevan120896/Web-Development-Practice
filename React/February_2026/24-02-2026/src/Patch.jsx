import React from 'react';
import { updateUser } from './api';

export default function Patch() {
  const handlePatch = async () => {
    try {
      const res = await updateUser(1, { name: "Jeevan Kumar" });
      console.log("PATCH Success:", res.data);
      alert(`PATCH Success: ${res.data.name}`);
    } catch (err) {
      console.error("PATCH Error", err);
    }
  };

  return (
    <div>
      <h3>PATCH Action</h3>
      <button onClick={handlePatch}>Patch Button</button>
    </div>
  );
}
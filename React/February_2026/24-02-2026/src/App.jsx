import React, { useState } from 'react';
import { getUsers } from './api';

export default function App() {
  const [users, setUsers] = useState([]);

  const handleGet = async () => {
    try {
      const res = await getUsers();
      setUsers(res.data);
    } catch (err) {
      console.error("Fetch failed", err);
    }
  };

  const handleClear = () => setUsers([]);

  return (
    <div>
      <h1>User Dashboard</h1>
      <button onClick={handleGet}>Fetch Users</button>
      <button onClick={handleClear}>Clear Users</button>

      {users.length === 0 ? (
        <></>
      ) : (
        <ul>
          {users.map(u => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
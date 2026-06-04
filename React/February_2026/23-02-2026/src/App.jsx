import { useEffect, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);

  // GET
  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  // POST
  const handlePost = async () => {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Jeevan",
        email: "jeevankumar@gmail.com"
      })
    });

    const newUser = await res.json();

    // update UI manually
    setUsers(prev => [...prev, newUser]);
  };

  // PUT
  const handlePut = async () => {
    const res = await fetch(`${BASE_URL}/1`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: 1,
        name: "Vankayalapati Jeevan Kumar",
        email: "Jeeavnkumar120896@mail.com"
      })
    });

    const updatedUser = await res.json();

    setUsers(prev =>
      prev.map(user => user.id === 1 ? updatedUser : user)
    );
  };

  // PATCH
  const handlePatch = async () => {
    const res = await fetch(`${BASE_URL}/1`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "V Jeevan Kumar"
      })
    });

    const updatedUser = await res.json();

    setUsers(prev =>
      prev.map(user =>
        user.id === 1 ? { ...user, ...updatedUser } : user
      )
    );
  };

  // DELETE
  const handleDelete = async () => {
    await fetch(`${BASE_URL}/1`, {
      method: "DELETE"
    });

    setUsers(prev => prev.filter(user => user.id !== 1));
  };

  return (
    <div>
      <h2>Users List</h2>

      <button onClick={handlePost}>POST</button>
      <button onClick={handlePut}>PUT</button>
      <button onClick={handlePatch}>PATCH</button>
      <button onClick={handleDelete}>DELETE</button>

      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default App;
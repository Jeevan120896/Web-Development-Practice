// App.jsx
import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

// ---------------- HOME PAGE ----------------
function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  // API CALL (HTTP Request)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // useMemo -> filter users only when users/search changes
  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  // useCallback -> function reference stays same
  const handleView = useCallback(
    (id) => {
      navigate(`/user/${id}`);
    },
    [navigate]
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>React All Concepts Example</h1>

      {/* EVENT BINDING */}
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", marginBottom: "20px" }}
      />

      {/* LIST RENDERING */}
      {filteredUsers.map((user) => {
        // DESTRUCTURING
        const { id, name, email } = user;

        return (
          <div
            key={id}
            style={{
              border: "1px solid gray",
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <h3>{name}</h3>
            <p>{email}</p>

            {/* EVENT BINDING */}
            <button onClick={() => handleView(id)}>
              View Details
            </button>
          </div>
        );
      })}
    </div>
  );
}

// ---------------- USER DETAILS PAGE ----------------
function UserDetails() {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  // API CALL
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <h2>Loading...</h2>;

  // DESTRUCTURING
  const { name, email, phone, website } = user;

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Details</h2>

      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Website:</strong> {website}</p>

      {/* REACT ROUTING */}
      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
}

// ---------------- APP ROUTING ----------------
export default function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          background: "#222",
          padding: "10px",
        }}
      >
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
      </nav>

      <Routes>
        {/* REACT ROUTING */}
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
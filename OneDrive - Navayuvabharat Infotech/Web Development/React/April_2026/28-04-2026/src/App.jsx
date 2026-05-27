import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext
} from "react";

// Context API
const ThemeContext = createContext();

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  // Refs
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // API Call
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  //  Filter (extra improvement)
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div
        style={{
          background: darkMode ? "#222" : "#fff",
          color: darkMode ? "#fff" : "#000",
          padding: "20px",
          minHeight: "100vh"
        }}
      >
        <ThemeToggle />

        <h1>User Management</h1>

        {/*  Ref usage */}
        <button onClick={() => inputRef.current.focus()}>
          Focus Search
        </button>
        <button onClick={() => listRef.current.scrollIntoView()}>
          Scroll to List
        </button>

        <input
          ref={inputRef}
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* List Rendering */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div ref={listRef}>
            <h2>Users ({filteredUsers.length})</h2>

            {filteredUsers.map(user => {
              // ✂️ Destructuring
              const { id, name, email, phone } = user;

              return (
                <UserCard
                  key={id}
                  name={name}
                  email={email}
                  phone={phone}
                />
              );
            })}
          </div>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

//  Child Component
function UserCard({ name, email, phone }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px 0",
        padding: "10px",
        background: darkMode ? "#333" : "#f9f9f9"
      }}
    >
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
}

//  Context Consumer
function ThemeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      Toggle {darkMode ? "Light" : "Dark"}
    </button>
  );
}

export default App;
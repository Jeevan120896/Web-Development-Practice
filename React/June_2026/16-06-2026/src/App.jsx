import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense, useState } from "react";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div>
        <h1>React Concepts Demo</h1>

        <h3>Counter: {count}</h3>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>

        <hr />

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link>
        </nav>

        <hr />

        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
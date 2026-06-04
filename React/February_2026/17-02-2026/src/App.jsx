import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import A from "./A";
import B from "./B";
import "./App.css";

function App() {
  const [showB, setShowB] = useState(false);

  return (
    <div className="container">
      <Header />

      <main className="main">
        {showB ? (
          <B goToA={() => setShowB(false)} />
        ) : (
          <A goToB={() => setShowB(true)} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;

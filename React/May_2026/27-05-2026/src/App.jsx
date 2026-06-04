import React, {
  useState,
  useRef,
  lazy,
  Suspense,
} from "react";

import { createPortal } from "react-dom";

const Profile = lazy(() => import("./Profile"));

function Modal({ close }) {
  return createPortal(
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Portal Modal</h2>

        <button
          onClick={close}
          style={styles.button}
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
}

function App() {
  const [showProfile, setShowProfile] =
    useState(false);

  const [showModal, setShowModal] =
    useState(false);

  const inputRef = useRef();

  return (
    <div style={styles.container}>
      <h1>React Concepts</h1>

      {/* Refs */}

      <div style={styles.card}>
        <h2>Refs</h2>

        <input
          ref={inputRef}
          placeholder="Type here"
          style={styles.input}
        />

        <button
          style={styles.button}
          onClick={() =>
            inputRef.current.focus()
          }
        >
          Focus Input
        </button>
      </div>

      {/* Lazy Loading */}

      <div style={styles.card}>
        <h2>Lazy Loading</h2>

        <button
          style={styles.button}
          onClick={() =>
            setShowProfile(true)
          }
        >
          Load Profile
        </button>

        <Suspense fallback={<h3>Loading...</h3>}>
          {showProfile && <Profile />}
        </Suspense>
      </div>

      {/* Portal */}

      <div style={styles.card}>
        <h2>Portals</h2>

        <button
          style={styles.button}
          onClick={() =>
            setShowModal(true)
          }
        >
          Open Modal
        </button>

        {showModal && (
          <Modal
            close={() =>
              setShowModal(false)
            }
          />
        )}
      </div>

      {/* Fiber */}

      <div style={styles.card}>
        <h2>React Fiber</h2>

        <p>
          React Fiber improves rendering
          and prioritizes UI updates.
        </p>
      </div>

      {/* Webpack */}

      <div style={styles.card}>
        <h2>Webpack</h2>

        <p>
          Webpack bundles JS/CSS files into
          optimized bundles.
        </p>
      </div>

      {/* Build */}

      <div style={styles.card}>
        <h2>Build React App</h2>

        <pre>npm run build</pre>
      </div>

      {/* Deploy */}

      <div style={styles.card}>
        <h2>Deploy React App</h2>

        <p>Use Vercel or Netlify.</p>
      </div>
    </div>
  );
}

export default App;

const styles = {
  container: {
    padding: "30px",
    fontFamily: "Arial",
    background: "#f4f4f4",
    minHeight: "100vh",
  },

  card: {
    background: "white",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "10px",
  },

  button: {
    background: "blue",
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    marginTop: "10px",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
  },

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
  },
};
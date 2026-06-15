import { createPortal } from "react-dom";

function Portals() {
  return createPortal(
    <div
      style={{
        background: "lightblue",
        padding: "20px",
        border: "2px solid blue",
        marginTop: "10px",
      }}
    >
      <h2>Portal Component</h2>
      <p>Rendered outside root element.</p>
    </div>,
    document.getElementById("portal-root")
  );
}

export default Portals;
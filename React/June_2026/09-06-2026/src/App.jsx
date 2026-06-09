import React from "react";

import JSXBasics from "./JSXBasics";
import Components from "./Components";
import PropsExample from "./PropsExample";
import HooksExample from "./HooksExample";
import PropsDrilling from "./PropsDrilling";
import AvoidPropsDrilling from "./AvoidPropsDrilling";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Concepts Demo</h1>

      <hr />

      {/* JSX Basics */}
      <section>
        <h2>1. JSX Basics</h2>
        <JSXBasics />
      </section>

      <hr />

      {/* Components */}
      <section>
        <h2>2. Components</h2>
        <Components />
      </section>

      <hr />

      {/* Props */}
      <section>
        <h2>3. Props Example</h2>
        <PropsExample />
      </section>

      <hr />

      {/* Hooks */}
      <section>
        <h2>4. React Hooks (useState)</h2>
        <HooksExample />
      </section>

      <hr />

      {/* Props Drilling */}
      <section>
        <h2>5. Props Drilling</h2>
        <PropsDrilling />
      </section>

      <hr />

      {/* Avoid Props Drilling */}
      <section>
        <h2>6. Avoiding Props Drilling (Context API)</h2>
        <AvoidPropsDrilling />
      </section>
    </div>
  );
}

export default App;
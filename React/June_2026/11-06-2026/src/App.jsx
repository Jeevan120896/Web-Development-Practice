import ConditionalRendering from "./ConditionalRendering";
import FragmentExample from "./FragmentExample";
import Profile from "./Profile";
import withMessage from "./withMessage";
import Counter from "./Counter";
import VirtualDOMExample from "./VirtualDOMExample";

const EnhancedProfile = withMessage(Profile);

function App() {
  return (
    <div>
      <h1>Conditional Rendering</h1>
      <ConditionalRendering />

      <hr />

      <h1>Fragments</h1>
      <FragmentExample />

      <hr />

      <h1>Higher Order Component</h1>
      <EnhancedProfile />

      <hr />

      <h1>Custom Hook</h1>
      <Counter />

      <hr />

      <h1>Virtual DOM</h1>
      <VirtualDOMExample />
    </div>
  );
}

export default App;
import Styling from "./Styling.jsx";
import EventBinding from "./EventBinding.jsx";
import ListRendering from "./ListRendering.jsx";
import Destructuring from "./Destructuring.jsx";
import Portals from "./Portals.jsx";

function App() {
  return (
    <div>
      <Styling />
      <EventBinding />
      <ListRendering />
      <Destructuring name="Rahul" age={22} course="React" />
      <Portals />
    </div>
  );
}

export default App;
import StateExample from "./StateExample";
import EventHandling from "./EventHandling";
import DataBinding from "./DataBinding";
import LifecycleExample from "./LifecycleExample";

import ContextExample from "./ContextExample";
import { UserContext } from "./UserContext";

import ReduxExample from "./ReduxExample";

function App() {
  return (
    <div>
      <StateExample />
      <hr />

      <EventHandling />
      <hr />

      <DataBinding />
      <hr />

      <UserContext.Provider value="John">
        <ContextExample />
      </UserContext.Provider>

      <hr />

      <ReduxExample />
      <hr />

      <LifecycleExample />
    </div>
  );
}

export default App;
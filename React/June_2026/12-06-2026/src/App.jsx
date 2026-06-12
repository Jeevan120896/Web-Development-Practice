import User from "./Users";
import Employee from "./Employee";
import ProductList from "./ProductList";
import Search from "./Search";
import Users from "./Users";

function App() {
  return (
    <div>
      <h1>React Concepts Demo</h1>

      <hr />
      <User name="Rahul" />

      <hr />
      <Employee name="John" />

      <hr />
      <ProductList />

      <hr />
      <Search />

      <hr />
      <Users />
    </div>
  );
}

export default App;
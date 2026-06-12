import { useMemo, useState } from "react";

function ProductList() {
  const [search, setSearch] = useState("");

  const products = [
    "Laptop",
    "Mobile",
    "Keyboard",
    "Mouse",
    "Monitor",
  ];

  const filteredProducts = useMemo(() => {
    console.log("Filtering Products");

    return products.filter((product) =>
      product.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <h2>useMemo Example</h2>

      <input
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.map((product, index) => (
        <p key={index}>{product}</p>
      ))}
    </div>
  );
}

export default ProductList;
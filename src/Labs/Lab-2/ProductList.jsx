import React from "react";

function ProductList() {
  const products = ["Laptop", "Smartphone", "Headphones", "Keyboard", "Mouse"];

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

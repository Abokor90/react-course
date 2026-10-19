import { useState } from "react";

function ShoppingList() {
  const [products, setProducts] = useState([
    {id: 1, name: "Bread", price: 10},
    {id: 2, name: "Milk", price: 20},
    {id: 3, name: "Rice", price: 30},
  ]);

  function handleRemove(id) {
    setProducts(products.filter((product) => product.id !== id));
  }

  return (
    <div>
      <h2>Shopping List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}: ${product.price}
            <button onClick={() => handleRemove(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
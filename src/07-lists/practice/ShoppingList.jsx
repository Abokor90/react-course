import { useState } from "react";

function ShoppingList() {
  const [products, setProducts] = useState([
    {id: 1, name: "Bread", price: 10},
    {id: 2, name: "Milk", price: 20},
    {id: 3, name: "Rice", price: 30},
  ]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function handleRemove(id) {
    setProducts(products.filter((product) => product.id !== id));
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  function handleAdd() {
    const newProduct = {id: Date.now(), name: name, price: Number(price)};
    setProducts([...products, newProduct]);
    
    setName("");
    setPrice("");
  }

  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
  

  return (
    <div>
      <h2>Shopping List</h2>
      <input value={name} type="text" onChange={handleNameChange} placeholder="Enter new product name"/>
      <input value={price} type="number" onChange={handlePriceChange} placeholder="Enter new price" />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}: ${product.price}
            <button onClick={() => handleRemove(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice}</p>
    </div>
  );
}

export default ShoppingList;
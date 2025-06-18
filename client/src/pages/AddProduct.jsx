// AddProduct.jsx
import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://vitecost-project-2.onrender.com/api/products/createproduct", {
        name,
        image,
        price,
        description,
      })
      .then((res) => {
        alert("Product created sucessfully");
        // reset form
        setName("");
        setImage("");
        setPrice("");
        setDescription("");
      })
      .catch((err) => {
        console.log("Error creating product", err);
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <br />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder="Description"   
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;

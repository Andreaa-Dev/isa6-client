import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

// protocol: http
// method:
// endpoint:
export type Product = {
  id: number;
  productName: string;
  price: number;
  image: string;
};
function App() {
  const url = "http://localhost:8000/products";

  const [products, setProducts] = useState<Product[]>([]);
  console.log(products, "list");

  function fetchData() {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setProducts(data));
  }

  useEffect(() => {
    fetchData();
  }, []);
  return <div className="App"></div>;
}

export default App;

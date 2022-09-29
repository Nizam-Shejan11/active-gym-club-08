import React, { useEffect, useState } from "react";
import logo from "../../images/logo.svg";
import List from "../List/List";
import Product from "../Product/Product";
import "./Card.css";

const Card = () => {
  const [products, setProdutcs] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProdutcs(data));
  }, []);

  const handleAddToList = (product) => {
    const newList = [...list, product];
    setList(newList);
  };

  return (
    <div className="main-container">
      <div className="left-container">
        <div className="gym-name">
          <h1>Active GYM Club</h1>
        </div>
        <div className="product-container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToList={handleAddToList}
            ></Product>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <List list={list}></List>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import "./Card.css";

const Card = (props) => {
  const { img, title, details, age, time } = props.allDetail;
  return (
    <div className="card">
      <img src={img} alt="" />
    </div>
  );
};

export default Card;

import React from "react";
import "./Card.css";

const Card = (props) => {
  const { img, title, details, age, time } = props.allDetail;
  return (
    <div className="card">
      <img src={img} alt="" />
      <h5 className="title">{title}</h5>
      <p>{details.slice(0, 50)}</p>
      <p>For Age: {age}</p>
      <p>Duration: {time}</p>
      <button
        onClick={() => props.handleAddToList(props.allDetail)}
        className="btn"
      >
        <p className="btn-text">Add to list</p>
      </button>
    </div>
  );
};

export default Card;

import React, { useEffect, useState } from "react";
import "./Activitys.css";
import Card from "./Card/Card";

const Activitys = () => {
  const [allDetails, setAllDetails] = useState([]);

  useEffect(() => {
    fetch("allDetails.json")
      .then((res) => res.json())
      .then((data) => setAllDetails(data));
  }, []);

  return (
    <div className="activity-container">
      <div className="exercise-container">
        <h1>ULTRA-ACTIVE-CLUB</h1>
        <div className="all-exercise">
          {allDetails.map((allDetail) => (
            <Card key={allDetail?.id} allDetail={allDetail}></Card>
          ))}
        </div>
      </div>
      <div className="details-container">
        <h1>Other-Details</h1>
      </div>
    </div>
  );
};

export default Activitys;

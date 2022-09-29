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

  const handleAddToList = (allDetail) => {
    console.log(allDetail);
  };

  return (
    <div className="activity-container">
      <div className="exercise-container">
        <div className="exercise-heading">
          <h1>ULTRA-ACTIVE-CLUB</h1>
          <h5>Select today’s exercise</h5>
        </div>
        <div className="all-exercise">
          {allDetails.map((allDetail) => (
            <Card
              key={allDetail?.id}
              allDetail={allDetail}
              handleAddToList={handleAddToList}
            ></Card>
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

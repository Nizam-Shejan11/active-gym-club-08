import React from "react";
import "./Calculate.css";

const Calculate = () => {
  return (
    <div className="details-container">
      <div className="self-details">
        <h5 className="name">Nizam Uddin Shejan</h5>
        <p className="area">Bogura</p>
        <div className="self-details1">
          <div>
            <h5 className="h">60kg</h5> <p className="p">Weight</p>
          </div>
          <div>
            <h5 className="h">6.0</h5> <p className="p">Height</p>
          </div>
          <div>
            <h5 className="h">22 yrs</h5> <p className="p">Age</p>
          </div>
        </div>
      </div>
      <div className="break-details">
        <h5 className="break-title">Add A Break</h5>
        <div className="break-details1">
          <button className="break-btn">10s</button>
          <button className="break-btn">15s</button>
          <button className="break-btn">20s</button>
          <button className="break-btn">25s</button>
        </div>
      </div>
      <div className="exercise-details">
        <h5>Exercise Details</h5>
        <div className="exercise-time-field">
          <p>Exercise time:</p>
          <p>000 seconds</p>
        </div>
        <div className="break-time-field">
          <p>Break time:</p>
          <p>000 seconds</p>
        </div>
      </div>
      <div>
        <button className="completed-btn">Activity Completed</button>
      </div>
    </div>
  );
};

export default Calculate;

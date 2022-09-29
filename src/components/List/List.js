import React, { useEffect, useState } from "react";
import Calculation from "../Calculation/Calculation";
import "./List.css";

const List = (props) => {
  const [item, setItem] = useState([]);
  const [time, setTime] = useState([0]);
  useEffect(() => {
    fetch("time.json")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const { list } = props;
  let totalTime = 0;
  for (const item of list) {
    totalTime = totalTime + item.time;
    // setting time in local storage
    localStorage.setItem("time", totalTime);
  }

  let newTime = 0;
  const handleBreakTime = (mytime) => {
    newTime = mytime;
    setTime(newTime);
    // setting time in local storage
    localStorage.setItem("breakTime", newTime);
  };
  return (
    <div className="list">
      <div className="my-info">
        <img src="../../images/bogura-gym-logo.jpg" alt="Logo" />
        <div>
          {/* change this name */}
          <h3>Nizam Uddin Shejan</h3>
          <p>Silimpur,Dhaka</p>
        </div>
      </div>
      <div>
        <table className="table-1">
          <tbody>
            <tr>
              <td>
                <h3>65kg</h3>
              </td>
              <td>
                <h3>6.0</h3>
              </td>
              <td>
                <h3>20yrs</h3>
              </td>
            </tr>
            <tr>
              <td>
                <p>Weight</p>
              </td>
              <td>
                <p>Height</p>
              </td>
              <td>
                <p>Age</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h2>Break</h2>
      </div>
      <div>
        <div className="break-time-list">
          {item.map((items) => (
            <Calculation
              key={items.id}
              time={items.time}
              handleBreakTime={handleBreakTime}
            ></Calculation>
          ))}
        </div>
      </div>
      <h2>Details</h2>
      {/* getting time from local storage */}
      <h4>
        Excercise Time:{" "}
        {localStorage.getItem("time") ? localStorage.getItem("time") : 0} sec
      </h4>
      <h4>
        Break Time:{" "}
        {localStorage.getItem("breakTime")
          ? localStorage.getItem("breakTime")
          : 0}
        sec
      </h4>
      <button className="acticity-btn">
        <p>Activity Completed</p>
      </button>
    </div>
  );
};

export default List;

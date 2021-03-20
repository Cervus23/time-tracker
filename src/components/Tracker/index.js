import React from "react";
// import moment from "moment";

import "./style.scss";

const Tracker = ({ active, name, time }) => {
  return (
    <div className={`tracker-container ${active ? "active" : ""}`}>
      <div className="tracker-info">
        <span className="tracker-name">{name}</span>
        <span className="tracker-time">{time}</span>
      </div>
      <div className="btns">
        <button className={`btn ${active ? "pause" : "play"}`} />
        <button className="btn remove-tracker" />
      </div>
    </div>
  );
};

export default Tracker;

import React from "react";
import "./style.scss";

const Tracker = ({ active, name }) => {
  return (
    <div className={`tracker-container ${active ? "active" : ""}`}>
      <div className="tracker-info">
        <span className="tracker-name">{name}</span>
        <span className="tracker-time">00:00:00</span>
      </div>
      <div className="btns">
        <button className={`btn ${active ? "pause" : "play"}`} />
        <button className="btn remove-tracker" />
      </div>
    </div>
  );
};

export default Tracker;

import React from "react";
import Input from "../../components/Input";
import Tracker from "../../components/Tracker";
import "./style.scss";

const TrackerBox = () => {
  return (
    <div className="tracker-box">
      <h1 className="title">tracker</h1>
      <Input />
      <Tracker active={true} name={"tracker #1"} />
      <Tracker active={true} name={"tracker #2"} />
      <Tracker
        active={false}
        name={"very very very very long named tracker #3"}
      />
    </div>
  );
};

export default TrackerBox;

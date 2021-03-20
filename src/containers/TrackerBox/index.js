import React from "react";
import { connect } from "react-redux";
// import { setTime, setName } from "../../store/actions";
import Input from "../../components/Input";
import Tracker from "../../components/Tracker";
// import moment from "moment";
import "./style.scss";

const TrackerBox = ({ trackers }) => {
  return (
    <div className="tracker-box">
      <h1 className="title">tracker</h1>
      <Input />
      {trackers.map((tracker, idx) => (
        <Tracker
          name={tracker.name}
          time={tracker.time}
          active={true}
          key={idx}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({ time, trackers, isCreate }) => ({
  time,
  trackers,
  isCreate,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TrackerBox);

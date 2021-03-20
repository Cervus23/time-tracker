import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import {
  // setName,
  setCurrentName,
  clearCurrentName,
  triggerCreate,
  createTracker,
} from "../../store/actions";
import "./style.scss";

const Input = ({ currentName, createTracker, setCurrentName }) => {
  const onChangeHandler = (event) => {
    setCurrentName(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    currentName.length
      ? createTracker(currentName, moment().format("h:mm:ss"))
      : createTracker(
          moment().format("MMMM Do YYYY"),
          moment().format("h:mm:ss")
        );
  };
  return (
    <form className="create-tracker" onSubmit={onSubmitHandler}>
      <input
        type="text"
        className="tracker-name"
        placeholder="Enter tracker name"
        value={currentName}
        onChange={onChangeHandler}
      />
      <input type="submit" value="" className="create-btn" />
    </form>
  );
};

const mapStateToProps = ({ currentName }) => ({
  currentName,
});

const mapDispatchToProps = (dispatch) => ({
  createTracker: (name, time) => {
    dispatch(createTracker({ name: name, time: time }));
    dispatch(clearCurrentName());
    dispatch(triggerCreate());
    dispatch(triggerCreate());
  },
  setCurrentName: (currentName) => {
    dispatch(setCurrentName(currentName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);

import React from "react";
import "./style.scss";

const Input = () => {
  return (
    <form className="create-tracker">
      <input
        type="text"
        className="tracker-name"
        placeholder="Enter tracker name"
      />
      <input type="submit" value="" className="create-btn" />
    </form>
  );
};

export default Input;

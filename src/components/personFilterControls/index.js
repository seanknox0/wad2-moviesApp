import React, { useContext } from "react";
import "./personFilter.css";

const PersonFilterControls = props => {
  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };

  const handleTextChange = e => {
    handleChange(e, "name", e.target.value);
  };

  return (
    <div className="row bg-success">
      <div className="col-md-12">
        <h4>
          <span>Search for a Person: </span>
          <input
            type="text"
            placeholder="Name Search"
            onChange={handleTextChange}
          />
        </h4>
      </div>
    </div>
  );
};

export default PersonFilterControls;
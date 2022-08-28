import React from 'react';
import './assignPopup.css';

function AssignPopup3(props) {
  return props.isAssignClicked ? (
    <div className="popup-mainContainer">
      <div className="popup-subContainer">
        <button
          onClick={() => props.setIsAssignClicked(false)}
          className="closeButton-style"
        >
          Close
        </button>
        <h1 className="heading-style">Assign to</h1>
        <div>
          <label className="label-style">User Name or Email ID:</label>
          <input className="input-style" type="text" />
        </div>
        <div className="assignButton-container">
          <button className="assignButton-style">Assign</button>
        </div>
      </div>
    </div>
  ) : null;
}

export default AssignPopup3;

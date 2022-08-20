import React, { useState } from "react";
import "./c3-style.css";

function Criteria3() {
  const [screenStatus, setScreenStattus] = useState(false);

  function onClickingSubCriteria() {
    setScreenStattus(!screenStatus);
  }

  return (
    <div className="criteria-container">
      <div className="criteria-heading-container">
        <h1 className="criteria-heading-style">
          Research, Innovations and Extensions
        </h1>
      </div>
      <div onClick={onClickingSubCriteria} className="keyIndicators-container">
        <h1 className="keyIndicators-heading-style">
          Promotion of Research and Facilities
        </h1>
        <button className="assign-button-style">Assign</button>
      </div>
      {screenStatus ? (
        <div>
          <button>clicked</button>
        </div>
      ) : null}

      <div className="keyIndicators-container">
        <h1 className="keyIndicators-heading-style">
          Resource Mobilization for Research
        </h1>
        <button className="assign-button-style">Assign</button>
      </div>
      <div className="keyIndicators-container">
        <h1 className="keyIndicators-heading-style">Innovation Ecosystem</h1>
        <button className="assign-button-style">Assign</button>
      </div>
      <div className="keyIndicators-container">
        <h1 className="keyIndicators-heading-style">
          Research Publication and Awards
        </h1>
        <button className="assign-button-style">Assign</button>
      </div>
      <div className="keyIndicators-container">
        <h1 className="keyIndicators-heading-style">Consultancy</h1>
        <button className="assign-button-style">Assign</button>
      </div>
      <div className="keyIndicators-container">
        <h1 className="keyIndicators-heading-style">Extension Activities</h1>
        <button className="assign-button-style">Assign</button>
      </div>
      <div className="keyIndicators-container">
        <h1 className="keyIndicators-heading-style">Collaboration</h1>
        <button className="assign-button-style">Assign</button>
      </div>
    </div>
  );
}

export default Criteria3;

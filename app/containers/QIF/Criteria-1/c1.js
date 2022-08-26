import React, { useState } from 'react';
import Criteria11 from './c11/c11.js';
import Criteria12 from './c12/c12.js';
import Criteria13 from './c13/c13.js';
import Criteria14 from './c14/c14.js';
import './c1-style.css';

function Criteria1() {
  const [screenStatus11, setScreenStatus11] = useState(false);
  const [screenStatus12, setScreenStatus12] = useState(false);
  const [screenStatus13, setScreenStatus13] = useState(false);
  const [screenStatus14, setScreenStatus14] = useState(false);

  function onClicking11() {
    setScreenStatus11(!screenStatus11);
  }
  function onClicking12() {
    setScreenStatus12(!screenStatus12);
  }
  function onClicking13() {
    setScreenStatus13(!screenStatus13);
  }
  function onClicking14() {
    setScreenStatus14(!screenStatus14);
  }

  return (
    <div className="c1-container">
      {/* Criteria Heading */}
      <div className="c1-heading-container">
        <h1 className="c1-heading-style">
          Research, Innovations and Extensions
        </h1>
      </div>

      {/* Key Indicators List */}

      {/* Key Indicator: 1.1 */}
      <div className="c1x-container">
        <div onClick={onClicking11} className="c1x-subContainer">
          <h1 className="c1x-heading-style">
            Promotion of Research and Facilities
          </h1>
          <button className="c1x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus11 ? <Criteria11 /> : null}
      {/* Key Indicator: 1.2 */}
      <div className="c1x-container">
        <div onClick={onClicking12} className="c1x-subContainer">
          <h1 className="c1x-heading-style">
            Resource Mobilization for Research
          </h1>
          <button className="c1x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus12 ? <Criteria12 /> : null}

      {/* Key Indicator: 1.3 */}
      <div className="c1x-container">
        <div onClick={onClicking13} className="c1x-subContainer">
          <h1 className="c1x-heading-style">Innovation Ecosystem</h1>
          <button className="c1x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus13 ? <Criteria13 /> : null}

      {/* Key Indicator: 1.4 */}
      <div className="c1x-container">
        <div onClick={onClicking14} className="c1x-subContainer">
          <h1 className="c1x-heading-style">
            Research Publications and Awards
          </h1>
          <button className="c1x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus14 ? <Criteria14 /> : null}
    </div>
  );
}

export default Criteria1;

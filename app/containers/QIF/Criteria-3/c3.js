import React, { useState } from 'react';
import Criteria31 from './c31/c31.js';
import Criteria32 from './c32/c32.js';
import './c3-style.css';

function Criteria3() {
  const [screenStatus31, setScreenStatus31] = useState(false);
  const [screenStatus32, setScreenStatus32] = useState(false);
  const [screenStatus33, setScreenStatus33] = useState(false);
  const [screenStatus34, setScreenStatus34] = useState(false);
  const [screenStatus35, setScreenStatus35] = useState(false);
  const [screenStatus36, setScreenStatus36] = useState(false);
  const [screenStatus37, setScreenStatus37] = useState(false);

  function onClicking31() {
    setScreenStatus31(!screenStatus31);
  }
  function onClicking32() {
    setScreenStatus32(!screenStatus32);
  }
  function onClicking33() {
    setScreenStatus33(!screenStatus33);
  }
  function onClicking34() {
    setScreenStatus34(!screenStatus34);
  }
  function onClicking35() {
    setScreenStatus35(!screenStatus35);
  }
  function onClicking36() {
    setScreenStatus36(!screenStatus36);
  }
  function onClicking37() {
    setScreenStatus37(!screenStatus37);
  }

  return (
    <div className="criteria3-container">
      {/* Criteria Heading */}
      <div className="criteria3-heading-container">
        <h1 className="criteria3-heading-style">
          Research, Innovations and Extensions
        </h1>
      </div>

      {/* Key Indicators List */}

      {/* Key Indicator: 3.1 */}
      <div className="criteria3-keyIndicator-container">
        <div
          onClick={onClicking31}
          className="criteria3-keyIndicator-subContainer1"
        >
          <h1 className="criteria3-keyIndicator-heading-style">
            Promotion of Research and Facilities
          </h1>
          <button className="criteria3-keyIndicator-assign-button-style">
            Assign
          </button>
        </div>
        {screenStatus31 ? <Criteria31 /> : null}
      </div>

      {/* Key Indicator: 3.2 */}
      <div className="criteria3-keyIndicator-container">
        <div
          onClick={onClicking32}
          className="criteria3-keyIndicator-subContainer1"
        >
          <h1 className="criteria3-keyIndicator-heading-style">
            Promotion of Research and Facilities
          </h1>
          <button className="criteria3-keyIndicator-assign-button-style">
            Assign
          </button>
        </div>
        {screenStatus32 ? <Criteria32 /> : null}
      </div>

      {/* Key Indicator: 3.3 */}
      <div className="criteria3-keyIndicator-container">
        <div
          onClick={onClicking33}
          className="criteria3-keyIndicator-subContainer1"
        >
          <h1 className="criteria3-keyIndicator-heading-style">
            Promotion of Research and Facilities
          </h1>
          <button className="criteria3-keyIndicator-assign-button-style">
            Assign
          </button>
        </div>
        {screenStatus33 ? <Criteria31 /> : null}
      </div>

      {/* Key Indicator: 3.4 */}
      <div className="criteria3-keyIndicator-container">
        <div
          onClick={onClicking34}
          className="criteria3-keyIndicator-subContainer1"
        >
          <h1 className="criteria3-keyIndicator-heading-style">
            Promotion of Research and Facilities
          </h1>
          <button className="criteria3-keyIndicator-assign-button-style">
            Assign
          </button>
        </div>
        {screenStatus34 ? <Criteria31 /> : null}
      </div>

      {/* Key Indicator: 3.5 */}
      <div className="criteria3-keyIndicator-container">
        <div
          onClick={onClicking35}
          className="criteria3-keyIndicator-subContainer1"
        >
          <h1 className="criteria3-keyIndicator-heading-style">
            Promotion of Research and Facilities
          </h1>
          <button className="criteria3-keyIndicator-assign-button-style">
            Assign
          </button>
        </div>
        {screenStatus35 ? <Criteria31 /> : null}
      </div>

      {/* Key Indicator: 3.6 */}
      <div className="criteria3-keyIndicator-container">
        <div
          onClick={onClicking36}
          className="criteria3-keyIndicator-subContainer1"
        >
          <h1 className="criteria3-keyIndicator-heading-style">
            Promotion of Research and Facilities
          </h1>
          <button className="criteria3-keyIndicator-assign-button-style">
            Assign
          </button>
        </div>
        {screenStatus36 ? <Criteria31 /> : null}
      </div>

      {/* Key Indicator: 3.7 */}
      <div className="criteria3-keyIndicator-container">
        <div
          onClick={onClicking37}
          className="criteria3-keyIndicator-subContainer1"
        >
          <h1 className="criteria3-keyIndicator-heading-style">
            Promotion of Research and Facilities
          </h1>
          <button className="criteria3-keyIndicator-assign-button-style">
            Assign
          </button>
        </div>
        {screenStatus37 ? <Criteria31 /> : null}
      </div>
    </div>
  );
}

export default Criteria3;

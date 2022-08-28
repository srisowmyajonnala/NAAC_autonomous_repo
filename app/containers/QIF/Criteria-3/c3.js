import React, { useState } from 'react';
import Criteria31 from './c31/c31.js';
import Criteria32 from './c32/c32.js';
import Criteria33 from './c33/c33.js';
import Criteria34 from './c34/c34.js';
import Criteria35 from './c35/c35.js';
import Criteria36 from './c36/c36.js';
import Criteria37 from './c37/c37.js';
import './c3-style.css';
import AssignPopup3 from './assignPopup.js';

function Criteria3() {
  // state variables
  const [screenStatus31, setScreenStatus31] = useState(false);
  const [screenStatus32, setScreenStatus32] = useState(false);
  const [screenStatus33, setScreenStatus33] = useState(false);
  const [screenStatus34, setScreenStatus34] = useState(false);
  const [screenStatus35, setScreenStatus35] = useState(false);
  const [screenStatus36, setScreenStatus36] = useState(false);
  const [screenStatus37, setScreenStatus37] = useState(false);
  const [assignStatus3, setAssignStatus3] = useState(false);

  // metric screens functionality
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

  // rendering DOM
  return (
    <div className="c3-container">
      {/* Criteria Heading */}
      <div className="c3-heading-container">
        <h1 className="c3-heading-style">
          Research, Innovations and Extensions
        </h1>
        <button
          onClick={() => setAssignStatus3(true)}
          className="cx-assign-button-style"
        >
          Assign
        </button>
        <AssignPopup3
          isAssignClicked={assignStatus3}
          setIsAssignClicked={setAssignStatus3}
        />
      </div>

      {/* Key Indicators List */}

      {/* Key Indicator: 3.1 */}
      <div className="c3x-container">
        <div className="c3x-subContainer">
          <h1 onClick={onClicking31} className="c3x-heading-style">
            3.1: Promotion of Research and Facilities
          </h1>
          <button className="c3x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus31 ? <Criteria31 /> : null}

      {/* Key Indicator: 3.2 */}
      <div className="c3x-container">
        <div className="c3x-subContainer">
          <h1 onClick={onClicking32} className="c3x-heading-style">
            3.2: Resource Mobilization for Research
          </h1>
          <button className="c3x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus32 ? <Criteria32 /> : null}

      {/* Key Indicator: 3.3 */}
      <div className="c3x-container">
        <div className="c3x-subContainer">
          <h1 onClick={onClicking33} className="c3x-heading-style">
            3.3: Innovation Ecosystem
          </h1>
          <button className="c3x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus33 ? <Criteria33 /> : null}

      {/* Key Indicator: 3.4 */}
      <div className="c3x-container">
        <div className="c3x-subContainer">
          <h1 onClick={onClicking34} className="c3x-heading-style">
            3.4: Research Publications and Awards
          </h1>
          <button className="c3x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus34 ? <Criteria34 /> : null}

      {/* Key Indicator: 3.5 */}
      <div className="c3x-container">
        <div className="c3x-subContainer">
          <h1 onClick={onClicking35} className="c3x-heading-style">
            3.5: Consultancy
          </h1>
          <button className="c3x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus35 ? <Criteria35 /> : null}

      {/* Key Indicator: 3.6 */}
      <div className="c3x-container">
        <div className="c3x-subContainer">
          <h1 onClick={onClicking36} className="c3x-heading-style">
            3.6: Extension Activities
          </h1>
          <button className="c3x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus36 ? <Criteria36 /> : null}

      {/* Key Indicator: 3.7 */}
      <div className="c3x-container">
        <div className="c3x-subContainer">
          <h1 onClick={onClicking37} className="c3x-heading-style">
            3.7: Collaboration
          </h1>
          <button className="c3x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus37 ? <Criteria37 /> : null}
    </div>
  );
}

export default Criteria3;

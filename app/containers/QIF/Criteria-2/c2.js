import React, { useState } from 'react';
import Criteria21 from './c21/c21.js';
import Criteria22 from './c22/c22.js';
import Criteria23 from './c23/c23.js';
import Criteria24 from './c24/c24.js';
import Criteria25 from './c25/c25.js';
import Criteria26 from './c26/c26.js';
import Criteria27 from './c27/c27.js';
import './c2-style.css';

function Criteria2() {
  const [screenStatus21, setScreenStatus21] = useState(false);
  const [screenStatus22, setScreenStatus22] = useState(false);
  const [screenStatus23, setScreenStatus23] = useState(false);
  const [screenStatus24, setScreenStatus24] = useState(false);
  const [screenStatus25, setScreenStatus25] = useState(false);
  const [screenStatus26, setScreenStatus26] = useState(false);
  const [screenStatus27, setScreenStatus27] = useState(false);

  function onClicking21() {
    setScreenStatus21(!screenStatus21);
  }
  function onClicking22() {
    setScreenStatus22(!screenStatus22);
  }
  function onClicking23() {
    setScreenStatus23(!screenStatus23);
  }
  function onClicking24() {
    setScreenStatus24(!screenStatus24);
  }
  function onClicking25() {
    setScreenStatus25(!screenStatus25);
  }
  function onClicking26() {
    setScreenStatus26(!screenStatus26);
  }
  function onClicking27() {
    setScreenStatus27(!screenStatus27);
  }
  return (
    <div className="c2-container">
      {/* Criteria Heading */}
      <div className="c2-heading-container">
        <h1 className="c2-heading-style">
          Research, Innovations and Extensions
        </h1>
      </div>

      {/* Key Indicators List */}

      {/* Key Indicator: 2.1 */}
      <div className="c2x-container">
        <div onClick={onClicking21} className="c2x-subContainer">
          <h1 className="c2x-heading-style">
            Promotion of Research and Facilities
          </h1>
          <button className="c2x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus21 ? <Criteria21 /> : null}
      {/* Key Indicator: 2.2 */}
      <div className="c2x-container">
        <div onClick={onClicking22} className="c2x-subContainer">
          <h1 className="c2x-heading-style">
            Resource Mobilization for Research
          </h1>
          <button className="c2x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus22 ? <Criteria22 /> : null}

      {/* Key Indicator: 2.3 */}
      <div className="c2x-container">
        <div onClick={onClicking23} className="c2x-subContainer">
          <h1 className="c2x-heading-style">Innovation Ecosystem</h1>
          <button className="c2x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus23 ? <Criteria23 /> : null}

      {/* Key Indicator: 2.4 */}
      <div className="c2x-container">
        <div onClick={onClicking24} className="c2x-subContainer">
          <h1 className="c2x-heading-style">
            Research Publications and Awards
          </h1>
          <button className="c2x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus24 ? <Criteria24 /> : null}

      {/* Key Indicator: 2.5 */}
      <div className="c2x-container">
        <div onClick={onClicking25} className="c2x-subContainer">
          <h1 className="c2x-heading-style">Innovation Ecosystem</h1>
          <button className="c2x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus25 ? <Criteria25 /> : null}

      {/* Key Indicator: 2.6 */}
      <div className="c2x-container">
        <div onClick={onClicking26} className="c2x-subContainer">
          <h1 className="c2x-heading-style">Innovation Ecosystem</h1>
          <button className="c2x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus26 ? <Criteria26 /> : null}

      {/* Key Indicator: 2.7 */}
      <div className="c2x-container">
        <div onClick={onClicking27} className="c2x-subContainer">
          <h1 className="c2x-heading-style">Innovation Ecosystem</h1>
          <button className="c2x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus27 ? <Criteria27 /> : null}
    </div>
  );
}

export default Criteria2;

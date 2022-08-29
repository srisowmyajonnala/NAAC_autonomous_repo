import React, { useState } from 'react';
import Criteria51 from './c51/c51.js';
import Criteria52 from './c52/c52.js';
import Criteria53 from './c53/c53.js';
import Criteria54 from './c54/c54.js';
import './c5-style.css';

function Criteria5() {
  const [screenStatus51, setScreenStatus51] = useState(false);
  const [screenStatus52, setScreenStatus52] = useState(false);
  const [screenStatus53, setScreenStatus53] = useState(false);
  const [screenStatus54, setScreenStatus54] = useState(false);

  function onClicking51() {
    setScreenStatus51(!screenStatus51);
  }
  function onClicking52() {
    setScreenStatus52(!screenStatus52);
  }
  function onClicking53() {
    setScreenStatus53(!screenStatus53);
  }
  function onClicking54() {
    setScreenStatus54(!screenStatus54);
  }

  return (
    <div className="c5-container">
      {/* Criteria Heading */}
      <div className="c5-heading-container">
        <h1 className="c5-heading-style">
        Student Support and Progression
        </h1>
      </div>

      {/* Key Indicators List */}

      {/* Key Indicator: 5.1 */}
      <div className="c5x-container">
        <div onClick={onClicking51} className="c5x-subContainer">
          <h1 className="c5x-heading-style">
          Student Support
          </h1>
          <button className="c5x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus51 ? <Criteria51 /> : null}
      {/* Key Indicator: 5.2 */}
      <div className="c5x-container">
        <div onClick={onClicking52} className="c5x-subContainer">
          <h1 className="c5x-heading-style">
          Student Progression
          </h1>
          <button className="c5x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus52 ? <Criteria52 /> : null}

      {/* Key Indicator: 5.3 */}
      <div className="c5x-container">
        <div onClick={onClicking53} className="c5x-subContainer">
          <h1 className="c5x-heading-style">IT Infrastructure </h1>
          <button className="c5x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus53 ? <Criteria53 /> : null}

      {/* Key Indicator: 5.4 */}
      <div className="c5x-container">
        <div onClick={onClicking54} className="c5x-subContainer">
          <h1 className="c5x-heading-style">
          Alumni Engagement
          </h1>
          <button className="c5x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus54 ? <Criteria54 /> : null}
    </div>
  );
}

export default Criteria5;

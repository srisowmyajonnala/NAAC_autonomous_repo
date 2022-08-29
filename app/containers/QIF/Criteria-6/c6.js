import React, { useState } from 'react';
import Criteria61 from './c61/c61.js';
import Criteria62 from './c62/c62.js';
import Criteria63 from './c63/c63.js';
import Criteria64 from './c64/c64.js';
import Criteria65 from './c65/c65.js';
import './c6-style.css';

function Criteria6() {
  const [screenStatus61, setScreenStatus61] = useState(false);
  const [screenStatus62, setScreenStatus62] = useState(false);
  const [screenStatus63, setScreenStatus63] = useState(false);
  const [screenStatus64, setScreenStatus64] = useState(false);
  const [screenStatus65, setScreenStatus65] = useState(false);

  function onClicking61() {
    setScreenStatus61(!screenStatus61);
  }
  function onClicking62() {
    setScreenStatus62(!screenStatus62);
  }
  function onClicking63() {
    setScreenStatus63(!screenStatus63);
  }
  function onClicking64() {
    setScreenStatus64(!screenStatus64);
  }
  function onClicking65() {
    setScreenStatus65(!screenStatus65);
  }

  return (
    <div className="c6-container">
      {/* Criteria Heading */}
      <div className="c6-heading-container">
        <h1 className="c6-heading-style">
        Governance, Leadership and Management
        </h1>
      </div>

      {/* Key Indicators List */}

      {/* Key Indicator: 6.1 */}
      <div className="c6x-container">
        <div onClick={onClicking61} className="c6x-subContainer">
          <h1 className="c6x-heading-style">
          Institutional Vision and Leadership
          </h1>
          <button className="c6x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus61 ? <Criteria61 /> : null}
      {/* Key Indicator: 6.2 */}
      <div className="c6x-container">
        <div onClick={onClicking62} className="c6x-subContainer">
          <h1 className="c6x-heading-style">
          Strategy Development and Deployment
          </h1>
          <button className="c6x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus62 ? <Criteria62 /> : null}

      {/* Key Indicator: 6.3 */}
      <div className="c6x-container">
        <div onClick={onClicking63} className="c6x-subContainer">
          <h1 className="c6x-heading-style">Faculty Empowerment Strategies  </h1>
          <button className="c6x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus63 ? <Criteria63 /> : null}

      {/* Key Indicator: 6.4 */}
      <div className="c6x-container">
        <div onClick={onClicking64} className="c6x-subContainer">
          <h1 className="c6x-heading-style">
          Financial Management and Resource Mobilization
          </h1>
          <button className="c6x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus64 ? <Criteria64 /> : null}

      {/* Key Indicator: 6.5 */}
      <div className="c6x-container">
        <div onClick={onClicking65} className="c6x-subContainer">
          <h1 className="c6x-heading-style">
          Internal Quality Assurance System
          </h1>
          <button className="c6x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus65 ? <Criteria65 /> : null}
    </div>
  );
}

export default Criteria6;

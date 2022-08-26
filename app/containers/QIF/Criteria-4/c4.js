import React, { useState } from 'react';
import Criteria21 from './c41/c41.js';
import Criteria22 from './c42/c42.js';
import Criteria23 from './c43/c43.js';
import Criteria24 from './c44/c44.js';
import './c4-style.css';

function Criteria4() {
  const [screenStatus41, setScreenStatus41] = useState(false);
  const [screenStatus42, setScreenStatus42] = useState(false);
  const [screenStatus43, setScreenStatus43] = useState(false);
  const [screenStatus44, setScreenStatus44] = useState(false);

  function onClicking41() {
    setScreenStatus41(!screenStatus41);
  }
  function onClicking42() {
    setScreenStatus42(!screenStatus42);
  }
  function onClicking43() {
    setScreenStatus43(!screenStatus43);
  }
  function onClicking44() {
    setScreenStatus44(!screenStatus44);
  }

  return (
    <div className="c4-container">
      {/* Criteria Heading */}
      <div className="c4-heading-container">
        <h1 className="c4-heading-style">
          Research, Innovations and Extensions
        </h1>
      </div>

      {/* Key Indicators List */}

      {/* Key Indicator: 4.1 */}
      <div className="c4x-container">
        <div onClick={onClicking41} className="c4x-subContainer">
          <h1 className="c4x-heading-style">
            Promotion of Research and Facilities
          </h1>
          <button className="c4x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus41 ? <Criteria41 /> : null}
      {/* Key Indicator: 4.2 */}
      <div className="c4x-container">
        <div onClick={onClicking42} className="c4x-subContainer">
          <h1 className="c4x-heading-style">
            Resource Mobilization for Research
          </h1>
          <button className="c4x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus42 ? <Criteria42 /> : null}

      {/* Key Indicator: 4.3 */}
      <div className="c4x-container">
        <div onClick={onClicking43} className="c4x-subContainer">
          <h1 className="c4x-heading-style">Innovation Ecosystem</h1>
          <button className="c4x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus43 ? <Criteria43 /> : null}

      {/* Key Indicator: 4.4 */}
      <div className="c4x-container">
        <div onClick={onClicking44} className="c4x-subContainer">
          <h1 className="c4x-heading-style">
            Research Publications and Awards
          </h1>
          <button className="c4x-assign-button-style">Assign</button>
        </div>
      </div>
      {screenStatus44 ? <Criteria44 /> : null}
    </div>
  );
}

export default Criteria4;

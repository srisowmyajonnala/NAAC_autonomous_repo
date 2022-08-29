import React from 'react';
import './c27-style.css';

// Promotion of Research and Facilities
function Criteria27() {
  return (
    <div className="c26-inputFields-mainContainer">
      {/* Key Indicator: 2.7.1 */}
      <div className="c27x-eachInputField-container">
        <form>
          <div className="c27x-label-textarea-container">
            <h1 className="c27x-heading-style">
              <span className="c27x-span-style">2.7.1: </span>
              Online student satisfaction survey regarding to teaching learning process.
            </h1>
          </div>
          <table className="c27x-table-style">
            <tr>
              <th className="c27x-verticalTable-heading1-style">
                File Description
              </th>
              <th className="c27x-verticalTable-heading2-style">
                File Template
              </th>
              <th className="c27x-verticalTable-heading3-style">
                Documents upload
              </th>
            </tr>
            <tr>
              <td>Upload any additional information</td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
            <tr>
              <td>
              Upload database of all currently enrolled students(Data  Template)
              </td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
          </table>
        </form>
      </div>
      <div className="c27x-button-container">
        <button className="c27x-button-style">Save</button>
      </div>
    </div>
  );
}

export default Criteria27;

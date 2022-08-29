import React from 'react';
import './c22-style.css';

// Promotion of Research and Facilities
function Criteria22() {
  return (
    <div className="c22-inputFields-mainContainer">
      {/* Key Indicator: 2.2.1 */}
      <div className="c22x-eachInputField-container">
        <form>
          <div className="c22x-label-textarea-container">
            <h1 className="c22x-heading-style">
              <span className="c22x-span-style">2.2.1: </span>
              The institution assesses the learning levels of the students  and organises special Programmes for advanced learners and slow learners
            </h1>
            <label htmlFor="221-t1" className="c22x-label-style">
              Write description in maximum of 500 words
            </label>
            <textarea
              rows={6}
              className="c22x-textarea-style"
              id="221-t1"
            ></textarea>
          </div>
          <table className="c22x-table-style">
            <tr>
              <th className="c22x-verticalTable-heading1-style">
                File Description
              </th>
              <th className="c22x-verticalTable-heading2-style">
                File Template
              </th>
              <th className="c22x-verticalTable-heading3-style">
                Documents upload
              </th>
            </tr>
            <tr>
              <td>Paste link for additional information</td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
            <tr>
              <td>
              Upload Any additional information
              </td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
          </table>
        </form>
      </div>

      {/* Key Indicator: 2.2.2 */}
      <div className="c22x-eachInputField-container">
        <form>
          <div className="c22x-container">
            <h1 className="c22x-heading-style">
              <span className="c22x-span-style">2.2.2: </span>
              Student - Full time teacher ratio (Data for the latest completed academic year)
            </h1>
          </div>
          <table className="c22x-table-style">
            <tr>
              <th className="c22x-verticalTable-heading1-style">
                  File Description
              </th>
              <th className="c22x-verticalTable-heading2-style">
                  File Template
              </th>
              <th className="c22x-verticalTable-heading3-style">
                  Documents upload
              </th>
            </tr>
            <tr>
              <td>Any additional information</td>
              <td></td>
              <td>
                <input type="file" />
              </td>
            </tr>
          </table>
        </form>
      </div>
      <div className="c22x-button-container">
        <button className="c22x-button-style">Save</button>
      </div>
    </div>
  );
}

export default Criteria22;
